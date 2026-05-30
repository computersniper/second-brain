---
tags:
  - course/se
  - se/my-notes
  - se/use-case
  - exam/drawing
  - exam/mcq
---

# Use Case Relationships - My Summary

![[use-case-diagram-relationships.png]]

## The Five Relationships

| Relationship | Between | Meaning |
|---|---|---|
| communication | actor and use case | actor uses or participates in a use case |
| generalization | actors | one actor is a special type of another actor |
| include | use cases | mandatory reused behavior |
| extend | use cases | optional or conditional extra behavior |
| inheritance / generalization | use cases | one use case is a special type of another use case |

## Communication

```text
Customer -------- Withdraw money
```

中文：

Customer 和 Withdraw money 之间有交互。  
这是最普通的 actor-use case 实线关系。

Do not confuse:

- communication 不是 include。
- communication 不是 extend。

## Include

```text
Base use case --<<include>>--> Included use case
```

Core meaning:

- 必做。
- 公共步骤。
- 每次执行 base use case，都会执行 included use case。

Example:

```text
Withdraw money --<<include>>--> Authenticate user
Transfer --<<include>>--> Authenticate user
```

中文理解：

取钱和转账都必须认证用户，所以 `Authenticate user` 是公共必做步骤。

## Extend

```text
Extension use case --<<extend>>--> Base use case
```

Core meaning:

- 可选。
- 条件触发。
- base use case 可以独立完成。

Example:

```text
Inquire balance --<<extend>>--> Withdraw money
```

中文理解：

取钱时可能顺便查余额，但查余额不是每次取钱都必须做。

## Inheritance / Generalization

```text
Specific use case --|> General use case
```

Core meaning:

- `A is a kind of B`
- A 是 B 的一种特殊版本。

Example:

```text
Transfer between same currency --|> Transfer
Transfer between different currency --|> Transfer
```

中文理解：

同币种转账、跨币种转账，都是 Transfer 的具体类型。

## Fast Decision Rule

Ask these questions:

1. Actor 和功能之间有交互？
   - communication
2. A 是 B 的一种？
   - inheritance / generalization
3. 每次都必须做？
   - include
4. 有条件才额外发生？
   - extend

## Exam Trap

`Transfer between different currency` usually should not be `include`, because not every transfer is a different-currency transfer.

It can be:

- inheritance/generalization, if it is a subtype of Transfer.
- extend, if the teacher treats it as a conditional extension of normal Transfer.
- no include/extend, if the question only asks for simple use cases.

Related detailed notes:

- [[10 Include vs Extend]]
- [[11 Use Case Diagram Relationships]]

