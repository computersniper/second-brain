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
- `Ideas`: 原创思考、复盘、观点变化
- `Projects`: 正在推进的任务
- `Resources`: 外部资源索引
- `Clippings`: 历史网页剪藏暂存区；新剪藏优先进入 `Inbox`

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
- `course/qf`: Quantum Finance notes.

SE topic tags:

- `se/index`: course control page.
- `se/use-case`: use case diagrams and relationships.
- `se/diagram`: diagram concepts.
- `se/class-exercise`: class exercise explanations.
- `se/ppt`: PPT explanations.

QF topic tags:

- `qf/index`: course control page.
- `qf/open-book`: open-book exam sheet and quick lookup material.
- `qf/model`: models, formulas, assumptions, or derivations.
- `qf/trap`: confusing points and exam traps.

Exam tags:

- `exam/map`: exam overview.
- `exam/drawing`: drawing question preparation.
- `exam/mcq`: multiple-choice traps.
- `exam/cram`: final review material.
- `exam/open-book`: open-book exam material.

Workflow tags:

- `status/inbox`: not fully processed yet.
- `status/processed`: already organized into a stable note.
- `source/clipping`: captured from web clipping.
- `review/daily`: daily brief or daily review.
- `review/weekly`: weekly review.

Vault tags:

- `vault/management`: vault organization.
- `obsidian/tags`: Obsidian tag rules.
- `obsidian/workflow`: Obsidian usage workflow.
- `codex/second-brain`: Codex-assisted second-brain workflow.

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

Find all QF notes:

```text
tag:course/qf
```

Find SE drawing-practice notes:

```text
tag:course/se tag:exam/drawing
```

Find open-book exam notes:

```text
tag:exam/open-book
```

Find use case notes:

```text
tag:se/use-case
```

Find vault-management notes:

```text
tag:vault/management
```

Find unprocessed captured material:

```text
tag:status/inbox OR tag:source/clipping
```
