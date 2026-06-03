import json
import math
import random
import re
import sys
import hashlib
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd()
DATA_FILE = ROOT / "Resources" / "Vault Management" / "Interactive Vault Graph Data.js"
OUTPUT_FILE = ROOT / "Resources" / "Vault Management" / "Images" / "interactive-vault-graph-preview.gif"

WIDTH = 1400
HEIGHT = 860
MARGIN = 110
FRAMES = 36
SEED = 20260603
LABEL_PADDING_X = 5
LABEL_PADDING_Y = 3


def load_data():
    text = DATA_FILE.read_text(encoding="utf-8")
    match = re.search(r"window\.VAULT_GRAPH_DATA\s*=\s*(\{.*\});\s*$", text, re.S)
    if not match:
        raise RuntimeError(f"Cannot parse graph data: {DATA_FILE}")
    return json.loads(match.group(1))


def font(size, bold=False):
    candidates = [
        "C:/Windows/Fonts/msyh.ttc",
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
    ]
    for candidate in candidates:
        try:
            return ImageFont.truetype(candidate, size)
        except OSError:
            continue
    return ImageFont.load_default()


def hex_to_rgb(value):
    value = value.lstrip("#")
    return tuple(int(value[i:i + 2], 16) for i in range(0, 6, 2))


def stable_hash(value):
    digest = hashlib.sha256(value.encode("utf-8")).hexdigest()
    return int(digest[:8], 16)


def initial_layout(nodes):
    random.seed(SEED)
    groups = sorted({node.get("primaryTag") or "untagged" for node in nodes})
    group_index = {group: index for index, group in enumerate(groups)}
    center_x = WIDTH / 2
    center_y = HEIGHT / 2 + 20
    for index, node in enumerate(nodes):
        group = node.get("primaryTag") or "untagged"
        gi = group_index[group]
        group_angle = (gi / max(1, len(groups))) * math.tau - math.pi / 2
        local_angle = (index * 2.399963229728653) % math.tau
        ring = 190 + (gi % 4) * 46
        jitter = 70 + (index % 5) * 8
        node["x"] = center_x + math.cos(group_angle) * ring + math.cos(local_angle) * jitter
        node["y"] = center_y + math.sin(group_angle) * ring + math.sin(local_angle) * jitter
        node["vx"] = 0.0
        node["vy"] = 0.0


def simulate(nodes, edges):
    by_id = {node["id"]: node for node in nodes}
    edge_pairs = [(by_id[e["source"]], by_id[e["target"]]) for e in edges if e["source"] in by_id and e["target"] in by_id]
    groups = sorted({node.get("primaryTag") or "untagged" for node in nodes})
    group_index = {group: index for index, group in enumerate(groups)}

    for _ in range(280):
        for i, a in enumerate(nodes):
            for b in nodes[i + 1:]:
                dx = a["x"] - b["x"]
                dy = a["y"] - b["y"]
                dist2 = max(dx * dx + dy * dy, 36)
                force = 5200 / dist2
                dist = math.sqrt(dist2)
                fx = dx / dist * force
                fy = dy / dist * force
                a["vx"] += fx
                a["vy"] += fy
                b["vx"] -= fx
                b["vy"] -= fy

        for a, b in edge_pairs:
            dx = b["x"] - a["x"]
            dy = b["y"] - a["y"]
            dist = max(math.sqrt(dx * dx + dy * dy), 1)
            target = 145
            force = (dist - target) * 0.009
            fx = dx / dist * force
            fy = dy / dist * force
            a["vx"] += fx
            a["vy"] += fy
            b["vx"] -= fx
            b["vy"] -= fy

        for node in nodes:
            group = node.get("primaryTag") or "untagged"
            gi = group_index[group]
            angle = (gi / max(1, len(groups))) * math.tau - math.pi / 2
            gx = WIDTH / 2 + math.cos(angle) * 185
            gy = HEIGHT / 2 + 25 + math.sin(angle) * 185
            node["vx"] += (gx - node["x"]) * 0.004
            node["vy"] += (gy - node["y"]) * 0.004
            node["vx"] *= 0.82
            node["vy"] *= 0.82
            node["x"] = min(WIDTH - MARGIN, max(MARGIN, node["x"] + node["vx"]))
            node["y"] = min(HEIGHT - MARGIN, max(MARGIN, node["y"] + node["vy"]))


