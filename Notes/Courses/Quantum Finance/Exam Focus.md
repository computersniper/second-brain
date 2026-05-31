---
tags:
  - course/qf
  - qf/qft
  - exam/review
---

Source PDF: `D:\study\qf\ppt\Chap 2 - Quantum Field Theory for Quantum Finance.pdf`

Focus: 这章不要按物理史来背。考试重点是概念边界、几个公式、以及它们怎样连接到 Quantum Finance。

## 0. Chapter 2 考点地图

老师标重点的结构可以压成两块：

1. Quantum Mechanics basic concepts and characteristics
   - Wave-Particle Duality
   - Quantization
   - Uncertainty Principle
   - Quantum Entanglement
2. Quantum Field Theory basic concepts and phenomena
   - Classical Field vs Quantum Field
   - Path Integral
   - Feynman's Diagrams
   - Quantum Oscillators

考试难点不是讲故事，而是：

- 能区分四个 QM characteristics；
- 能解释 Classical Field vs Quantum Field 的区别；
- 能说明 Path Integral 是“sum over all possible paths”；
- 能说明 Feynman Diagram 是把复杂 QFT / path integral 表达可视化；
- 能记住 Quantum Oscillators 为什么和价格/return 动态有关。

## 1. Quantum Mechanics Basics

Quantum Mechanics (QM) 描述 atoms and subatomic particles 这种 smallest scales 下 matter 的 nature and dynamics。

课件说 QM 区别于 classical physics 的四个方面：

| Concept | Core meaning | Finance connection |
|---|---|---|
| Wave-Particle Duality | quantum matter can behave as both particle and wave | price/indicator points vs market patterns |
| Quantization | energy/momentum/etc. take discrete values | Quantum Price Levels (QPL) |
| Uncertainty Principle | natural limit of precision for complementary variables | limit of precision in observing intrinsic financial pairs |
| Quantum Entanglement | states of particles cannot be described independently | linkage/interaction between financial markets |

## 2. Wave-Particle Duality

考试要点：

- Before QM, waves and particles were treated as two different realms.
- Waves were described by Maxwell Electromagnetic Wave Equation.
- Particle motion was described by Newton's Laws of Motion.
- QM says quantum matter can be described not only by particle dynamics, but also as waves governed by Schrodinger Equation.

Key formulas:

```text
Newton: F = m * x_double_dot
Schrodinger: i * hbar * dPsi(x,t)/dt = H * Psi(x,t)
Planck: E = h * f
```

Three supporting findings:

| Finding | What to remember |
|---|---|
| Planck's Black Body Radiation | energy is emitted/absorbed in discrete quanta; E = h*f |
| Double Slit Experiment | photons show interference like waves but are detected as particles |
| Einstein's Photoelectric Experiment | light has particle nature; photons emit electrons from material |

Finance connection:

| Technical analysis side | Quantum analogy |
|---|---|
| Technical Pattern Analysis | wave side: patterns, trends, cycles |
| Technical Indicators / Oscillators | particle side: observed prices, indices, indicator signals |

一句话答题：

```text
In Quantum Finance, market patterns and trends are wave-like, while observed prices, indices and technical indicators are particle-like.
```

## 3. Quantization

Quantization 是从 classical understanding 转向 QM understanding 的过程。课件重点是 energy levels are discrete。

Bohr model 三点：

1. Electrons move in certain stable discrete orbits / energy levels.
2. Angular momentum is an integral multiple of reduced Planck constant.
3. Electrons gain or lose energy by jumping between allowed orbits with absorption/emission of EM radiation.

Key formulas:

```text
Angular momentum: m * v * r = n * hbar
Energy transition: Delta E = h * f
```

Finance connection:

```text
Quantization of energy levels corresponds to Quantum Price Levels (QPL) in Quantum Finance.
```

考试难点：不要把 quantization 写成“价格一定随机跳”。它的重点是 discrete levels / allowed states。

## 4. Uncertainty Principle

Physics meaning:

```text
There is a natural limit of precision for measuring complementary variables, such as position x and momentum p.
```

Formula:

```text
Delta x * Delta p = hbar / 2
```

More standard inequality form:

```text
Delta x * Delta p >= hbar / 2
```

Finance connection:

```text
In Quantum Finance, the Uncertainty Principle provides a way to describe the natural limit of precision for observing intrinsic pairs in financial markets.
```

考试难点：measurement 不只是“人去看”，课件说 measurement can mean any interaction between classical and quantum objects.

## 5. Quantum Entanglement

Definition:

```text
Quantum Entanglement occurs when the quantum state of each particle cannot be described independently from the state of the others, even when they are separated by a large distance.
```

Einstein phrase:

```text
Spooky actions at a distance.
```

Applications mentioned:

