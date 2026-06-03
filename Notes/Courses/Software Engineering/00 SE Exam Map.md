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

## Knowledge Point Index

Use this section as the SE course index. If you forget where a concept lives, start here.

| Knowledge point | Main location | Exam use |
|---|---|---|
| Full SE revision map | [思维导图](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#思维导图) | First scan before review |
| Process models | [1. Lecture 2 - Software Process Models](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#1-lecture-2-software-process-models) | Waterfall / incremental / prototyping / spiral / RUP comparison |
| Waterfall model | [1.2 Waterfall Model 瀑布模型](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#12-waterfall-model-瀑布模型) | When requirements are stable |
| Incremental model | [1.3 Incremental Model 增量模型](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#13-incremental-model-增量模型) | Early partial delivery |
| Prototyping model | [1.4 Prototyping Model 原型模型](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#14-prototyping-model-原型模型) | Clarify unclear requirements |
| Spiral model | [1.5 Spiral Model 螺旋模型](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#15-spiral-model-螺旋模型) | Risk-driven development |
| RUP | [1.6 RUP - Rational Unified Process](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#16-rup-rational-unified-process) | Iterative phases / process model MCQ |
| Requirements basics | [2. Lecture 3 - Software Requirements](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#2-lecture-3-software-requirements) | Requirement = service + constraint |
| User vs system requirements | [2.2 User Requirements vs System Requirements](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#22-user-requirements-vs-system-requirements) | MCQ boundary |
| Functional / non-functional / domain requirements | [2.3 Functional / Non-functional / Domain Requirements](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#23-functional-non-functional-domain-requirements) | Requirement classification |
| Requirements specification styles | [2.5 Requirements Specification 的表达方式](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#25-requirements-specification-的表达方式) | Natural language / structured / graphical / tabular |
| System models overview | [3. System Models: DFD / Activity Diagram / UML notations](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#3-system-models-dfd-activity-diagram-uml-notations) | Environment / behavior / structure models |
| DFD notation and elements | [3.1 Data Flow Diagram, DFD](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#31-data-flow-diagram-dfd); [Data Flow Diagram](./01%20Diagram%20Questions%20Drawing%20Guide.md#data-flow-diagram) | Drawing DFD and identifying process/data store/data flow |
| Activity diagram notation | [3.2 Activity Diagram](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#32-activity-diagram); [Activity Diagram](./01%20Diagram%20Questions%20Drawing%20Guide.md#activity-diagram) | Fork/join, decision/merge |
| UML notation / arrows | [3.3 UML 常见箭头和 notation 总结](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#33-uml-常见箭头和-notation-总结); [UML](./My%20SE%20notes.md#uml) | Notation lookup for diagrams |
| Use case diagram drawing | [Use Case Diagram](./01%20Diagram%20Questions%20Drawing%20Guide.md#use-case-diagram); [11 Use Case Diagram Relationships](./11%20Use%20Case%20Diagram%20Relationships.md) | Actors, use cases, communication/include/extend/generalization |
| Include vs extend | [10 Include vs Extend](./10%20Include%20vs%20Extend.md); [Include](./11%20Use%20Case%20Diagram%20Relationships.md#include); [Extend](./11%20Use%20Case%20Diagram%20Relationships.md#extend) | High-risk MCQ and drawing arrows |
| Use case inheritance/generalization | [Inheritance Between Use Cases](./11%20Use%20Case%20Diagram%20Relationships.md#inheritance-between-use-cases); [Include vs Extend vs inheritance/generalization](./My%20SE%20notes.md#include-vs-extend-vs-inheritancegeneralization) | Parent/child use case relationship |
| State transition diagram | [State Transition Diagram](./01%20Diagram%20Questions%20Drawing%20Guide.md#state-transition-diagram); [State Machine Model](./My%20SE%20notes.md#state-machine-model) | Event-driven behavior / FSM |
| OO basics | [Object-Oriented](./My%20SE%20notes.md#object-oriented); [7. OO method vs Structured Analysis method](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#7-oo-method-vs-structured-analysis-method) | Object/class/OO method boundary |
| Features of a class | [Features of A Class](./My%20SE%20notes.md#features-of-a-class) | Abstraction / encapsulation / inheritance / polymorphism |
| Class diagram notation | [Class Diagram](./My%20SE%20notes.md#class-diagram); [Class Diagram](./01%20Diagram%20Questions%20Drawing%20Guide.md#class-diagram) | Class box, attributes, operations |
| Multiplicity | [Multiplicity](./My%20SE%20notes.md#multiplicity) | Association end numbers |
| Qualifier | [Qualifier](./My%20SE%20notes.md#qualifier) | Change one-to-many / many-to-many relationship |
| Inheritance vs aggregation | [Inheritance vs Aggregation](./My%20SE%20notes.md#inheritance-vs-aggregation) | IS-A vs HAS-A boundary |
| Aggregation vs composition | [Aggregation vs Composition](./My%20SE%20notes.md#aggregation-vs-composition); [Composition 组合](./My%20SE%20notes.md#composition-组合) | Weak whole-part vs strong ownership |
| Association class | [Association between Classes](./My%20SE%20notes.md#association-between-classes) | Association with attributes/operations |
| Operation placement | [Operation](./My%20SE%20notes.md#operation); [Where should an operation belong?](./My%20SE%20notes.md#where-should-an-operation-belong) | Operation should work on attributes of its class |
| Operation vs association | [Operation vs Association](./My%20SE%20notes.md#operation-vs-association); [Is Edit an association?](./My%20SE%20notes.md#is-edit-an-association) | Not every verb is an association |
| Entity / boundary / control objects | [OOA simplified iSpace system](./My%20SE%20notes.md#ooa-simplified-ispace-system) | OOA object classification |
| Architectural design principles | [4. Architectural Design 基础原则](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#4-architectural-design-基础原则) | Pattern, modularity, information hiding, independence |
| Coupling and cohesion | [4.4 Independence = Low Coupling + High Cohesion](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#44-independence-low-coupling-high-cohesion); [Architecture](./06%20SE%20Bilingual%20Glossary%20and%20MCQ%20Traps.md#architecture) | MCQ boundary / design quality |
| System organization models | [5. System Organization Models](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#5-system-organization-models) | Repository, client-server, peer-to-peer, layered, MVC |
| MVC and Observer | [5.5 MVC Model](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#55-mvc-model); [8.2 Observer Design Pattern](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#82-observer-design-pattern) | Pattern/model distinction |
| Component control | [6. Component Control](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#6-component-control) | Centralized vs event-based control |
| OOD detailed design | [9. Object-Oriented Detailed Design](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#9-object-oriented-detailed-design) | Signature, visibility, pre/post conditions |
| Restructuring | [Restructuring](./My%20SE%20notes.md#restructuring); [10.7 Restructuring: reduce coupling and increase cohesion](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#107-restructuring-reduce-coupling-and-increase-cohesion) | Reduce coupling / increase cohesion |
| Structured design overview | [10. Lecture 12 - Structured Design and Isolating Transform Center](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#10-lecture-12-structured-design-and-isolating-transform-center) | DFD to structured tree |
| Transform center | [10.3 Isolating Transform Center](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#103-isolating-transform-center) | Structured design drawing step |
| First-level / second-level factoring | [10.4 First-level factoring](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#104-first-level-factoring); [Structured Tree From DFD](./01%20Diagram%20Questions%20Drawing%20Guide.md#structured-tree-from-dfd) | Structured tree drawing |
| Testing overview | [11. Lecture 13 - Software Testing 1](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#11-lecture-13-software-testing-1); [Software testing](./My%20SE%20notes.md#software-testing) | Unit/integration/system/regression, V&V |
| Black-box testing | [11.4 Black-box Testing](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#114-black-box-testing); [Testing](./06%20SE%20Bilingual%20Glossary%20and%20MCQ%20Traps.md#testing) | Equivalence class / boundary value |
| White-box testing | [11.5 White-box Testing](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#115-white-box-testing); [White-Box Testing](./My%20SE%20notes.md#white-box-testing) | Statement / branch / path testing |
| Test oracle | [12.2 Test Oracle](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#122-test-oracle) | Expected result generator |
| Test automation / management | [12.4 Test Automation](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#124-test-automation); [12.6 Test Case Management](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#126-test-case-management) | Testing process diagrams |
| Configuration management | [13. Lecture 15 - Configuration Management](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#13-lecture-15-configuration-management); [Configuration Management](./My%20SE%20notes.md#configuration-management) | Planning, change, version, release, build |
| System building | [13.6 System Building](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#136-system-building); [Configuration management activities](./My%20SE%20notes.md#configuration-management-activities) | Build process / linker |
| Cost estimation overview | [14. Lecture 16 - Cost Estimation](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#14-lecture-16-cost-estimation) | Formulas and model selection |
| LOC / KLOC | [14.5 LOC / KLOC](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#145-loc-kloc) | Size metric |
| Function points | [14.6 Function Points](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#146-function-points) | Functional size estimation |
| Object points | [14.7 Object Points](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#147-object-points) | Application composition model |
| COCOMO II | [14.11 COCOMO 2 四个子模型](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#1411-cocomo-2-四个子模型) | Application composition / early design / reuse / post-architecture |
| Staffing and calendar time | [14.17 Staffing and Calendar Time](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#1417-staffing-and-calendar-time) | TDEV / staffing relation |

## Exam Hotspot Index

| If the question asks about... | Open this first |
|---|---|
| "notation", arrows, UML symbols | [3.3 UML 常见箭头和 notation 总结](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#33-uml-常见箭头和-notation-总结) |
| use case include / extend / inheritance | [10 Include vs Extend](./10%20Include%20vs%20Extend.md) and [11 Use Case Diagram Relationships](./11%20Use%20Case%20Diagram%20Relationships.md) |
| drawing steps for UML / DFD / structured tree | [01 Diagram Questions Drawing Guide](./01%20Diagram%20Questions%20Drawing%20Guide.md) |
| timed drawing practice | [08 Drawing Drill Pack](./08%20Drawing%20Drill%20Pack.md) |
| one-line distinction / MCQ trap | [06 SE Bilingual Glossary and MCQ Traps](./06%20SE%20Bilingual%20Glossary%20and%20MCQ%20Traps.md) and [One-Line Distinctions](./07%20Final%20Cram%20Sheet.md#one-line-distinctions) |
| class diagram relationship boundary | [Difference](./My%20SE%20notes.md#difference) |
| operation belongs to which class | [Where should an operation belong?](./My%20SE%20notes.md#where-should-an-operation-belong) |
| edit/draw as association or operation | [Operation vs Association](./My%20SE%20notes.md#operation-vs-association) |
| architecture model pros/cons | [5. System Organization Models](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#5-system-organization-models) |
| testing methods | [11. Lecture 13 - Software Testing 1](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#11-lecture-13-software-testing-1) |
| cost estimation formulas | [15.5 Cost Estimation 公式](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md#155-cost-estimation-公式) |

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

### Course Control

- [SE Exam Review](../../../Projects/SE%20Exam%20Review.md)
- [SE Source Index](../../../Resources/Software%20Engineering/SE%20Source%20Index.md)

### Personal Index

- [My SE Notes Index](./My%20SE%20Notes/00%20My%20SE%20Notes%20Index.md)

### Direct Exam Review

- [My SE notes](./My%20SE%20notes.md)
- [SE Revision From Models to Cost Estimation](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md)
- [Exercise](./Exercise.md)

### Focused Notes

- [Diagram Questions Drawing Guide](./01%20Diagram%20Questions%20Drawing%20Guide.md)
- [Class Exercise Templates](./04%20Class%20Exercise%20Templates.md)
- [SE Bilingual Glossary and MCQ Traps](./06%20SE%20Bilingual%20Glossary%20and%20MCQ%20Traps.md)
- [Final Cram Sheet](./07%20Final%20Cram%20Sheet.md)
- [Drawing Drill Pack](./08%20Drawing%20Drill%20Pack.md)
- [Include vs Extend](./10%20Include%20vs%20Extend.md)
- [Use Case Diagram Relationships](./11%20Use%20Case%20Diagram%20Relationships.md)
