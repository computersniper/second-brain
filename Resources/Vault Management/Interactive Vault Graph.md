---
tags:
  - vault/management
  - obsidian/graph
  - obsidian/workflow
---

# Interactive Vault Graph

This note points to a local, draggable relationship graph for the vault.

Open the HTML file:

[Interactive Vault Graph](Interactive%20Vault%20Graph.html)

## What It Does

- Drag nodes to reshape the graph.
- Pan the canvas and zoom with the mouse wheel.
- Click a node to inspect what it represents.
- Double-click a node to open the linked Markdown file.
- Filter by tag and search by note title/path.
- Color nodes by their primary YAML tag.
- Draw edges from Obsidian-style `[[wikilinks]]`, embeds, and local Markdown links.
- Works offline with no external JavaScript libraries.

## Updating The Graph

The graph data is generated from Markdown files, not from `.obsidian/graph.json`.

Run this from the vault root after adding notes, links, or tags:

```powershell
node "Resources\Vault Management\scripts\build-interactive-vault-graph.js"
```

The script regenerates:

```text
Resources/Vault Management/Interactive Vault Graph Data.js
```

## Data Rules

- Nodes: every Markdown file in the vault.
- Node color: first meaningful YAML tag, using a stable palette.
- Edges: resolved `[[internal links]]`, `![[embeds]]`, and relative `.md` links.
- `.obsidian/graph.json`: useful for Obsidian display settings, but not reliable as the complete source of note relationships.
