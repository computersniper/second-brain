---
tags:
  - course/se
  - se/index
  - exam/map
---

# 00 SE Exam Map

This is the control page for Software Engineering exam review.

## Core Strategy

中文理解，英文作答。每个知识点都要能做到三件事：

- Define: 用英文术语说出定义。
- Distinguish: 区分相近概念，适合选择题。
- Draw: 能按步骤画图，适合画图题。

## Priority Table

| Area | English keywords | What to master | Drawing risk |
|---|---|---|---|
| System models | context model, use case diagram, state transition diagram, data flow diagram | 系统边界、外部实体、行为流、数据流、结构模型 | Very high |
| OO basics | object, class, abstraction, encapsulation, inheritance, polymorphism | 对象与类的区别，类图元素和关系 | High |
| OOA | use case, scenario, class diagram, sequence diagram, activity diagram | 从需求识别对象、行为、关系 | Very high |
| Architectural design | subsystem, repository model, client-server model, layer model | 架构模型优缺点与适用场景 | High |
| OOD and detailed design | MVC, design pattern, persistent data, detailed class design | 从 OOA 模型进入可实现设计 | High |
| Structured design | DFD, structured tree, transform center, factoring, restructuring | 由 DFD 变换成结构图 | Very high |
| Testing | black-box, white-box, equivalence class, boundary value, statement/branch/path testing | 测试方法选择、测试用例设计 | Very high |
| Configuration management | version control, change management, release management, system building | 配置管理活动和工具 | Medium |
| Cost estimation | LOC, KLOC, function points, object points, COCOMO II, productivity | 估算指标、模型阶段、计算逻辑 | Medium |

## Teacher Review Photo Scope

### Lecture 4 System Models

- System models: environment models, behavior flow models, structure models.
- Environment model: context model, system boundary.
- Use case diagram: actors, use cases, base use case, scenario, include/extend relationships.
- Behavior models: state transition diagram / finite state machine, event-driven behavior.
- Data flow model: processes, data stores, data flows, external entities.

### Lecture 5 Objects and Classes

- Object: an entity with state and behavior.
- Class: a template/type that describes similar objects.
- Difference between object and class: object is an instance; class is an abstraction/template.
- OO in one sentence: software is organized as cooperating objects that encapsulate data and behavior.
- Class exercise: be able to identify classes, attributes, operations, and relationships.

### Lecture 8 Architectural Design

- Concepts of subsystems: architectural design, system and subsystems, purposes of architectural design.
- Design principles: abstraction, pattern, modularity, information hiding, independence, cohesion, coupling, refinement, refactoring.
- Design models: system organization, repository model, client-server model, layer model, component control, centralized control, event-based control.

### Lecture 9 OOD

- OOD versus structured analysis.
- System decomposition models: repository model, client-server model, peer-to-peer model, layered model, MVC model.
- Design patterns: why needed, pattern structure, observer pattern, MVC as pattern/model.
- Persistent data: identifying persistent data and how to store it.

### Lecture 10 OOD Example

- Steps in OOD:
  1. Group objects into subsystems.
  2. Design an architecture for each subsystem.
  3. Identify persistent data.
  4. Refine architecture.

### Lecture 11 Detailed Design

- Detailed design refines classes from the programming perspective.
- Input: specification/OOA UML diagrams + architecture.
- Output: implementation-ready detailed classes and operations.

### Lecture 12 Structured Design

- Structured analysis output: DFD.
- Structured design output: structured tree / call tree.
- Key tasks: isolate transform center, first-level factoring, second-level factoring, restructure tree.

### Lecture 13/14 Testing

- Test concepts: test case, testing process, testing automation, test oracle.
- Black-box testing: equivalence-class testing, boundary value testing.
- White-box testing: statement testing, branch testing, path testing.
- Drawing/practice: DFD of testing automation, state transition diagram, test case generation.

### Lecture 15 Configuration Management

- Configuration management activities: planning, change management, version control, release management, system building.
- Tools: CASE tools.

### Lecture 16 Cost Estimation

- General concepts: costs of software development, cost of engineers, man-month / person-month.
- Measures: LOC, SLOC, KLOC, function points, object points.
- Productivity and estimation models.
- COCOMO II models: application composition, early design, reuse, post-architecture.
- Other techniques: algorithmic cost modelling, price to win, staff and calendar time.

## Active Notes

- [[00 My SE Notes Index]]
- [[01 Diagram Questions Drawing Guide]]
- [[02 Testing Quick Notes]]
- [[03 Cost Estimation Quick Notes]]
- [[04 Class Exercise Templates]]
- [[05 Lecture Review Checklists]]
- [[06 SE Bilingual Glossary and MCQ Traps]]
- [[07 Final Cram Sheet]]
- [[08 Drawing Drill Pack]]
- [[09 All PPT Explanations]]
- [[10 Include vs Extend]]
- [[11 Use Case Diagram Relationships]]
