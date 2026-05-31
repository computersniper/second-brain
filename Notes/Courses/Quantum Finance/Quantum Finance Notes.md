---
tags:
  - course/qf
  - exam/review
  - qf/notes
---

# Quantum Finance Notes

Source folder: `D:\study\qf\ppt`

这篇是量子金融的主笔记，放“大白话理解”和章节逻辑。考试时真正要带的英文公式/答题模板放在 [[QF Open-Book Exam Sheet]]；老师 review 明确点名的考点放在 [[Exam Focus]]。

## 总体抓手

量子金融不是说股票真的变成电子，而是借用 Quantum Mechanics / Quantum Field Theory 里的概念来建模金融市场：

- 单个价格、指数、指标值像 particle：具体、可观察、可记录。
- 整体市场走势、趋势、周期、形态像 wave：连续波动、有结构、有干涉式的复杂行为。
- 市场未来不是一个确定答案，而是多个 possible states。
- 价格/收益率不是完美线性运动，更像 nonlinear oscillation。

一句话：

> Quantum Finance 用 QM/QFT 的 field、wave-particle duality、uncertainty、quantization、oscillator 等思想，结合 computational finance 和 AI，去做金融市场预测、QPL 计算和交易系统。

## CH1 Introduction to Quantum Finance

### CH1.3 Quantum Field Theory and the Birth of Quantum Finance

QFT 的大白话是：粒子不是孤立小球，而是 underlying field 里的 excited state。

放到金融里：

```text
single observed price = 你看到的结果
Quantum Price Field = 背后推动价格变化的整体市场状态
```

所以 Quantum Finance 的出生逻辑是：

```text
QFT: particle = excited state of field
QF: observed price = expression/state of price field
Goal: model, forecast and trade financial markets
```

例子：看到一串 Bitcoin price：

```text
09:00 = 100000
09:01 = 100300
09:02 = 99800
```

普通时间序列视角看涨跌、收益率、均线。Quantum Finance 会问：背后的 market field 是否被激发？是否进入 oscillation？是否有 chaotic dynamics？

### CH1.4 Philosophy: Uncertainty + Fuzzy + Chaos

这一节标题很吓人，但逻辑很简单：

```text
market uncertainty
-> many possible states before observation
-> fuzzy states need Fuzzy Logics
-> chaotic/random-like dynamics need Chaos Theory
```

Uncertainty Principle 在金融里主要是类比：市场结果出现前，上涨、下跌、横盘、先涨后跌都可能存在；交易和观察发生后，才出现一个 realized state。

Fuzzy Logics 处理“不是 0/1 的状态”。例如：

```text
bullish degree = 0.7
bearish degree = 0.3
```

Chaos Theory 处理“看起来随机，但可能由复杂确定系统产生”的市场波动。例如新闻、利率信号、大资金卖单都可能引发非线性放大。

### CH1.5 Basic Components of Quantum Finance

关键图：

![[ch1-concentric-sphere-model.png]]

Concentric Sphere Model 可以记成四层：

```text
Energy Field Layer -> Neural Layer -> FinTech Layer -> Application Layer
```

| Layer | 大白话 |
|---|---|
| Energy Field Layer | 最核心，提供 Quantum Price Field (QPF) |
| Neural Layer | 用 neural dynamics / neural oscillators 描述市场怎么动 |
| FinTech Layer | 提供 FL, GA, CT, Fractals, SVMs 等工具 |
| Application Layer | 落到 QPL、短期预测、长期趋势预测、多智能体交易系统 |

最重要的一句话：

> CH1.5 是在告诉你 Quantum Finance 的整体架构：从 Quantum Price Field 出发，通过 Neural Layer 和 FinTech tools 建模复杂市场，最后应用到 prediction 和 trading systems。

## CH2 Quantum Field Theory for Quantum Finance

### CH2.1 Quantum Mechanics - The Basics

CH2.1 是给 QFT 和 Quantum Finance 铺垫的四个 QM 基础特征：