def radius_for(node):
    return max(8, min(22, 7 + math.sqrt(max(1, node.get("degree", 1))) * 2.2))


def shorten_title(text, max_length=32):
    if len(text) <= max_length:
        return text
    return text[: max_length - 3] + "..."


def intersects(a, b):
    return not (a[2] < b[0] or b[2] < a[0] or a[3] < b[1] or b[3] < a[1])


def prepare_labels(nodes):
    canvas = Image.new("RGB", (10, 10))
    draw = ImageDraw.Draw(canvas)
    label_font = font(18)
    small_font = font(14)
    occupied = [
        (0, 0, WIDTH, 122),
        (0, HEIGHT - 76, WIDTH, HEIGHT),
    ]

    ordered = sorted(
        nodes,
        key=lambda node: (node.get("degree", 0), len(node.get("title", ""))),
        reverse=True,
    )

    for node in ordered:
        text = shorten_title(node["title"], 34 if node.get("degree", 0) >= 3 else 28)
        text_font = label_font if node.get("degree", 0) >= 3 else small_font
        radius = radius_for(node)
        text_box = draw.textbbox((0, 0), text, font=text_font)
        width = text_box[2] - text_box[0] + LABEL_PADDING_X * 2
        height = text_box[3] - text_box[1] + LABEL_PADDING_Y * 2
        gap = radius + 10
        candidates = [
            (gap, -height / 2),
            (-gap - width, -height / 2),
            (-width / 2, gap),
            (-width / 2, -gap - height),
            (gap, gap * 0.45),
            (gap, -gap - height * 0.45),
            (-gap - width, gap * 0.45),
            (-gap - width, -gap - height * 0.45),
            (radius + 28, -height / 2),
            (-radius - 28 - width, -height / 2),
        ]

        best = None
        for dx, dy in candidates:
            left = min(WIDTH - MARGIN, max(MARGIN * 0.32, node["x"] + dx))
            top = min(HEIGHT - MARGIN * 0.36, max(122, node["y"] + dy))
            box = (left - 3, top - 3, left + width + 3, top + height + 3)
            if not any(intersects(box, used) for used in occupied):
                best = (left - node["x"], top - node["y"], box, text, text_font, width, height)
                occupied.append(box)
                break

        if best is None:
            dx, dy = candidates[stable_hash(node["id"]) % len(candidates)]
            left = min(WIDTH - MARGIN, max(MARGIN * 0.32, node["x"] + dx))
            top = min(HEIGHT - MARGIN * 0.36, max(122, node["y"] + dy))
            box = (left - 3, top - 3, left + width + 3, top + height + 3)
            best = (left - node["x"], top - node["y"], box, text, text_font, width, height)
            occupied.append(box)

        node["label"] = {
            "dx": best[0],
            "dy": best[1],
            "text": best[3],
            "font": best[4],
            "width": best[5],
            "height": best[6],
        }