- Quantum Computing
- Quantum Cryptography
- Quantum Teleportation
- Quantum Finance

Finance connection:

```text
Quantum Entanglement is used as an analogy for linked financial markets, such as major forex markets, gold markets and crude oil markets, especially for studying major market reversal events.
```

考试难点：entanglement 不是普通 correlation。课件强调的是 states cannot be described independently。

## 6. QFT Basic Concepts

QFT combines three theories:

| Theory | Role |
|---|---|
| Quantum Mechanics (QM) | basic mathematical, physical and philosophical framework |
| Classical Field Theory (CFT) | construction and dynamics of quantum fields |
| Special Relativity (SR) | mass-energy relation, creation/annihilation of particles |

Key formula:

```text
E = m * c^2
```

QFT focus topics in this course:

- Classical Field vs Quantum Field
- Path Integral
- Feynman Diagrams
- Quantum Oscillators

## 7. Classical Field vs Quantum Field

Physical field:

```text
A physical field is the assignment of a physical quantity at each point of space and time.
```

Core difference:

| Classical Field | Quantum Field |
|---|---|
| gives a discrete/exact number at every point of space | gives a distribution/probability at every point of space |
| more deterministic | connected to wave-particle duality and uncertainty |

Examples of classical fields:

- Newton's Gravitational Field
- Maxwell's Electromagnetic Field

考试难点：这部分容易写空。最关键的一句是：

```text
Classical field gives an exact value at each point, while quantum field gives a distribution or probability at each point.
```

## 8. Path Integral

Path Integral 由 Richard Feynman 在 1948 年提出。

大白话：从 source S 到 final point F，不只考虑一条路径，而是把所有可能路径的 amplitude 都加起来。

Double-slit 思路：

- Two slits: amplitude at F = sum of paths through O1 and O2.
- More slits: add more path amplitudes.
- Infinite layers/openings: wavefunction at F is the sum over infinite possible paths from S to F.

Key phrase:

```text
Path Integral = sum over all possible paths.
```

Finance connection:

```text
In Quantum Finance, Path Integral Formulation is used for modeling worldwide interest rate r as the propagation of a quantum particle Qr from one state to another over time T.
```

考试难点：不要把 Path Integral 理解成“选择最短路径”。它不是 one best path，而是 all possible paths.

## 9. Feynman's Diagrams

Definition:

```text
Feynman Diagrams are pictorial representations of mathematical expressions describing the behavior and interactions of subatomic particles.
```

Why important:

```text
They provide a concise and easy way to represent complex QFT formulations.
```

Two formulation methods mentioned:

- canonical formulation
- path-integral formulation

Construction rules mentioned:

1. Diagrams are made of lines and vertices.
2. For each vertex assign a factor.
3. For each line assign a propagator-like factor.
4. For each external end assign J.

考试难点：图不是重点，图背后的作用才是重点：visualize complex path-integral / QFT expressions.

## 10. Quantum Oscillators

Quantum Harmonic Oscillator (QHO):

```text
QHO is the Quantum Mechanics analog of the classical harmonic oscillator.
```

Classical formulas:

```text
Simple harmonic oscillator: F = m * x_double_dot = -k * x
Damped oscillator: F = m * x_double_dot = -k * x - c * x_dot
```

1D QHO Hamiltonian:

```text
H = p^2/(2m) + (1/2) * m * omega^2 * x^2
```

Discrete energy levels:

```text
E_n = hbar * omega * (n + 1/2), n = 0, 1, 2, ...
```

N-dimensional QHO:

```text
N-dimensional QHO is analogous to N independent one-dimensional harmonic oscillators.
```

Quantum Anharmonic Oscillator (AHO):

```text
Real-world quantum phenomena often involve anharmonic oscillations, not perfect harmonic oscillations.
```

Finance connection:

```text
In Quantum Finance Theory, the quantum dynamics of price return r is deduced as a kind of quartic Quantum Anharmonic Oscillation.
```

考试难点：

- Harmonic = ideal/simple oscillator.
- Anharmonic = more realistic nonlinear oscillator.
- QF cares about AHO because financial returns are nonlinear and oscillatory.

## 11. CH2 Minimal Exam Template

```text
Chapter 2 first introduces the basic characteristics of Quantum Mechanics, including wave-particle duality, quantization, uncertainty principle and quantum entanglement. These concepts provide the foundation for Quantum Field Theory. QFT combines Quantum Mechanics, Classical Field Theory and Special Relativity. Its key topics for Quantum Finance include classical field versus quantum field, path integral formulation, Feynman diagrams and quantum oscillators. In Quantum Finance, these ideas are used to model market patterns, quantum price levels, uncertain observation, linked markets, interest-rate paths and nonlinear price-return oscillations.
```