| Concept | 大白话 | QF 类比 |
|---|---|---|
| Wave-Particle Duality | 同一个量子对象既像粒子也像波 | price/indicator 是 particle-like，market pattern/trend 是 wave-like |
| Quantization | 有些量不是连续任意值，而是一档一档的 | Quantum Price Levels (QPL) |
| Uncertainty Principle | 有些变量不能同时无限精确测量 | 观察市场有天然精度限制 |
| Quantum Entanglement | 状态不能彼此独立描述 | forex、gold、crude oil 等市场可能联动 |

最容易考的表达：

```text
Wave-Particle Duality:
price / indicator = particle-like
market pattern / trend = wave-like
```

Quantization 不要理解成“价格乱跳”，重点是 discrete levels / allowed states。

Uncertainty Principle 重点不是仪器不够好，而是系统本身存在 natural limit of precision。

Entanglement 不等于普通 correlation。它更强调 states cannot be described independently。

### CH2.2 From Quantum Mechanics to Quantum Field Theory

QM 主要研究已有粒子的量子行为；QFT 更进一步研究 field、粒子相互作用、粒子产生和湮灭。

QFT 由三部分组合：

| Component | 提供什么 |
|---|---|
| Quantum Mechanics | wavefunction, uncertainty, quantization 等量子规则 |
| Classical Field Theory | field 的概念：每个时空点都有某种物理量 |
| Special Relativity | mass-energy relation，解释 creation / annihilation |

最短记忆：

```text
QM: quantum rules for particles
CFT: field at each point of space and time
SR: mass-energy equivalence, E = mc^2
QFT: quantum fields + particle interaction / creation / annihilation
QF: uses QFT ideas to model price fields and market dynamics
```

### CH2.3 Classical Field vs Quantum Field

关键图：

![[ch2-classical-vs-quantum-field.png]]

Field 是一张覆盖 space and time 的“数值地图”：

```text
field = a physical quantity assigned to each point of space and time
```

核心区别：

| Classical Field | Quantum Field |
|---|---|
| 每个点给 exact value | 每个点给 distribution / probability |
| 更确定 | 和 uncertainty / wave-particle duality 有关 |

放到金融里：

```text
Classical thinking: tomorrow price = one exact value
Quantum-field-like thinking: future prices = possible states with probabilities
```

QPF 可以理解为：价格背后不是一个确定值机器，而是包含多种可能状态和概率分布的 field。

### CH2.4 Path Integral Formulation

关键图：

![[ch2-path-integral-infinite-slit.png]]

Path Integral 的核心：

```text
Path Integral = sum over all possible paths
```

它不是 shortest path，也不是 best path。

Double-slit 的逻辑：

```text
two slits -> sum of two path amplitudes
many slits -> sum of many path amplitudes
infinite slits/layers -> sum over infinite possible paths
```

金融类比：利率从现在状态到未来状态，不只考虑一条路径，而是考虑很多可能路径。

```text
r0 -> many possible paths -> rT
```

### CH2.5 Feynman Diagrams

Feynman Diagram 是 QFT 的图形语言：

```text
line = particle propagation
vertex = interaction
external end = input/output
diagram = compact visual form of a complex QFT / path-integral expression
```

重点不是会画复杂粒子图，而是知道它的作用：

> 用 lines 和 vertices 把复杂的粒子相互作用和数学表达可视化。

在 Quantum Finance 里，它目前不一定直接使用，但帮助理解“复杂相互作用可以结构化表达”。

### CH2.6 Quantum Oscillators

关键图：

![[ch2-quantum-harmonic-oscillator.png]]

![[ch2-quantum-anharmonic-oscillator.png]]

Oscillator 就是会振荡的系统。Quantum Oscillator 是带量子规则、能级离散的振荡系统。

重点区别：

| Concept | 大白话 |
|---|---|
| Harmonic Oscillator | 理想、规则、简单振荡 |
| Damped Oscillator | 有阻尼，振荡会衰减 |
| Quantum Harmonic Oscillator (QHO) | 量子版本，energy levels are discrete |
| Anharmonic Oscillator (AHO) | 非理想、非线性、更接近真实世界 |

金融类比：

> price return r 的动态不是完美线性振荡，更像 quartic Quantum Anharmonic Oscillation。