def draw_frame(data, frame_index):
    nodes = data["nodes"]
    node_by_id = {node["id"]: node for node in nodes}
    tag_colors = data.get("tagColors", {})
    phase = frame_index / FRAMES * math.tau

    image = Image.new("RGB", (WIDTH, HEIGHT), "#171717")
    draw = ImageDraw.Draw(image, "RGBA")

    for y in range(0, HEIGHT, 24):
        alpha = int(16 + 8 * math.sin(phase + y * 0.015))
        draw.line([(0, y), (WIDTH, y)], fill=(255, 255, 255, alpha), width=1)
    for x in range(0, WIDTH, 32):
        draw.line([(x, 0), (x, HEIGHT)], fill=(125, 211, 252, 10), width=1)

    title_font = font(34, bold=True)
    meta_font = font(17)
    small_font = font(16)

    draw.text((54, 38), "My Brain", font=title_font, fill=(245, 245, 245, 235))
    draw.text((54, 82), "Obsidian links + YAML tags + Codex reflection graph", font=meta_font, fill=(180, 180, 180, 190))

    for edge in data["edges"]:
        a = node_by_id.get(edge["source"])
        b = node_by_id.get(edge["target"])
        if not a or not b:
            continue
        ax = a["x"] + math.sin(phase + stable_hash(a["id"]) % 17) * 6
        ay = a["y"] + math.cos(phase + stable_hash(a["id"]) % 19) * 5
        bx = b["x"] + math.sin(phase + stable_hash(b["id"]) % 17) * 6
        by = b["y"] + math.cos(phase + stable_hash(b["id"]) % 19) * 5
        width = 2 if a.get("degree", 0) > 7 or b.get("degree", 0) > 7 else 1
        draw.line([(ax, ay), (bx, by)], fill=(210, 210, 210, 42), width=width)

    for node in sorted(nodes, key=lambda item: item.get("degree", 0)):
        wobble_x = math.sin(phase + (stable_hash(node["id"]) % 100) * 0.07) * 6
        wobble_y = math.cos(phase + (stable_hash(node["title"]) % 100) * 0.05) * 5
        x = node["x"] + wobble_x
        y = node["y"] + wobble_y
        color = hex_to_rgb(tag_colors.get(node.get("primaryTag"), "#bdbdbd"))
        radius = radius_for(node)
        glow = int(70 + 35 * math.sin(phase + radius))
        draw.ellipse((x - radius - 8, y - radius - 8, x + radius + 8, y + radius + 8), fill=(*color, glow))
        draw.ellipse((x - radius, y - radius, x + radius, y + radius), fill=(*color, 235), outline=(245, 245, 245, 170), width=2)

    for node in sorted(nodes, key=lambda item: item.get("degree", 0), reverse=True):
        label = node.get("label")
        if not label:
            continue
        wobble_x = math.sin(phase + (stable_hash(node["id"]) % 100) * 0.07) * 6
        wobble_y = math.cos(phase + (stable_hash(node["title"]) % 100) * 0.05) * 5
        node_x = node["x"] + wobble_x
        node_y = node["y"] + wobble_y
        label_x = node_x + label["dx"]
        label_y = node_y + label["dy"]
        label_w = label["width"]
        label_h = label["height"]
        color = hex_to_rgb(tag_colors.get(node.get("primaryTag"), "#bdbdbd"))
        box = (label_x, label_y, label_x + label_w, label_y + label_h)
        draw.line(
            [(node_x, node_y), (label_x + label_w / 2, label_y + label_h / 2)],
            fill=(*color, 66),
            width=1,
        )
        draw.rounded_rectangle(box, radius=4, fill=(23, 23, 23, 160), outline=(*color, 88), width=1)
        draw.text(
            (label_x + LABEL_PADDING_X, label_y + LABEL_PADDING_Y - 1),
            label["text"],
            font=label["font"],
            fill=(238, 238, 238, 228),
        )

    tags = data.get("tags", [])[:8]
    x = 54
    y = HEIGHT - 56
    for tag in tags:
        color = hex_to_rgb(tag_colors.get(tag, "#bdbdbd"))
        draw.ellipse((x, y + 6, x + 13, y + 19), fill=(*color, 230))
        draw.text((x + 20, y), tag, font=small_font, fill=(220, 220, 220, 205))
        x += min(230, 40 + len(tag) * 9)

    return image


def main():
    data = load_data()
    nodes = [dict(node) for node in data.get("nodes", [])]
    data["nodes"] = nodes
    initial_layout(nodes)
    simulate(nodes, data.get("edges", []))
    prepare_labels(nodes)
    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    frames = [draw_frame(data, index) for index in range(FRAMES)]
    frames[0].save(
        OUTPUT_FILE,
        save_all=True,
        append_images=frames[1:],
        duration=70,
        loop=0,
        optimize=True,
    )
    print(f"Generated {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
