---
tags:
  - vault/management
  - obsidian/workflow
  - review/weekly
---

# Second Brain Review - 2026-05-31

Review index: [Review Index](../../Ideas/Review%20Index.md)

## Snapshot

当前 vault 已经具备第二大脑的基础结构：

- 有 `AGENTS.md`，Codex 能理解你的身份、目标、课程重点和输出偏好。
- 有稳定一级目录：Inbox、Notes、Ideas、Projects、Resources。
- SE 已形成较完整的考试复习区，包括 exam map、drawing guide、testing、cost estimation、glossary、cram sheet、drawing drill pack、use case relationships。
- QF 已有 course map、introduction、open-book exam sheet，方向清晰但还需要继续沉淀。
- 已有标签指南，但还需要覆盖 QF、工作流状态、剪藏来源和复盘类笔记。

## Main Problems

1. `Clippings` 和 `Inbox` 的职责冲突。
   - 当前网页剪藏在 `Clippings`，但你的 vault 规则要求所有新输入先进 `Inbox`。
   - 建议以后把 Web Clipper 默认位置改成 `Inbox`，`Clippings` 只处理历史剪藏。

2. `Ideas` 目录目前没有形成稳定复盘输出。
   - 你的目标里有“认知变化、新旧观点冲突、思维漏洞”，但当前主要内容仍集中在课程 Notes。
   - 建议新增 weekly review 习惯，把 Codex 的深度复盘保存到 `Ideas/Weekly Reviews`。

3. `Resources` 已经出现，但还没有完全承担“外部资料索引”的职责。
   - SE 有 source index，这是好模式。
   - QF 如果有课件、PDF、公式资料，也应该建立类似 `Resources/Quantum Finance/QF Source Index.md`。

4. 标签体系偏 SE，暂时没有覆盖 QF 和工作流状态。
   - 建议增加 `course/qf`、`qf/open-book`、`status/inbox`、`source/clipping`、`review/weekly` 等标签。

5. 项目推进页刚补齐，但 QF 后续还需要持续填内容。
   - 已新增 `Projects/QF Exam Review.md`。
   - 后续让 SE / QF 都保持明确的下一步任务、截止时间、薄弱点。

## Highest Leverage Improvements

优先级 1：把输入入口统一。

- Web Clipper 默认保存到 `/Inbox`。
- 每晚让 Codex 整理 Inbox 和 Clippings。
- 整理后 Clippings 不长期堆积。

优先级 2：把复习笔记改成考试输出。

- SE 每个图题笔记都补“drawing steps”和“common mistakes”。
- SE 每个概念笔记都补“MCQ boundary”。
- QF 每个开放卷条目都补“when to use”和“confusion trap”。

优先级 3：建立复盘目录。

- 新建 `/Ideas/Weekly Reviews`。
- 每周复盘只问四件事：观点变化、认知冲突、知识缺口、下一步最高杠杆行动。

优先级 4：维护 QF 项目页和资源索引。

- 已新建 `/Projects/QF Exam Review.md`。
- 已新建 `/Resources/Quantum Finance/QF Source Index.md`。
- 下一步是把真实课件文件链接补进 source index。

## Suggested Next Codex Prompt

```text
请基于我的 vault，只处理 SE 和 QF 期末复习：
1. 检查 SE / QF 笔记有没有 tags、internal links、exam usage。
2. 找出最影响考试输出的 5 个缺口。
3. 给我生成今天的复习任务清单。
4. 不要泛泛总结，每条建议都链接到具体笔记。
```
