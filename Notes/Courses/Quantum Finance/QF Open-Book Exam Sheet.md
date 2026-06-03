---
tags:
  - course/qf
  - exam/open-book
  - exam/cram
---

# QF Open-Book Exam Sheet

Printable reference sheet for the final exam. Keep this page in English for direct exam use. It includes compact explanations, formulas, key diagrams, and answer templates.

## CH1 - Foundations

### Quantum Finance

Quantum Finance is an interdisciplinary subject applying Quantum Mechanics (QM) and Quantum Field Theory (QFT) to financial markets. It treats market prices as observable particle-like states and market movements as wave-like dynamics.

```text
Quantum Finance = QM/QFT + Computational Finance + AI tools
Goal = model price dynamics, forecast markets, calculate QPL, support trading systems
```

### Wave-Particle Duality in Finance

| Particle-like view | Wave-like view |
|---|---|
| observed price | market pattern |
| index value | trend |
| technical indicator | cycle / oscillation |

Exam phrase:

```text
Observed prices, indices and indicators are particle-like because they are measurable at a specific time, while market patterns, trends and cycles are wave-like because they describe the overall market movement.
```

### QFT Components

```text
QFT = Quantum Mechanics + Classical Field Theory + Special Relativity
```

| Component | Role |
|---|---|
| QM | uncertainty, wavefunction, quantization |
| Classical Field Theory | field concept and field dynamics |
| Special Relativity | mass-energy relation, particle creation/annihilation |

### 4-Tier Concentric Sphere Model

