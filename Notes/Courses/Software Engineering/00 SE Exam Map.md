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
| Full SE revision map | [[SE Revision From Models to Cost Estimation#思维导图]] | First scan before review |
| Process models | [[SE Revision From Models to Cost Estimation#1. Lecture 2 - Software Process Models]] | Waterfall / incremental / prototyping / spiral / RUP comparison |
| Waterfall model | [[SE Revision From Models to Cost Estimation#1.2 Waterfall Model 瀑布模型]] | When requirements are stable |
| Incremental model | [[SE Revision From Models to Cost Estimation#1.3 Incremental Model 增量模型]] | Early partial delivery |
| Prototyping model | [[SE Revision From Models to Cost Estimation#1.4 Prototyping Model 原型模型]] | Clarify unclear requirements |
| Spiral model | [[SE Revision From Models to Cost Estimation#1.5 Spiral Model 螺旋模型]] | Risk-driven development |
| RUP | [[SE Revision From Models to Cost Estimation#1.6 RUP - Rational Unified Process]] | Iterative phases / process model MCQ |
| Requirements basics | [[SE Revision From Models to Cost Estimation#2. Lecture 3 - Software Requirements]] | Requirement = service + constraint |
| User vs system requirements | [[SE Revision From Models to Cost Estimation#2.2 User Requirements vs System Requirements]] | MCQ boundary |
| Functional / non-functional / domain requirements | [[SE Revision From Models to Cost Estimation#2.3 Functional / Non-functional / Domain Requirements]] | Requirement classification |
| Requirements specification styles | [[SE Revision From Models to Cost Estimation#2.5 Requirements Specification 的表达方式]] | Natural language / structured / graphical / tabular |
| System models overview | [[SE Revision From Models to Cost Estimation#3. System Models: DFD / Activity Diagram / UML notations]] | Environment / behavior / structure models |
| DFD notation and elements | [[SE Revision From Models to Cost Estimation#3.1 Data Flow Diagram, DFD]]; [[01 Diagram Questions Drawing Guide#Data Flow Diagram]] | Drawing DFD and identifying process/data store/data flow |
| Activity diagram notation | [[SE Revision From Models to Cost Estimation#3.2 Activity Diagram]]; [[01 Diagram Questions Drawing Guide#Activity Diagram]] | Fork/join, decision/merge |
| UML notation / arrows | [[SE Revision From Models to Cost Estimation#3.3 UML 常见箭头和 notation 总结]]; [[My SE notes#UML]] | Notation lookup for diagrams |
| Use case diagram drawing | [[01 Diagram Questions Drawing Guide#Use Case Diagram]]; [[11 Use Case Diagram Relationships]] | Actors, use cases, communication/include/extend/generalization |
| Include vs extend | [[10 Include vs Extend]]; [[11 Use Case Diagram Relationships#Include]]; [[11 Use Case Diagram Relationships#Extend]] | High-risk MCQ and drawing arrows |
| Use case inheritance/generalization | [[11 Use Case Diagram Relationships#Inheritance Between Use Cases]]; [[My SE notes#Include vs Extend vs inheritance/generalization]] | Parent/child use case relationship |
| State transition diagram | [[01 Diagram Questions Drawing Guide#State Transition Diagram]]; [[My SE notes#State Machine Model]] | Event-driven behavior / FSM |
| OO basics | [[My SE notes#Object-Oriented]]; [[SE Revision From Models to Cost Estimation#7. OO method vs Structured Analysis method]] | Object/class/OO method boundary |
| Features of a class | [[My SE notes#Features of A Class]] | Abstraction / encapsulation / inheritance / polymorphism |
| Class diagram notation | [[My SE notes#Class Diagram]]; [[01 Diagram Questions Drawing Guide#Class Diagram]] | Class box, attributes, operations |
| Multiplicity | [[My SE notes#Multiplicity]] | Association end numbers |
| Qualifier | [[My SE notes#Qualifier]] | Change one-to-many / many-to-many relationship |
| Inheritance vs aggregation | [[My SE notes#Inheritance vs Aggregation]] | IS-A vs HAS-A boundary |
| Aggregation vs composition | [[My SE notes#Aggregation vs Composition]]; [[My SE notes#Composition 组合]] | Weak whole-part vs strong ownership |
| Association class | [[My SE notes#Association between Classes]] | Association with attributes/operations |
| Operation placement | [[My SE notes#Operation]]; [[My SE notes#Where should an operation belong?]] | Operation should work on attributes of its class |
| Operation vs association | [[My SE notes#Operation vs Association]]; [[My SE notes#Is Edit an association?]] | Not every verb is an association |
| Entity / boundary / control objects | [[My SE notes#OOA simplified iSpace system]] | OOA object classification |
| Architectural design principles | [[SE Revision From Models to Cost Estimation#4. Architectural Design 基础原则]] | Pattern, modularity, information hiding, independence |
| Coupling and cohesion | [[SE Revision From Models to Cost Estimation#4.4 Independence = Low Coupling + High Cohesion]]; [[06 SE Bilingual Glossary and MCQ Traps#Architecture]] | MCQ boundary / design quality |
| System organization models | [[SE Revision From Models to Cost Estimation#5. System Organization Models]] | Repository, client-server, peer-to-peer, layered, MVC |
| MVC and Observer | [[SE Revision From Models to Cost Estimation#5.5 MVC Model]]; [[SE Revision From Models to Cost Estimation#8.2 Observer Design Pattern]] | Pattern/model distinction |
| Component control | [[SE Revision From Models to Cost Estimation#6. Component Control]] | Centralized vs event-based control |
| OOD detailed design | [[SE Revision From Models to Cost Estimation#9. Object-Oriented Detailed Design]] | Signature, visibility, pre/post conditions |
| Restructuring | [[My SE notes#Restructuring]]; [[SE Revision From Models to Cost Estimation#10.7 Restructuring: reduce coupling and increase cohesion]] | Reduce coupling / increase cohesion |
| Structured design overview | [[SE Revision From Models to Cost Estimation#10. Lecture 12 - Structured Design and Isolating Transform Center]] | DFD to structured tree |
| Transform center | [[SE Revision From Models to Cost Estimation#10.3 Isolating Transform Center]] | Structured design drawing step |
| First-level / second-level factoring | [[SE Revision From Models to Cost Estimation#10.4 First-level factoring]]; [[01 Diagram Questions Drawing Guide#Structured Tree From DFD]] | Structured tree drawing |
| Testing overview | [[SE Revision From Models to Cost Estimation#11. Lecture 13 - Software Testing 1]]; [[My SE notes#Software testing]] | Unit/integration/system/regression, V&V |
| Black-box testing | [[SE Revision From Models to Cost Estimation#11.4 Black-box Testing]]; [[06 SE Bilingual Glossary and MCQ Traps#Testing]] | Equivalence class / boundary value |
| White-box testing | [[SE Revision From Models to Cost Estimation#11.5 White-box Testing]]; [[My SE notes#White-Box Testing]] | Statement / branch / path testing |
| Test oracle | [[SE Revision From Models to Cost Estimation#12.2 Test Oracle]] | Expected result generator |
| Test automation / management | [[SE Revision From Models to Cost Estimation#12.4 Test Automation]]; [[SE Revision From Models to Cost Estimation#12.6 Test Case Management]] | Testing process diagrams |
| Configuration management | [[SE Revision From Models to Cost Estimation#13. Lecture 15 - Configuration Management]]; [[My SE notes#Configuration Management]] | Planning, change, version, release, build |
| System building | [[SE Revision From Models to Cost Estimation#13.6 System Building]]; [[My SE notes#Configuration management activities]] | Build process / linker |
| Cost estimation overview | [[SE Revision From Models to Cost Estimation#14. Lecture 16 - Cost Estimation]] | Formulas and model selection |
| LOC / KLOC | [[SE Revision From Models to Cost Estimation#14.5 LOC / KLOC]] | Size metric |
| Function points | [[SE Revision From Models to Cost Estimation#14.6 Function Points]] | Functional size estimation |
| Object points | [[SE Revision From Models to Cost Estimation#14.7 Object Points]] | Application composition model |
| COCOMO II | [[SE Revision From Models to Cost Estimation#14.11 COCOMO 2 四个子模型]] | Application composition / early design / reuse / post-architecture |
| Staffing and calendar time | [[SE Revision From Models to Cost Estimation#14.17 Staffing and Calendar Time]] | TDEV / staffing relation |

## Exam Hotspot Index

| If the question asks about... | Open this first |
|---|---|
| "notation", arrows, UML symbols | [[SE Revision From Models to Cost Estimation#3.3 UML 常见箭头和 notation 总结]] |
| use case include / extend / inheritance | [[10 Include vs Extend]] and [[11 Use Case Diagram Relationships]] |
| drawing steps for UML / DFD / structured tree | [[01 Diagram Questions Drawing Guide]] |
| timed drawing practice | [[08 Drawing Drill Pack]] |
| one-line distinction / MCQ trap | [[06 SE Bilingual Glossary and MCQ Traps]] and [[07 Final Cram Sheet#One-Line Distinctions]] |
| class diagram relationship boundary | [[My SE notes#Difference]] |
| operation belongs to which class | [[My SE notes#Where should an operation belong?]] |
| edit/draw as association or operation | [[My SE notes#Operation vs Association]] |
| architecture model pros/cons | [[SE Revision From Models to Cost Estimation#5. System Organization Models]] |
| testing methods | [[SE Revision From Models to Cost Estimation#11. Lecture 13 - Software Testing 1]] |
| cost estimation formulas | [[SE Revision From Models to Cost Estimation#15.5 Cost Estimation 公式]] |

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

- [[SE Exam Review]]
- [[SE Source Index]]

### Personal Index

- [[00 My SE Notes Index|My SE Notes Index]]

### Direct Exam Review

- [[My SE notes|My SE notes]]
- [[SE Revision From Models to Cost Estimation]]
- [[Exercise]]

### Focused Notes

- [[01 Diagram Questions Drawing Guide|Diagram Questions Drawing Guide]]
- [[04 Class Exercise Templates|Class Exercise Templates]]
- [[06 SE Bilingual Glossary and MCQ Traps|SE Bilingual Glossary and MCQ Traps]]
- [[07 Final Cram Sheet|Final Cram Sheet]]
- [[08 Drawing Drill Pack|Drawing Drill Pack]]
- [[10 Include vs Extend|Include vs Extend]]
- [[11 Use Case Diagram Relationships|Use Case Diagram Relationships]]
