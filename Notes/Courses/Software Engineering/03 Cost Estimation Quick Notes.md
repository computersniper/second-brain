# Cost Estimation Quick Notes

## Why Cost Estimation Matters

Software project cost estimation estimates the effort, time, and money needed to build a software system.

中文抓手：软件项目主要成本往往是人力，而不是硬件。

## Basic Measures

- LOC: lines of code.
- SLOC: source lines of code.
- KLOC: thousand lines of code.
- Function points: estimate size from user-visible functionality.
- Object points: estimate size from screens, reports, and components.
- Productivity: output per unit effort, often `size / person-month`.
- Person-month / man-month: one person working for one month.

## COCOMO II Models

COCOMO II is an algorithmic cost modelling method.

Teacher review photo scope:

- Application composition model.
- Early design model.
- Reuse model.
- Post-architecture model.

中文区别：

- Application composition: early prototyping / GUI-based application, often uses object points.
- Early design: rough architecture known, limited project details.
- Reuse: accounts for adapted/reused software.
- Post-architecture: more detailed architecture and cost drivers are known.

## Other Techniques

- Algorithmic cost modelling: use formula/model to estimate cost.
- Price to win: estimate based on what price is likely to win the contract, not necessarily actual effort.
- Staff and calendar time: effort does not convert linearly into schedule because communication overhead increases.

## Multiple-Choice Traps

- More people does not always mean proportionally shorter time.
- LOC is language-dependent.
- Function points focus on functionality, not exact code lines.
- Price to win can be risky because it may ignore real project cost.

