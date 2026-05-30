---
tags:
  - course/se
  - se/use-case
  - se/diagram
  - exam/mcq
  - exam/drawing
---

# 11 Use Case Diagram Relationships

Source: user-provided slide image "Relationships in Use Case Diagrams".

## What This Slide Is About

这张表是在总结 Use Case Diagram 里几种常见 relationship：

- generalization
- communication
- include
- extend
- inheritance

考试时要能做到两件事：

- 看到符号能说出 relationship name。
- 看到题目描述能选择应该画哪一种关系。

## Relationship Table

| Relationship | Between | Symbol / notation | 中文理解 |
|---|---|---|---|
| generalization | between actors | solid line + hollow triangle arrow | actor 之间的泛化/继承，子 actor 是父 actor 的一种 |
| communication | actors and use cases | solid line | actor 与 use case 之间有交互 |
| include | between use cases | dashed arrow labeled `<<include>>` | 必做的公共子功能 |
| extend | between use cases | dashed arrow labeled `<<extend>>` | 条件触发的可选扩展功能 |
| inheritance | between use cases | line + hollow triangle arrow | use case 之间的泛化/特殊化 |

## Communication

English:

Communication is an association between an actor and a use case.

中文：

`communication` 就是 actor 和 use case 之间的普通连接线，表示这个 actor 会参与/触发/使用这个功能。

Example:

```text
Customer -------- Withdraw money
Customer -------- Transfer
```

Exam warning:

- Communication is not `include` or `extend`.
- Actor 和 use case 之间通常画实线，不写 `<<include>>` / `<<extend>>`。

## Generalization Between Actors

English:

Actor generalization means a specialized actor inherits the behavior/permissions of a more general actor.

中文：

如果 `VIP Customer` 是一种 `Customer`，就可以画 actor generalization。

Example:

```text
VIP Customer --|> Customer
```

Meaning:

- `VIP Customer` is a kind of `Customer`.
- VIP Customer can do what Customer can do, plus maybe extra use cases.

Exam warning:

- Generalization arrow points to the more general actor.
- Hollow triangle points to parent/general actor.

## Include

English:

`include` means mandatory reuse between use cases.

中文：

每次执行 base use case，都会执行 included use case。

Arrow direction:

```text
Base use case --<<include>>--> Included use case
```

Example:

```text
Withdraw money --<<include>>--> Authenticate user
Transfer --<<include>>--> Authenticate user
```

Meaning:

- 取钱必须认证。
- 转账必须认证。
- `Authenticate user` 是公共子流程。

## Extend

English:

`extend` means optional or conditional behavior between use cases.

中文：

base use case 可以独立完成，extension use case 只在某个条件下发生。

Arrow direction:

```text
Extension use case --<<extend>>--> Base use case
```

Example:

```text
Inquire balance --<<extend>>--> Withdraw money
```

Meaning:

- 取钱时可能顺便查余额。
- 查余额不是取钱必做步骤。

More detail: [[10 Include vs Extend]]

## Inheritance Between Use Cases

English:

Use case inheritance/generalization means a specialized use case is a specific form of a more general use case.

中文：

use case 之间也可以有“父功能/子功能”的关系。子 use case 是父 use case 的特殊版本。

Example:

```text
Transfer between different currency --|> Transfer
Transfer between same currency --|> Transfer
```

Meaning:

- `Transfer between different currency` is a specific type of `Transfer`.
- `Transfer between same currency` is also a specific type of `Transfer`.

Exam warning:

- 这不是 `include`，因为不是“每次 Transfer 都必须做 different currency transfer”。
- 这也不一定是 `extend`，因为它可能只是 transfer 的分类/特化。
- 如果老师 slide 写的是 `inheritance between use cases`，考试优先按老师符号记；标准 UML 常把它叫 use case generalization。

## How To Decide Quickly

Ask:

1. Is it actor-to-use-case interaction?
   - Yes -> communication.
2. Is it "A is a kind of B"?
   - Yes -> generalization / inheritance.
3. Is it mandatory reused behavior?
   - Yes -> include.
4. Is it optional or conditional extra behavior?
   - Yes -> extend.

## Memory Summary

```text
communication = actor uses function
generalization = is-a relationship
include = must do
extend = may happen
inheritance = special use case is a kind of general use case
```

## MCQ Traps

- Actor-use case solid line is communication, not include.
- Include and extend are only between use cases.
- Hollow triangle means generalization/inheritance.
- Include arrow points to the reused sub-use case.
- Extend arrow points back to the base use case.
- If two use cases are variants, use case inheritance/generalization may be better than include/extend.
