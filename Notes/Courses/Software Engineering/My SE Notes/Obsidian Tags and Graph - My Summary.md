---
tags:
  - course/se
  - se/my-notes
  - vault/management
  - obsidian/tags
  - obsidian/graph
---

# Obsidian Tags and Graph - My Summary

## Folder, Link, Tag

Folders answer:

```text
Where should this note live?
```

Links answer:

```text
Which notes are conceptually connected?
```

Tags answer:

```text
How do I filter notes quickly?
```

## My SE Tag Rules

Use YAML Properties at the top of notes:

```yaml
---
tags:
  - course/se
  - exam/drawing
  - se/use-case
---
```

Useful searches:

```text
tag:course/se
tag:se/use-case
tag:course/se tag:exam/drawing
```

Current useful tags:

- `course/se`: all Software Engineering notes.
- `se/use-case`: use case diagram notes.
- `se/diagram`: diagram-related notes.
- `exam/drawing`: drawing-question practice.
- `exam/mcq`: multiple-choice traps.
- `se/my-notes`: my own curated notes.

## Obsidian Graph Animation

There are two different "animations" people usually mean:

### 1. Time-lapse animation

This is the built-in Graph View animation.

How to run:

1. Open Graph View.
2. Open Graph settings.
3. Go to Display.
4. Click `Animate`.

Meaning:

- Notes and attachments appear in chronological order based on creation time.
- This is more like a history playback of how the vault grew.

Important:

- Obsidian's built-in `Animate` is a button, not a permanent auto-start setting.
- If you want it, you click `Animate` when viewing the graph.

### 2. Force-directed movement

This is the graph automatically moving/spreading nodes according to physics forces.

Where to adjust:

- Graph View -> settings -> Forces
- Center force
- Repel force
- Link force
- Link distance

Meaning:

- Center force controls compactness.
- Repel force pushes nodes apart.
- Link force controls how strongly linked notes pull together.
- Link distance controls line length.

If the graph looks too crowded:

- Increase repel force.
- Increase link distance.
- Adjust center force until clusters are readable.

## What I Should Remember

For exam review, graph view is useful only after links are good.

So the order is:

1. Write useful notes.
2. Add meaningful links.
3. Add simple tags.
4. Then use graph view.

References:

- [Obsidian Graph View](https://help.obsidian.md/plugins/graph)
- [Obsidian Tags](https://help.obsidian.md/tags)
- [Obsidian Properties](https://help.obsidian.md/properties)