## CH3 An Overview of Quantum Finance Models

### CH3.1 An Introduction

第三章回答三个问题：

```text
What is Quantum Finance?
What are the major Quantum Finance Models?
Quantum Finance - Which Way to Go?
```

QF 的组合：

```text
Quantum Theory + Computational Finance + Computer Modeling + AI Technology
```

两条主线：

| Model | 大白话 |
|---|---|
| Path Integral Model | 从当前状态到未来状态，考虑所有可能路径 |
| Quantum Anharmonic Oscillator Model | 用非线性量子振荡描述 price return dynamics |

### CH3.2 A Brief History of Quantum Finance

时间线：

```text
1900 Bachelier -> Brownian motion, option pricing, mathematical finance
1990s Quantum Finance -> QM/QFT applied to economics/finance
1999 Mantegna & Stanley -> Introduction to Econophysics
2004 Baaquie -> Path Integral for option pricing and interest rate modeling
```

这节最后落到：

```text
Two major models = Path Integral Approach + Quantum Anharmonic Oscillator Approach
```

### CH3.3 Path Integral Approach of Quantum Finance

关键图：

![[ch3-forward-interest-rate-field.png]]

这节是把 CH2 的 Path Integral 放到 forward interest rate modeling。

Forward interest rate：

```text
f(t, x) = rate fixed at current time t for an instantaneous loan at future time x
```

大白话：在某个当前时间 `t`，你看未来不同 maturity `x` 的 forward rates，会得到一条 forward rate curve。

为什么要用 field？

- 不同 maturity 的利率随机变化；
- 但它们 highly correlated；
- 所以不适合只当一个单点变量；
- 更适合看成 `calendar time t` 和 `future maturity x` 上的 field。

QFT 模型引入：

```text
A(t,x) = two-dimensional quantum field
```

Path Integral 在这里变成：

```text
integrate over all possible functions A(t,x)
```

最短记忆：

```text
Forward rate f(t,x) is a curve over maturity x.
QFT introduces A(t,x) as a 2D quantum field.
Path Integral integrates over all possible A(t,x).
```

### CH3.4 Quantum Anharmonic Oscillator Approach

关键图：

![[ch3-qfse-characteristics.png]]

这一节是第三章最重要的模型之一。

它的动机：

```text
Instead of integrating all possible paths, solve the Schrodinger Equation directly using numerical methods.
```

为什么选 `price return r`，不是 price？

| Item | Role |
|---|---|
| price | observed market level / later used for QPL |
| price return r | relative change, analogous to displacement x |

所以：

```text
price return r = Quantum Financial Particle (QFP)
r <-> displacement x from equilibrium
```

Hamiltonian 的金融含义：

| Physics term | Finance meaning |
|---|---|
| Kinetic Energy | quantum motion of QFP / return movement |
| Potential Energy | Quantum Energy Field / Quantum Price Energy Levels |
| hbar | uncertainty of irrational transaction |
| m | intrinsic market properties, e.g. market capital |

PDF：

```text
Q(r,t) = |Psi(r,t)|^2
```

意思是 return 的观测分布可以看成 wavefunction 的概率密度。

Excess Demand：

```text
z = demand - supply
```

它把市场供需和 return dynamics 接起来。

QFSE 的三条主特征：

1. contains both K.E. and P.E. terms;
2. is an anharmonic oscillator with high-order potential terms;
3. quantum dynamics are controlled by price return `r`, although market is observed as price.

最终目的：

```text
solve QFSE -> evaluate Quantum Price Levels (QPL)
```

### CH3.5 Path Integral vs QAHO

关键图：

![[ch3-path-integral-vs-qaho.png]]

目前先记框架：

| Approach | Core idea | Typical target |
|---|---|---|
| Path Integral | all possible paths/functions | forward interest rate, option pricing |
| QAHO | solve Schrodinger Equation as nonlinear oscillator | price return dynamics, QPL |

考试如果问 “which way to go”，可以回答：Path Integral is theoretically powerful but computationally heavy; QAHO is more direct for numerical implementation and QPL computation.

