# Diagram Questions Drawing Guide

Goal: turn "I understand it" into "I can draw it under exam pressure".

## Use Case Diagram

English terms: actor, use case, system boundary, include, extend, scenario, base use case.

中文理解：

- Actor 是系统外部与系统交互的人或外部系统。
- Use case 是系统为 actor 提供的一个目标级功能。
- System boundary 用矩形框出系统内部功能，actor 在框外。
- Include 表示必定复用的公共步骤。
- Extend 表示条件触发的可选/扩展行为。

Drawing checklist:

1. Identify actors outside the system.
2. Put system name as boundary box.
3. Put use cases inside the boundary.
4. Connect actors to use cases.
5. Only add include/extend when the relationship is necessary and meaningful.

Common trap:

- Do not make every sub-function an include/extend. In class exercise, the teacher highlighted comparing solutions and avoiding unnecessary include/extend.

## State Transition Diagram

English terms: state, transition, event, guard condition, action.

中文理解：

- State 是系统在某一时刻的稳定情况。
- Transition 是事件触发的状态变化。
- Guard condition 是方括号里的条件，例如 `[correct ID & password]`。
- Action 是斜杠后的动作，例如 `/send`。

Drawing checklist:

1. List major pages/states.
2. Add user/system events as arrows.
3. Add guards for conditional branches.
4. Add actions only when transition causes an operation.
5. Check every state can be reached or exited unless it is a final/error state.

Class exercise pattern:

- Login Page -> Email list page -> Email editing page.
- Conditions such as correct ID/password, no subject, subject available.

## Data Flow Diagram

English terms: process, data flow, data store, external entity, context diagram, level-0 DFD.

中文理解：

- Process 是处理/转换数据的动作，通常用动词短语。
- Data flow 是数据移动，用名词短语标注箭头。
- Data store 是系统内部保存的数据。
- External entity 是系统外部的数据来源或接收者。
- Context diagram 是最高层，只画系统和外部实体。

Drawing checklist:

1. Start from context diagram: system as one process.
2. Identify external entities.
3. Decompose into level-0 processes.
4. Add data stores only when data must persist.
5. Balance parent and child diagrams: external input/output should match.

## Class Diagram

English terms: class, attribute, operation, association, generalization, aggregation, composition, multiplicity.

中文理解：

- Class = name + attributes + operations.
- Association 表示普通关系。
- Generalization/inheritance 表示 is-a。
- Aggregation/composition 表示 whole-part，其中 composition 生命周期依赖更强。
- Multiplicity 表示数量关系。

Drawing checklist:

1. Extract nouns as candidate classes.
2. Remove UI words, vague words, duplicated concepts.
3. Put data as attributes, behavior as operations.
4. Add relationships and multiplicities.
5. Check inheritance only when "A is a B" is true.

## Sequence Diagram

English terms: object, lifeline, message, activation, return message.

中文理解：

- Sequence diagram 关注对象之间按时间顺序发送消息。
- 时间从上到下。
- 横向是对象/参与者。

Drawing checklist:

1. Put actor or initiating object on the left.
2. Put participating objects across the top.
3. Draw lifelines downward.
4. Add messages in chronological order.
5. Keep message names close to operations in class diagram.

## Activity Diagram

English terms: activity, control flow, decision node, merge node, fork, join, swimlane.

中文理解：

- Activity diagram 画工作流程。
- Decision/Merge 处理分支。
- Fork/Join 处理并行。
- Swimlane 用来区分责任方。

Drawing checklist:

1. Start from initial node.
2. Add activities as verb phrases.
3. Add decision guards.
4. Use swimlanes if different actors/systems are responsible.
5. End with final node.

## Structured Tree From DFD

English terms: structured design, structured tree, transform center, input branch, output branch, first-level factoring, second-level factoring.

中文理解：

- Structured design 把 DFD 转换成调用结构。
- Transform center 是核心变换过程。
- First-level factoring 先分出输入、变换、输出三大部分。
- Second-level factoring 再展开每个部分的内部调用。

Drawing checklist:

1. Identify input flow, transform center, output flow in DFD.
2. Create top control module.
3. Add first-level modules: input, transform, output.
4. Add lower-level modules according to detailed processes.
5. Restructure to improve cohesion and reduce coupling.

