---
tags:
  - course/se
  - se/testing
  - exam/mcq
---

# Testing Quick Notes

## Big Picture

Software testing is a validation activity: the goal is to find defects and build confidence that the software satisfies requirements.

中文抓手：测试不是证明“绝对没 bug”，而是用系统方法发现错误、降低风险。

## Key Terms

- Test case: inputs, execution conditions, and expected results.
- Test oracle: a mechanism or source that tells whether the observed output is correct.
- Black-box testing: design tests from specification without looking at code.
- White-box testing: design tests from program structure/control flow.
- Regression testing: re-test after changes to ensure old behavior still works.

## Black-Box Testing

### Equivalence-Class Testing

English: partition the input domain into equivalence classes; choose representatives from each class.

中文：把输入分成“同类情况”，每类选代表值。

Exam use:

- Valid equivalence classes.
- Invalid equivalence classes.
- Minimum test cases often come from covering all classes efficiently.

### Boundary Value Testing

English: choose values at and around the boundary.

中文：错误常出现在边界，所以测边界点及附近点。

Example pattern:

- If valid range is `1 <= x <= 100`, test `0, 1, 2, 99, 100, 101`.

## White-Box Testing

### Statement Testing

Goal: execute every statement at least once.

中文：覆盖每条语句，但不一定覆盖所有分支结果。

### Branch Testing

Goal: execute every branch outcome at least once.

中文：每个判断的 true/false 都至少走一次。

### Path Testing

Goal: execute independent paths through the control-flow graph.

中文：覆盖路径最强，但路径数量可能爆炸。

## Triangle Class Exercise Pattern

The Lecture 13 class exercise uses triangle classification:

- Invalid input: `a <= 0 || b <= 0 || c <= 0`
- Not triangle: sum of two sides <= the third side.
- Triangle: valid side lengths that satisfy triangle inequality.

Teacher-highlighted minimum set example from PPTX:

- Statement testing: 3 cases.
- Branch testing: 3 cases.
- Path testing: 3 cases.
- Example cases: `(-1, -2, 3)`, `(1, 2, 3)`, `(4, 5, 6)`.

## Multiple-Choice Traps

- Black-box is specification-based, not code-based.
- White-box is structure-based, not user-requirement-only.
- Boundary value testing is a black-box technique.
- Statement coverage does not imply branch coverage.
- Branch coverage does not necessarily imply full path coverage.
