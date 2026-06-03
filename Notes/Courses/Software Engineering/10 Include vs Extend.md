---
tags:
  - course/se
  - se/use-case
  - se/diagram
  - exam/mcq
  - exam/drawing
---

# 10 Include vs Extend

Use this page for Lecture 4 use case diagram questions.

## Core Idea

`include` 和 `extend` 都是 use case diagram 里的关系，但含义完全不同：

- `include`: 必做的公共步骤。Base use case always uses the included use case.
- `extend`: 条件触发的可选行为。Extension use case happens only under some condition.

一句话：

- Include = must do / reuse common behavior.
- Extend = may happen / optional behavior under condition.

## Include

English definition:

An `include` relationship means that one use case always incorporates the behavior of another use case.

中文理解：

`include` 表示“每次执行 A，都一定会执行 B”。B 通常是多个 use case 共享的公共子流程。

Notation:

- Dashed arrow with `<<include>>`.
- Arrow direction: from base use case to included use case.

Memory:

```text
Base use case  --<<include>>-->  Included use case
```

When to use:

- The behavior is mandatory.
- The behavior is reused by several use cases.
- You want to avoid repeating the same common steps.

Example:

- `Transfer money` includes `Authenticate user` if authentication must happen for every transfer.
- `Withdraw cash` includes `Authenticate user` if every withdrawal must authenticate.

Exam warning:

- Do not use `include` just because one use case is related to another.
- Do not use `include` for optional branches.

## Extend

English definition:

An `extend` relationship means that one use case adds optional or conditional behavior to a base use case.

中文理解：

`extend` 表示“正常执行 A 时，不一定会发生 B；只有满足某个条件时，B 才插入/扩展 A”。

Notation:

- Dashed arrow with `<<extend>>`.
- Arrow direction: from extension use case to base use case.

Memory:

```text
Extension use case  --<<extend>>-->  Base use case
```

When to use:

- The behavior is optional.
- The behavior happens only under a condition.
- The base use case can still complete without the extension.

Example:

- `Show overdraft warning` extends `Withdraw cash` when balance is insufficient.
- `Apply discount` extends `Checkout` when the customer has a coupon.

Exam warning:

- Do not use `extend` for mandatory common behavior.
- If the base use case cannot make sense without the other use case, it is probably not `extend`.

## Compare By Questions

Ask these in order:

1. Is the second behavior always executed?
   - Yes -> likely `include`.
   - No -> continue.
2. Is the second behavior optional or conditional?
   - Yes -> likely `extend`.
   - No -> maybe simple association/generalization, or no relationship.
3. Is the behavior just a variant/special case?
   - It may be use case generalization, not include/extend.

## Bank Transfer Example

Class exercise terms:

- `Customer`
- `Transfer`
- `Transfer between same currency`
- `Transfer between different currency`
- `Time deposit`
- `Inquire balance`

Possible interpretations:

### No include/extend

Use when:

- `Transfer between same currency` and `Transfer between different currency` are just shown as related transfer functions.
- The question does not specify mandatory reuse or optional conditions.

This is often the safest simple answer.

### Extend

Use when:

- `Transfer` is the normal/base behavior.
- `Transfer between different currency` happens only when currencies differ.
- The base transfer can still exist without that special branch.

Example:

```text
Transfer between different currency --<<extend>>--> Transfer
condition: currencies are different
```

### Include

Use when:

- `Transfer` always requires a shared sub-use case.
- For example, every transfer must include `Authenticate user` or `Check balance`.

Bad use:

- `Transfer --<<include>>--> Transfer between different currency` is bad if not every transfer is different-currency transfer.

## Arrow Direction Cheat Sheet

| Relationship | Meaning | Arrow starts from | Arrow points to |
|---|---|---|---|
| `include` | mandatory reused behavior | base use case | included use case |
| `extend` | optional/conditional behavior | extension use case | base use case |

Memory trick:

- Include arrow points to what is reused.
- Extend arrow points back to what is extended.

## Multiple-Choice Traps

- `include` does not mean "contains all child types"; it means mandatory behavior reuse.
- `extend` does not mean "inheritance"; it means optional behavior extension.
- A use case connected to an actor is not automatically include/extend.
- If a function is always required, do not choose `extend`.
- If a function happens only under a condition, do not choose `include`.
- If two use cases are alternatives, the relationship may be generalization or simply separate use cases.

## Drawing Checklist

- [ ] First draw actor and main use cases without include/extend.
- [ ] Add `include` only for mandatory shared behavior.
- [ ] Add `extend` only for optional/conditional behavior.
- [ ] Check arrow direction.
- [ ] Label relationship as `<<include>>` or `<<extend>>`.
- [ ] Write condition for `extend` if possible.

## Exam Sentence

In a use case diagram, `include` represents mandatory reuse of another use case, while `extend` represents optional or conditional behavior that extends a base use case.

Related symbol table: [11 Use Case Diagram Relationships](./11%20Use%20Case%20Diagram%20Relationships.md)