![ch1-concentric-sphere-model.png](https://raw.githubusercontent.com/computersniper/second-brain/github-view/Resources/Quantum%20Finance/Images/ch1-concentric-sphere-model.png)

```text
Energy Field Layer -> Neural Layer -> FinTech Layer -> Application Layer
```

| Layer | Function |
|---|---|
| Energy Field | provides Quantum Price Field (QPF) |
| Neural | neural dynamics, neural oscillators, chaotic neural networks |
| FinTech | FL, GA, CT, Fractals, SVMs |
| Application | QPL, price prediction, trend prediction, multi-agent trading systems |

## CH2 - QFT for Quantum Finance

### QM Basic Characteristics

| Concept | Meaning | QF connection |
|---|---|---|
| Wave-Particle Duality | matter behaves as both particle and wave | price points vs market patterns |
| Quantization | quantities take discrete allowed values | Quantum Price Levels (QPL) |
| Uncertainty Principle | natural limit of measurement precision | uncertain market observation |
| Quantum Entanglement | states cannot be described independently | linked financial markets |

### Key Formulas

```text
Uncertainty Principle: Delta x * Delta p >= hbar / 2
Planck: E = h*f
Bohr quantization: m*v*r = n*hbar
Energy transition: Delta E = h*f
Schrodinger: i*hbar*dPsi(x,t)/dt = H*Psi(x,t)
Relativity: E = m*c^2
```

### Classical Field vs Quantum Field

![ch2-classical-vs-quantum-field.png](https://raw.githubusercontent.com/computersniper/second-brain/github-view/Resources/Quantum%20Finance/Images/ch2-classical-vs-quantum-field.png)

Field:

```text
A physical field assigns a physical quantity to each point of space and time.
```

| Classical Field | Quantum Field |
|---|---|
| exact value at each point | distribution / probability at each point |
| deterministic map | probabilistic map |
| examples: gravitational field, EM field | linked to wave-particle duality and uncertainty |

Exam phrase:

```text
A classical field gives an exact value at each point, while a quantum field gives a distribution or probability at each point.
```

### Path Integral

![ch2-path-integral-infinite-slit.png](https://raw.githubusercontent.com/computersniper/second-brain/github-view/Resources/Quantum%20Finance/Images/ch2-path-integral-infinite-slit.png)

Core idea:

```text
Path Integral = sum over all possible paths.
Not one best path; not the shortest path.
```

Explanation:

In the double-slit experiment, the final amplitude is the sum of amplitudes through different openings. If the number of layers and openings becomes infinite, the detected wavefunction is the sum over infinitely many possible paths.

QF connection:

```text
Interest-rate movement can be modeled as a transition from one state to another through many possible paths.
```

### Feynman Diagrams

Feynman Diagrams are pictorial representations of QFT mathematical expressions.

| Element | Meaning |
|---|---|
| line | particle propagation |
| vertex | interaction |
| external end | input/output |

Main value:

```text
They visualize complex QFT / path-integral formulations in a concise form.
```

### Quantum Oscillators

![ch2-quantum-harmonic-oscillator.png](https://raw.githubusercontent.com/computersniper/second-brain/github-view/Resources/Quantum%20Finance/Images/ch2-quantum-harmonic-oscillator.png)

![ch2-quantum-anharmonic-oscillator.png](https://raw.githubusercontent.com/computersniper/second-brain/github-view/Resources/Quantum%20Finance/Images/ch2-quantum-anharmonic-oscillator.png)

| Concept | Meaning |
|---|---|
| Harmonic Oscillator | ideal/simple oscillator |
| Damped Oscillator | oscillator with damping/resistance |
| QHO | quantum analog of classical harmonic oscillator |
| AHO | nonlinear realistic oscillator |

Formulas:

```text
Classical harmonic: F = m*x_double_dot = -k*x
Damped: F = m*x_double_dot = -k*x - c*x_dot
QHO Hamiltonian: H = p^2/(2m) + (1/2)*m*omega^2*x^2
Energy levels: E_n = hbar*omega*(n + 1/2), n = 0,1,2,...
```

QF connection:

```text
Price return r behaves like a quartic Quantum Anharmonic Oscillation.
```

## CH3 - Overview of QF Models

### Brief History

| Time | Point |
|---|---|
| 1900 | Bachelier: Brownian motion, option pricing, mathematical finance |
| 1990s | QF introduced by applying QM/QFT to economics/finance |
| 1999 | Mantegna & Stanley: An Introduction to Econophysics |
| 2004 | Baaquie: Path Integral for option pricing and interest rate modeling |

### Two Major Models

| Model | Core idea | Typical use |
|---|---|---|
| Path Integral Approach | integrate over all possible paths/functions | forward interest rate, option pricing |
| QAHO Approach | solve Schrodinger Equation as nonlinear oscillator | price return dynamics, QPL |

### Path Integral Approach of QF

![ch3-forward-interest-rate-field.png](https://raw.githubusercontent.com/computersniper/second-brain/github-view/Resources/Quantum%20Finance/Images/ch3-forward-interest-rate-field.png)

Forward interest rate:

```text
f(t,x) = rate fixed at current time t for an instantaneous loan at future time x
```

Key idea:

At any current time `t`, `f(t,x)` forms a curve over future maturity `x`. Since forward rates of different maturities evolve randomly but in a highly correlated manner, interest rate dynamics can be modeled as a field.

```text
A(t,x) = two-dimensional quantum field in the interest-rate model
Evaluation = integrate over all possible functions A(t,x)
```

### QAHO Approach of QF

![ch3-qfse-characteristics.png](https://raw.githubusercontent.com/computersniper/second-brain/github-view/Resources/Quantum%20Finance/Images/ch3-qfse-characteristics.png)

Core motivation:

Instead of integrating all possible paths, the QAHO approach directly solves the Schrodinger Equation numerically.

```text
Target variable = price return r, not price
r = Quantum Financial Particle (QFP)
r is analogous to displacement x from equilibrium
```

Hamiltonian meaning:

| Physics term | Finance meaning |
|---|---|
| K.E. | quantum motion of QFP / return movement |
| P.E. | Quantum Energy Field / Quantum Price Energy Levels |
| hbar | uncertainty of irrational transaction |
| m | intrinsic market properties, e.g. market capital |

PDF and demand:

```text
Q(r,t) = |Psi(r,t)|^2
z = demand - supply
```

QFSE characteristics:

```text
QFSE contains K.E. and P.E. terms.
QF oscillator is anharmonic with high-order P.E. terms.
High-order P.E. terms represent damping potential and volatility potential.
Market is observed as price, but quantum dynamics are controlled by price return r.
Goal: solve QFSE to evaluate QPL.
```

### Path Integral vs QAHO

![ch3-path-integral-vs-qaho.png](https://raw.githubusercontent.com/computersniper/second-brain/github-view/Resources/Quantum%20Finance/Images/ch3-path-integral-vs-qaho.png)

| Aspect | Path Integral | QAHO |
|---|---|---|
| Main idea | all possible paths/functions | directly solve Schrodinger Equation |
| Strength | theoretically powerful | practical for numerical implementation |
| Cost | computationally heavy | more direct |
| Typical target | interest rate / option pricing | price return / QPL |

## Core QFSE / QPL Formulas

Revision QFSE:

```text
[-hbar/(2m)*d^2/dr^2 + (gamma*eta*delta/2)*r^2 - (gamma*eta*nu/4)*r^4] phi(r) = E*phi(r)
```

Quartic QAHO / QPL form:

```text
d^2 phi(r)/dr^2 + (r^2 + lambda*r^4)*phi(r) = E*phi(r)
```

Structural memory:

```text
[K.E. term + P.E. terms] phi(r) = E*phi(r)
```

## Answer Templates

### Wave-Particle Duality

```text
In Quantum Finance, observed prices, indices and indicators are particle-like because they are measurable at a specific time, while market patterns, trends and cycles are wave-like because they describe the overall market movement.
```

### Classical Field vs Quantum Field

```text
A physical field assigns a physical quantity to each point of space and time. A classical field gives an exact value at each point, while a quantum field gives a distribution or probability at each point. This difference is related to wave-particle duality and the uncertainty principle.
```

### Path Integral Approach

```text
The Path Integral Approach applies Feynman's Path Integral formulation to financial modeling. It evaluates a financial variable by integrating over all possible paths or field configurations. In Quantum Finance, it is used for forward interest rate modeling, where A(t,x) is introduced as a two-dimensional quantum field.
```

### QAHO Approach

```text
The QAHO Approach directly models wave-particle dynamics by solving the Schrodinger Equation numerically. It uses price return r as the Quantum Financial Particle because return is analogous to displacement from equilibrium. The QFSE is an anharmonic oscillator equation with damping and volatility potential terms, and it provides a way to evaluate QPL.
```

### Path Integral vs QAHO

```text
The Path Integral Approach considers all possible paths or field configurations and is used for interest-rate modeling. The QAHO Approach directly solves the Schrodinger Equation and is more suitable for modeling nonlinear price-return dynamics and calculating Quantum Price Levels.
```

