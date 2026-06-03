---
tags:
  - vault/management
  - obsidian/workflow
  - codex/second-brain
---

# Obsidian Codex Usage Guide

这份笔记是当前 vault 的日常使用方法。原则是：你负责低摩擦输入，Codex 负责整理、连接、复盘和提醒，但所有输出必须尽量回到你的私有笔记和当前考试目标。

## Core Goal

当前第二大脑的核心任务不是“把文件夹整理漂亮”，而是服务期末复习：

- Software Engineering：把概念边界、MCQ traps、UML、DFD、structured tree、architecture model、testing diagram 变成可复现的考试输出。
- Quantum Finance：把开放卷资料整理成可快速检索、可直接引用、可解释的答题材料。
- 长期目标：保留你对大模型、NLP、读研、实习、科研、找工作的持续思考线索。

## Exam Sprint Mode - 2026-06-01

Until the 2026-06-06 QF exam, this vault should behave like an exam-output machine:

- QF first priority: CH4-5 QFSE / QPL / FDM / Cardano / numerical algorithm, because the exam has a 40% long calculation question.
- QF second priority: CH6-9 short-answer templates from **Exam Focus**.
- SE priority: timed diagram recall and MCQ boundary practice, not more broad note expansion.
- Knowledge-base cleanup is useful only when it makes review faster or prevents confusion.

## Folder Rules

- `/Inbox`：所有新输入的默认入口。只收集，不精修。
- `/Clippings`：历史网页剪藏暂存区。以后 Web Clipper 默认位置应改到 `/Inbox`。
- `/Notes`：已整理知识。课程笔记、文章摘要、学习资料放这里。
- `/Ideas`：原创思考。包括复盘、观点变化、困惑、灵感。
- `/Projects`：正在推进的任务。每个项目应有一个推进页。
- `/Resources`：外部资源索引。PDF、PPT、图片、大文件优先保留原位置，在这里写路径和用途。

判断规则：

- 如果是“还没想清楚的输入”，放 Inbox。
- 如果是“外部知识整理后可复用”，放 Notes。
- 如果是“我自己的判断、困惑、复盘”，放 Ideas。
- 如果是“有目标、截止时间、下一步行动”，放 Projects。
- 如果是“课件、图片、PDF、PPT 或大文件索引”，放 Resources。

## Relationship Graph Rules

The vault graph should be readable as a tree:

```text
AGENTS -> Vault Relationship Map -> course/review/root indexes -> detail notes
```

- [Vault Relationship Map](./Vault%20Relationship%20Map.md) is the top-level tree, not a full list of every useful note.
- QF details live under QF Course Map.
- SE details live under 00 SE Exam Map.
- Review details live under [Review Index](../../Ideas/Review%20Index.md).
- Do not put every SE/QF/review note directly into the vault relationship map.
- Use `[[wikilinks]]` when the relationship should appear in Obsidian graph.
- Use plain text or file paths when a note is only citing evidence, history, or review context.

Review rule:

- Review Index may be linked from the vault tree.
- Individual review notes should be listed inside Review Index as plain text/path records.
- Each review file may link back to [Review Index](../../Ideas/Review%20Index.md) as its single structural parent.
- Specific review files should not wikilink every note they mention; otherwise the review content will expand in the graph.

## Image Embed Rules

Use note-relative Markdown image paths after importing large imported course notes:

```md
![lec02_waterfall_model.png](<../../../../../Resources/Software Engineering/Images/lec02_waterfall_model.png>)
```

Avoid Markdown image paths when Obsidian reports "file not found":

```md
![lec02_waterfall_model.png](<Resources/Software%20Engineering/Images/lec02_waterfall_model.png>)
![Waterfall Model](se_revision_assets/lec02_waterfall_model.png)
```

Reason: Obsidian may resolve filename-only attachment embeds differently depending on attachment settings and cache, so a nested imported note can show "file not found" even when the image exists inside the vault. Copy course images into `Resources/.../Images` and use a Markdown image path relative to the current note folder.

If Obsidian reports "file not found" for `![[file.png]]`, rewrite the image as an explicit relative Markdown path such as `![file.png](<../../../../../Resources/.../Images/file.png>)`.

Maintenance rule:

- Fixing broken image embeds is allowed as a structure/maintenance edit.
- Do not rewrite the study content while fixing image paths.
- After import, check that image links point to existing files inside the vault.

## GitHub View Rules

Keep the GitHub-rendered version outside the Obsidian vault.

- Obsidian source notes stay inside `D:\study\second-brain`.
- GitHub-renderable Markdown is generated to `D:\study\second-brain-github-view`.
- Do not create a `GitHub View` folder inside the vault, because Obsidian will scan it and duplicate notes in the relationship graph.
- Run `node "Resources/Vault Management/scripts/publish-github-view.js" "D:\study\second-brain"` before publishing a GitHub display version.
- The script converts Obsidian embeds and local Markdown image paths into GitHub Markdown images, and converts `[[note#heading|alias]]` links into normal Markdown links.
- On GitHub, use `main` for rendered notes. The Obsidian source vault is preserved on the `obsidian-vault` branch, and `github-view` is kept as a generated mirror branch.

