---
tags:
  - course/se
  - se/ppt
  - se/class-exercise
  - exam/drawing
---

# 09 All PPT Explanations

Purpose: explain every PPTX in `D:\study\se` using both slide text and visual diagram structure.

Use with:

- [[04 Class Exercise Templates]]
- [[08 Drawing Drill Pack]]
- [[07 Final Cram Sheet]]

## How To Read This Page

For each PPT:

- What the PPT is training: 这份 PPT 想考你什么能力。
- Visual understanding: 我从图形/图片结构里看到的重点。
- Exam explanation: 考试时应该怎样讲、怎样画、怎样避坑。
- English to remember: 必须会写/会认的英文表达。

## Lecture 3 Class Exercise Table

Source: [Lecture 3 class exercise table.pptx](<file:///D:/study/se/Lecture%203%20class%20exercise%20table.pptx>)

What the PPT is training:

- Requirements analysis from a table.
- Identify measurable values, undefined values, and weighted comparison.

Visual understanding:

- The embedded image is visually almost black/unreadable after extraction, so the reliable content is the PPT text layer.
- The readable text includes: `Describe system requirements`, values such as `50`, `60`, `80`, `Undefined`, `95`, `125`, `155`, and `Weight x 2`.

Exam explanation:

- 这类题不是让你背数字，而是训练你看到 requirements 表格时判断哪些需求明确、哪些需求缺失。
- `Undefined` 是一个信号：需求没有被充分说明，不能自己脑补。
- `Weight x 2` 表示某个指标权重更高，比较方案时要按权重计算。

English to remember:

- requirements
- undefined
- measurable requirement
- weighted comparison

MCQ trap:

- Undefined requirement is not acceptable just because the rest of the table has numbers.

## Lecture 4 Use Case Diagram

Source: [class exercise lecture 4 use case diagram.pptx](<file:///D:/study/se/class%20exercise%20lecture%204%20use%20case%20diagram.pptx>)

What the PPT is training:

- Draw and compare use case diagram alternatives.
- Understand when to use no relation, `extend`, or `include`.

Visual understanding:

- The deck has 6 slides.
- Repeated visual elements: actor `Customer`, use cases `Time deposit`, `Transfer`, `Inquire balance`, and two transfer variants: `Transfer between same currency`, `Transfer between different currency`.
- Later slides explicitly compare `no include extend`, `extend`, and `include`.

Exam explanation:

- 最基础画法：Customer 在系统边界外，三个主要 use cases 在系统边界内。
- Same-currency transfer and different-currency transfer are variants/special cases of Transfer.
- 如果两个变体是 Transfer 的可选扩展行为，可以考虑 `extend`。
- 如果某个 use case 必定调用另一个公共步骤，才用 `include`。
- 老师让比较三种图，说明考点不是“乱加 include/extend”，而是判断关系是否合理。
- Full judgment rules: [[10 Include vs Extend]].

English to remember:

- actor
- use case
- system boundary
- include
- extend
- base use case
- communication
- generalization

Related note: [[11 Use Case Diagram Relationships]]

Drawing checklist:

- [ ] Actor outside the system boundary.
- [ ] Use cases inside the boundary.
- [ ] Associations are simple solid lines.
- [ ] `include` means mandatory reuse.
- [ ] `extend` means optional/conditional extension.

## Lecture 4 State Transition Diagram

Source: [class exercise lecture 4 state transition diagram.pptx](<file:///D:/study/se/class%20exercise%20lecture%204%20state%20transition%20diagram.pptx>)

What the PPT is training:

- Draw event-driven behavior.
- Decide whether a warning/confirmation window is a state or an action.

Visual understanding:

- The slide has many state boxes and arrows: 14 shapes and 8 connectors.
- Main states: `Login Page`, `Email list page`, `Email editing page`, `Warning`.
- Transitions are labeled with events, guards, and actions:
  - `"Login" clicked [correct ID & password]`
  - `"Login" clicked [incorrect ID || password] / warning`
  - `"Compose" clicked`
  - `"Send" clicked [No subject]`
  - `"Send" clicked [subject available] / send`
  - `"Cancel" clicked`
  - `"Logout" clicked`

Exam explanation:

- State transition diagram 画的是“系统在不同状态之间如何被事件驱动改变”。
- 事件写在箭头上，条件用 `[guard]`，动作写成 `/action`。
- PPT 特别强调：如果 warning/confirmation 窗口有两个或更多按钮，可以作为 state；如果只有一个按钮，就更像 action。
- 这句话很可能是选择题或画图题扣分点。

English to remember:

- state
- transition
- event
- guard condition
- action

Drawing checklist:

- [ ] State names are stable UI/system situations.
- [ ] Transitions have event labels.
- [ ] Conditions use square brackets.
- [ ] Actions use slash notation.
- [ ] Warning state is justified by number of buttons.

## Lecture 5 Class Diagram

Source: [Class exercise lecture 5 Class.pptx](<file:///D:/study/se/Class%20exercise%20lecture%205%20Class.pptx>)

What the PPT is training:

- Read and draw a UML class diagram with inheritance and multiplicity.

Visual understanding:

- This PPT is almost entirely an embedded image, so image understanding matters.
- The diagram has `Person` at the top.
- `Student`, `Teacher`, and `Security_Guard` inherit from `Person`.
- `Mentor` inherits from `Teacher`.
- `Teacher` is associated with `Course`.
- `Student` is associated with `Mentor`.
- Multiplicity symbols include `1`, `1..*`, and `*`.

Classes and attributes:

- `Person`: `mobilePhoneNumber`
- `Student`: `studentId`, `dormitoryNumber`, `major`, `homeAddress`
- `Teacher`: `officeNumber`, `staffId`, `officePhoneNumber`
- `Security_Guard`: `staffId`
- `Mentor`: `emailAddress`
- `Course`: `courseId`, `name`

Exam explanation:

- Hollow triangle arrow points to the superclass.
- Student is a Person; Teacher is a Person; Security_Guard is a Person.
- Mentor is drawn as a subtype of Teacher, so `Mentor is a Teacher`.
- Multiplicity placement matters: 看清楚 `1`、`1..*`、`*` 是标在关系哪一端。
- 如果考试让你解释图，重点讲 static structure: classes, attributes, inheritance, associations, multiplicity。

English to remember:

- class diagram
- attribute
- association
- generalization
- inheritance
- multiplicity
- superclass
- subclass

MCQ trap:

- Do not confuse inheritance with association. `Student -- Mentor` is not the same kind of relationship as `Student <|-- Person`.

## Lecture 6 Class Diagram

Source: [class exercise lecture 6 class diagram.pptx](<file:///D:/study/se/class%20exercise%20lecture%206%20class%20diagram.pptx>)

What the PPT is training:

- Identify classes, attributes, relationships, and multiplicities from a banking domain.

Visual understanding:

- The slide is built from many diagram shapes: 28 shapes and 25 connectors.
- Main classes visible in the text layer:
  - `Saving Account`
  - `Deposit Account`
  - `Investment Account`
  - `Deposit`
  - `Investment`
  - `Customer`
  - `Transfer`
- Attributes include `account no`, `balance`, `startDate`, `maturityDate`, `amount`, `interestRate`, `type`, `unit`, `price`, `Name`, `homeAddress`, `phoneNumber`, `date`.
- Operations include `sell`, `buy`, and likely `maturityProcee` / maturity process.

Exam explanation:

- 这类图要先从 nouns 找 classes，再从描述性数据找 attributes。
- `Transfer` 有 `date` 和 `amount`，所以它不只是普通线条，可能需要建成一个类或 association class。
- `Saving Account`, `Deposit Account`, `Investment Account` 体现账户类别；是否用 inheritance 要看题目是否说明它们都是 account 的 subtype。
- `Customer` 和账户之间通常是 one-to-many，PPT 中有 `1` 和 `1..*` 这类 multiplicity。

English to remember:

- association class
- account
- customer
- transfer
- multiplicity
- operation

Drawing checklist:

- [ ] Put domain nouns as classes.
- [ ] Put stable data as attributes.
- [ ] Put actions as operations.
- [ ] Use multiplicity on associations.
- [ ] Turn relationships with attributes into a class/association class.

## Lecture 6 Activity Diagram

Source: [class exercise lecture 6 activity diagram.pptx](<file:///D:/study/se/class%20exercise%20lecture%206%20activity%20diagram.pptx>)

What the PPT is training:

- Draw workflow/process logic.
- Represent responsibility flow among Client, Cloud, Factory, and Courier.

Visual understanding:

- The slide contains 24 shapes and 4 connectors.
- Visible actions:
  - `Client sets order to cloud`
  - `Send order to factory`
  - `Set order to courier`
  - `Deliver product`
  - `Courier sends notification to Cloud`
  - `Notification to Client`
  - `Notification to Factory`

Exam explanation:

- Activity diagram 讲的是 workflow，动作应该写成 verb phrases。
- 如果题目强调不同参与方责任，用 swimlanes 分 Client / Cloud / Factory / Courier。
- Notification to Client 和 Notification to Factory 可以理解为从 Cloud 发出的两个后续通知。

English to remember:

- activity
- control flow
- decision node
- swimlane
- fork
- join

Drawing checklist:

- [ ] Start node and end node.
- [ ] Actions are verb phrases.
- [ ] Flow order matches scenario.
- [ ] Swimlanes if responsibility matters.

## Lecture 6 Sequence Diagram

Source: [class exercise lecture 6 sequence diagram.pptx](<file:///D:/study/se/class%20exercise%20lecture%206%20sequence%20diagram.pptx>)

What the PPT is training:

- Draw object interactions over time.

Visual understanding:

- The slide includes 35 shapes and 4 connectors.
- Visible lifeline/object names:
  - `:User`
  - `:Transfer`
  - `:Saving`
  - `:Time Deposit account`
  - `:Time Deposit`
- Visible messages:
  - `Transfer()`
  - `checkBalance()`
  - `Withdraw()`
  - `renew()`
  - `Create()`
  - `Deposit()`

Exam explanation:

- Sequence diagram 的关键是 time order：从上到下发生。
- `:User` 发起 `Transfer()`。
- `:Transfer` 作为控制/协调对象，调用账户对象检查余额、取款、创建/更新定期存款。
- 消息名通常应该对应 class diagram 里的 operations。

English to remember:

- sequence diagram
- lifeline
- message
- activation
- object interaction

Drawing checklist:

- [ ] Actor/object names across the top.
- [ ] Lifelines vertical.
- [ ] Messages ordered top to bottom.
- [ ] Message names use operation style like `checkBalance()`.

## Lecture 11 Restructuring

Source: [class exercise lecture 11 restructuring (2).pptx](<file:///D:/study/se/class%20exercise%20lecture%2011%20restructuring%20%282%29.pptx>)

What the PPT is training:

- Restructure class design by extracting common data/behavior.

Visual understanding:

- The slide has 26 shapes and 4 connectors.
- Main classes/text:
  - `Teacher`: `Name`, `Credit`, `Office number`, `Card ID`, `Update()`, `ShowSyllabus()`
  - `Student`: `Mobile number`, `ID`, `Update()`
  - `Course`: `Course name`
  - `Member`: `Name`, `Update()`
- Common members suggest refactoring: `Name` and `Update()` can move to `Member`.

Exam explanation:

- 这是 detailed design / restructuring 的典型题。
- 如果两个类有重复 attributes/operations，要考虑抽象出 superclass。
- 抽取后，公共内容放到 `Member`，Teacher/Student 只保留自己的特殊字段和操作。
- 注意不要把不共享的东西也硬塞进父类。

English to remember:

- restructuring
- refactoring
- superclass
- common attribute
- common operation
- detailed design

MCQ trap:

- Refactoring changes internal structure but should not change external behavior.

## Lecture 13 Testing

Source: [Class exercise Lecture 13 (1).pptx](<file:///D:/study/se/Class%20exercise%20Lecture%2013%20%281%29.pptx>)

What the PPT is training:

- Equivalence-class testing.
- White-box coverage: statement, branch, path.
- Triangle classification control-flow reasoning.

Visual understanding:

- Slides 1-3 compare weak and strong equivalence-class testing.
- The embedded image on slide 4 is a clear control-flow chart:
  - Begin
  - Input `a b c`
  - Decision 1: `a <= 0 || b <= 0 || c <= 0`
  - True: `Print out of range`, then `return`
  - False: Decision 2: `a >= b+c || b >= a+c || c >= a+b`
  - True: `Print Not a triangle`
  - False: `Print triangle`
  - End

Exam explanation:

- Weak equivalence-class testing: each test case may cover one representative class.
- Strong equivalence-class testing: combine conditions across input dimensions, more detailed.
- Boundary cases around triangle inequality are important:
  - `(2, 3, 5)` equality boundary, not triangle because `a+b=c`.
  - `(2, 3, 6)` beyond boundary, not triangle.
- PPT gives minimum white-box set:
  - Statement testing: 3
  - Branch testing: 3
  - Path testing: 3
  - Test cases: `(-1, -2, 3)`, `(1, 2, 3)`, `(4, 5, 6)`

English to remember:

- weak equivalence-class testing
- strong equivalence-class testing
- boundary value testing
- statement testing
- branch testing
- path testing
- control-flow graph

MCQ trap:

- Statement coverage does not imply branch coverage in general.
- Boundary value testing belongs to black-box testing.

## Summary Table

| PPT | Main diagram/task | Exam value |
|---|---|---|
| Lecture 3 class exercise table | Requirements table | Find undefined/weighted requirements |
| Lecture 4 use case diagram | Bank use cases | Actor, system boundary, include/extend |
| Lecture 4 state transition diagram | Email UI states | State, event, guard, action |
| Lecture 5 Class | Person class diagram | Inheritance and multiplicity |
| Lecture 6 class diagram | Bank account classes | Classes, attributes, associations |
| Lecture 6 activity diagram | Order workflow | Activity/control flow/swimlanes |
| Lecture 6 sequence diagram | Transfer interaction | Lifelines and messages |
| Lecture 11 restructuring | Teacher/Student/Member | Refactor common attributes/operations |
| Lecture 13 testing | Triangle testing | Equivalence classes and coverage |

## How To Use Before Exam

1. Read the summary table.
2. Pick one PPT and redraw from memory.
3. Compare with the "Visual understanding" section.
4. Say the "English to remember" terms aloud.
5. Write one MCQ trap for that PPT.
