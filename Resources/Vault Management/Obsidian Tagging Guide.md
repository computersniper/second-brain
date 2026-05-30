---
tags:
  - vault/management
  - obsidian/tags
---

# Obsidian Tagging Guide

This is the tag management rule for this vault.

## Folder vs Tag vs Link

Use folders for stable places:

- `Inbox`: 未整理输入
- `Notes`: 已整理知识
- `Projects`: 正在推进的任务
- `Resources`: 外部资源索引

Use links for concept relationships:

- `[[10 Include vs Extend]]`
- `[[11 Use Case Diagram Relationships]]`

Use tags for filtering and status:

- Which course?
- Which exam type?
- Which workflow status?
- Which knowledge type?

## Obsidian Tag Basics

In Obsidian, tags can be written inline like `#course/se`, or stored in note Properties/YAML:

```yaml
---
tags:
  - course/se
  - exam/drawing
---
```

Recommended style in this vault:

- Prefer YAML `tags` property at the top of the note.
- Use lowercase tags.
- Use nested tags with `/`.
- Avoid spaces.
- Do not create too many one-off tags.

Official Obsidian behavior to remember:

- Tags can be added with `#tag` in the note body or with the `tags` property.
- Nested tags use forward slashes, for example `#course/se`.
- Searching `tag:course` can match nested tags such as `#course/se`.
- Tags cannot contain spaces.

Sources:

- [Obsidian Tags](https://help.obsidian.md/tags)
- [Obsidian Properties](https://help.obsidian.md/properties)

## Current Tag Taxonomy

Course tags:

- `course/se`: Software Engineering notes.

SE topic tags:

- `se/index`: course control page.
- `se/use-case`: use case diagrams and relationships.
- `se/diagram`: diagram concepts.
- `se/class-exercise`: class exercise explanations.
- `se/ppt`: PPT explanations.

Exam tags:

- `exam/map`: exam overview.
- `exam/drawing`: drawing question preparation.
- `exam/mcq`: multiple-choice traps.
- `exam/cram`: final review material.

Vault tags:

- `vault/management`: vault organization.
- `obsidian/tags`: Obsidian tag rules.

## When To Add Tags

Add a course tag to every course note:

```yaml
tags:
  - course/se
```

Add an exam type tag when the note is useful for a specific exam format:

```yaml
tags:
  - exam/drawing
  - exam/mcq
```

Add a topic tag only when the note is mainly about that topic:

```yaml
tags:
  - se/use-case
```

## What Not To Do

Do not tag every tiny word:

```yaml
tags:
  - software
  - engineering
  - diagram
  - exam
  - important
  - note
```

This creates noise.

Do not use both singular and plural:

- Bad: `se/diagram`, `se/diagrams`
- Good: choose `se/diagram`

Do not use tags to replace real links:

- If two notes explain each other, use normal Obsidian internal links.
- If you only want to filter notes by type/status/topic, use tags.

## Useful Searches

Find all SE notes:

```text
tag:course/se
```

Find SE drawing-practice notes:

```text
tag:course/se tag:exam/drawing
```

Find use case notes:

```text
tag:se/use-case
```

Find vault-management notes:

```text
tag:vault/management
```