## Capture Workflow

网页剪藏：

- Obsidian Web Clipper 的 Note location 设置为 `Inbox`。
- Note name 使用 `{{date|date:"YYYY-MM-DD"}} - {{title}}`。
- 剪藏时不手动分类、不手动打复杂标签；需要标记时用 `source/clipping` + `status/inbox`。

临时想法：

- 新建到 `/Inbox`，标题可以用 `YYYY-MM-DD - 想法主题.md`。
- 如果想法明显属于自己的观点，整理时移动到 `/Ideas`。

课程资料：

- SE 原始资料优先保留在 `D:\study\se`，在 `/Resources/Software Engineering/SE Source Index.md` 做索引。
- SE 精简理解和答题模板放到 `/Notes/Courses/Software Engineering/My SE Notes`。
- QF 开放卷材料放到 `/Notes/Courses/Quantum Finance`，优先维护 `QF Open-Book Exam Sheet.md`。
- QF 原始资料优先保留在 `D:\study\qf\ppt`，在 `/Resources/Quantum Finance/QF Source Index.md` 做索引。

## Daily Codex Workflow

每天晚上或复习结束后，对 Codex 说：

```text
整理今天的 Inbox 和 Clippings。只基于我的 vault 内容：
1. 判断每条材料应该进入 Notes / Ideas / Projects / Resources 的哪个位置。
2. 保留来源、日期和可追溯路径。
3. 为课程材料补充 YAML tags。
4. 找出与 SE / QF 期末复习有关的关联。
5. 输出今天最值得继续复习的 3 个问题。
```

期末冲刺时，对 Codex 说：

```text
只基于我的 vault，按考试收益排序今天的复习：
1. QF CH4-5/QPL 长题还缺什么。
2. QF A4 sheet 应该加入或删掉什么。
3. SE 今天最该限时重画哪 2 张图。
4. 给出 90 分钟内能完成的任务清单。
```

每天早上可以让 Codex 生成简报：

```text
基于我的私有笔记生成今天的认知简报：
1. 昨天新增或修改了什么。
2. 和 SE / QF 期末考试最相关的内容是什么。
3. 我可能忽略了哪些知识关联。
4. 今天最应该推进的一件事是什么。
请把结果保存到 /Inbox/brief-YYYY-MM-DD.md。
```

## Weekly Review Workflow

每周固定做一次深度复盘：

```text
通读本周新增和修改的 vault 内容，生成一份周复盘：
1. 我正在形成但还没说清楚的核心观点。
2. 新旧认知之间的冲突。
3. 当前考试复习的缺口。
4. 下周最高杠杆的一件事。
5. 需要移动、合并、删除或补标签的笔记清单。
请保存到 /Ideas/Weekly Reviews/YYYY-MM-DD Weekly Review.md。
```

## Exam Review Workflow

SE 复习时，优先把每个知识点压缩成三种输出：

- MCQ boundary：这个概念和相邻概念的区别是什么。
- Drawing steps：图题第一步画什么、第二步补什么、检查什么。
- Exam wording：英文术语和可直接写在卷面上的表达。

QF 复习时，优先维护开放卷检索能力：

- 每个公式或模型要有“何时使用”和“容易混淆点”。
- 开放卷页要短、可扫读、能快速定位。
- 不追求完整教材化，优先追求考场可用。

## Note Quality Checklist

一篇整理后的笔记至少要有：

- YAML `tags`。
- 清楚标题。
- 来源或上游笔记链接。
- 3-7 条核心结论。
- 至少 1 个和现有笔记的 `[[internal link]]`。
- 如果用于考试，必须有“考场怎么用”。

## Read-Only Rule For Finished Notes

已做好的课程正文、用户亲手整理过的笔记、已经能直接用于复习的内容页，默认只读。

- 可以读取、引用、总结、提出改进建议。
- 不做无关的格式、标签、标题、措辞优化。
- 如果确实需要改，先把建议写到项目页、复盘页或 Inbox 处理记录。
- 只有在用户明确要求“修改这篇笔记”时，才直接编辑正文。

## Current Maintenance Rules

- 不继续扩大一级文件夹，除非它代表稳定存储位置。
- `Clippings` 只作为过渡目录，不作为长期知识区。
- 每周检查一次孤立笔记：没有 tags、没有链接、没有项目归属的笔记要处理。
- 复习冲刺期，优先改进 SE / QF 相关笔记，不做大型知识库美化。
- SE 项目推进看 `/Projects/SE Exam Review.md`，QF 项目推进看 `/Projects/QF Exam Review.md`。
