---
tags:
  - course/se
  - exam/cram
  - exam/drawing
  - exam/mcq
---

# Final Cram Sheet

Use this on the last day and the morning before the exam.

## Exam Bias

- Multiple choice: concept boundaries, terminology, model differences.
- Drawing questions: reproduce the method, not just the final picture.
- Teacher focus: review photos emphasize Lectures 4, 5, 8-16.

## Must-Know English Terms

System models:

- context model
- system boundary
- use case diagram
- actor
- scenario
- include / extend
- state transition diagram
- event / guard / action
- data flow diagram
- process / data flow / data store / external entity

OO and UML:

- object
- class
- instance
- attribute
- operation
- association
- generalization
- aggregation
- composition
- multiplicity
- abstraction
- encapsulation
- inheritance
- polymorphism

Architecture and design:

- subsystem
- repository model
- client-server model
- layered model
- component control
- centralized control
- event-based control
- cohesion
- coupling
- information hiding
- modularity
- refinement
- refactoring
- MVC
- design pattern
- observer pattern
- persistent data

Structured design:

- structured analysis
- structured design
- DFD
- structured tree
- transform center
- first-level factoring
- second-level factoring
- restructuring

Testing:

- test case
- test oracle
- black-box testing
- white-box testing
- equivalence-class testing
- boundary value testing
- statement testing
- branch testing
- path testing
- regression testing

Configuration and cost:

- configuration management
- version control
- change management
- release management
- system building
- CASE tools
- LOC / SLOC / KLOC
- function points
- object points
- productivity
- person-month
- COCOMO II
- price to win

## One-Line Distinctions

- Object vs Class: object is an instance; class is a template.
- Black-box vs White-box: black-box uses specification; white-box uses code/control structure.
- Statement vs Branch vs Path: statement covers lines; branch covers decision outcomes; path covers paths.
- Aggregation vs Composition: composition has stronger lifecycle dependency.
- Cohesion vs Coupling: high cohesion is good; low coupling is good.
- DFD vs Structured tree: DFD shows data transformation; structured tree shows module/call structure.
- Context model vs Use case diagram: context model shows boundary and external systems; use case diagram shows actor goals.
- Include vs Extend: include is mandatory reused behavior; extend is optional/conditional behavior.
- Arrow direction: `include` points from base use case to included use case; `extend` points from extension use case to base use case.
- Refactoring vs Refinement: refactoring improves internal structure without changing behavior; refinement adds detail toward implementation.
- Price to win vs Cost estimate: price to win targets contract success; cost estimate targets actual effort/cost.

## Drawing Recipes

### Use Case Diagram

1. Find actors outside the system.
2. Draw system boundary.
3. Put goal-level use cases inside.
4. Connect actors to use cases.
5. Add include/extend only when necessary.

Last check: actor outside, use case inside, no unnecessary include/extend.

### State Transition Diagram

1. List stable states.
2. Add initial/final state if needed.
3. Add event-triggered arrows.
4. Put guard conditions in `[ ]`.
5. Put actions after `/`.

Last check: if a warning window has only one button, treat it as action rather than state.

### Data Flow Diagram

1. Find external entities.
2. Draw processes as verb phrases.
3. Draw data flows as noun phrases.
4. Add data stores only for persistent data.
5. Balance parent/child diagram inputs and outputs.

Last check: DFD is about data, not time order.

### Class Diagram

1. Extract candidate classes from nouns.
2. Remove duplicates and UI-only words.
3. Add attributes and operations.
4. Add associations and multiplicities.
5. Use inheritance only for true "is-a".

Last check: hollow triangle points to superclass.

### Sequence Diagram

1. Put actor/control/object lifelines left to right.
2. Time flows downward.
3. Add messages in chronological order.
4. Match messages to operations where possible.
5. Add creation/update messages if object appears during scenario.

Last check: do not draw static class relationships as sequence messages.

### Activity Diagram

1. Start with initial node.
2. Write actions as verb phrases.
3. Add decision guards for branches.
4. Add swimlanes when responsibility matters.
5. End with final node.

Last check: activity diagram is workflow, not data structure.

### Structured Tree

1. Start from DFD.
2. Identify input flow, transform center, output flow.
3. Create top control module.
4. Do first-level factoring: input / transform / output.
5. Do second-level factoring and restructure.

Last check: improve cohesion and reduce coupling.

### Testing Flow / Control-Flow Chart

1. Mark input.
2. Mark decisions.
3. Label true/false branches.
4. Put outputs/actions.
5. Choose test cases for statement/branch/path goals.

Last check: for triangle problem, cover invalid input, not triangle, valid triangle.

## Triangle Testing Mini-Pack

Invalid input:

- `a <= 0 || b <= 0 || c <= 0`

Not triangle:

- `a >= b + c || b >= a + c || c >= a + b`

Triangle:

- positive inputs and all triangle inequalities hold.

Good memory cases:

- `(-1, -2, 3)` invalid input.
- `(1, 2, 3)` not triangle.
- `(4, 5, 6)` triangle.
- `(2, 3, 5)` boundary equality, not triangle under `>=`.
- `(2, 3, 6)` beyond boundary, not triangle.

## Cost Estimation Memory

- LOC/SLOC/KLOC: code-size based; language-dependent.
- Function points: user-visible functionality.
- Object points: screens/reports/components, useful early.
- Productivity: size per effort.
- Person-month: one person working one month.
- COCOMO II:
  - Application composition: prototype/GUI style, object points.
  - Early design: rough architecture, limited details.
  - Reuse: adapted/reused components.
  - Post-architecture: detailed architecture/cost drivers known.

## Last-Minute MCQ Traps

- Testing cannot prove absence of all defects.
- Boundary value testing is black-box.
- Version control is not the whole of configuration management.
- Adding people does not linearly reduce calendar time.
- Repository model shares data easily but creates central data dependency.
- Layered model improves separation but can add overhead.
- High cohesion and low coupling are desirable.
- Use case diagram is not a flowchart.
- DFD is not a UML sequence diagram.
