---
tags:
  - course/se
  - se/use-case
  - se/diagram
  - exam/mcq
  - exam/drawing
  - Done-by-me
---


# My SE Notes

## Sources / Related Notes

Main source folder:

- [SE Source Index](../../../Resources/Software%20Engineering/SE%20Source%20Index.md)

Lecture sources:

- Lecture 4 System Models: [PDF](<file:///D:/study/se/Lecture%204%20System%20models.pdf>) / [TXT](<file:///D:/study/se/Lecture%204%20System%20models.txt>)
- Lecture 5 OO Object / Classes: [PDF](<file:///D:/study/se/Lecture%205%20-%20OO%20object.pdf>) / [TXT](<file:///D:/study/se/Lecture%205%20-%20OO%20object.txt>)
- Lecture 6 OOA / UML introduction: [PDF](<file:///D:/study/se/Lecture%206%20-%20OOA%20%20UML%20introduction.pdf>) / [TXT](<file:///D:/study/se/Lecture%206%20-%20OOA%20%20UML%20introduction.txt>)

Class exercise sources:

- Lecture 4 use case diagram PPT: [PPTX](<file:///D:/study/se/class%20exercise%20lecture%204%20use%20case%20diagram.pptx>)
- Lecture 4 state transition diagram PPT: [PPTX](<file:///D:/study/se/class%20exercise%20lecture%204%20state%20transition%20diagram.pptx>)
- Lecture 5 class diagram PPT: [PPTX](<file:///D:/study/se/Class%20exercise%20lecture%205%20Class.pptx>)
- Lecture 6 class diagram PPT: [PPTX](<file:///D:/study/se/class%20exercise%20lecture%206%20class%20diagram.pptx>)

Detailed notes:

- [10 Include vs Extend](./10%20Include%20vs%20Extend.md)
- [11 Use Case Diagram Relationships](./11%20Use%20Case%20Diagram%20Relationships.md)
- [01 Diagram Questions Drawing Guide](./01%20Diagram%20Questions%20Drawing%20Guide.md)
- [04 Class Exercise Templates](./04%20Class%20Exercise%20Templates.md)
- [SE Revision From Models to Cost Estimation](./My%20SE%20Notes/SE%20Revision%20From%20Models%20to%20Cost%20Estimation/SE%20Revision%20From%20Models%20to%20Cost%20Estimation.md)

---

# Include vs Extend vs inheritance/generalization

Source:

- [10 Include vs Extend](./10%20Include%20vs%20Extend.md)
- [11 Use Case Diagram Relationships](./11%20Use%20Case%20Diagram%20Relationships.md)
- Image: [use-case-diagram-relationships.png](../../../Resources/Software%20Engineering/Images/use-case-diagram-relationships.png)

Include:  A (Base case) ---include---> B    必做的公共步骤。`include` 表示“每次执行 A，都一定会执行 B”。B 通常是多个 use case 共享的公共子流程。

Extend:  A (Base use case) <---extend--- B 条件触发的可选行为。Extension use case happens only under some condition.

Ineritance: A（父） <------B（子） 
A is the generalization of B.
B is a specialization of A.
B is a kind of A.
For two use cases A and B, if A the generalization of B, and B is a specialization of A, then they have inheritance relationships.
子 use case 是父 use case 的一种特殊类型。

![use-case-diagram-relationships.png](../../../Resources/Software%20Engineering/Images/use-case-diagram-relationships.png)


# State Machine Model

Source:

- Lecture 4 System Models: [PDF](<file:///D:/study/se/Lecture%204%20System%20models.pdf>)
- Class exercise: [state transition diagram PPTX](<file:///D:/study/se/class%20exercise%20lecture%204%20state%20transition%20diagram.pptx>)
- Image: [state-transition-machine.png.png](../../../Resources/Software%20Engineering/Images/state-transition-machine.png.png)

![state-transition-machine.png.png](../../../Resources/Software%20Engineering/Images/state-transition-machine.png.png)

Data-Flow Model

Source:

- Lecture 4 System Models: [PDF](<file:///D:/study/se/Lecture%204%20System%20models.pdf>)
- Image: [notation.png.png](../../../Resources/Software%20Engineering/Images/notation.png.png)

![notation.png.png](../../../Resources/Software%20Engineering/Images/notation.png.png)

# Features of A Class

Source:

- Lecture 5 OO Object / Classes: [PDF](<file:///D:/study/se/Lecture%205%20-%20OO%20object.pdf>) / [TXT](<file:///D:/study/se/Lecture%205%20-%20OO%20object.txt>)
- Related: [00 SE Exam Map](./00%20SE%20Exam%20Map.md)

## Abstraction 抽象
抽象就是只保留当前问题里重要的属性和行为，忽略不重要的细节。
Class: File
Attributes: size
Operations: open, close, edit
我们关心的是文件的大小、打开、关闭、编辑。
但不关心它在硬盘上具体怎么存、底层二进制怎么组织。
特点：
- Reduce the affection（影响）of the changes 
- Facilitate （使容易 ）component reuse 
- Simplify （简化） the interfaces.
## Encapsulation 封装
封装就是把数据和操作包在类里面，外部对象不需要知道内部怎么实现，只需要知道怎么使用。

## Inheritance 继承
子类继承父类已有的属性和操作，同时可以增加或特殊化自己的内容。
Word file（Sub-class) <|-- File （Super-class）
一个子类可以有两个父类
## Polymorphic 多态
多态就是同一个操作名，可以根据对象或参数不同，表现出不同实现。
insert(IMAGE oImage)
insert(char *text)
add(int i1, int i2)
add(char *str1, char *str2)

# Object-Oriented
Object + Classification + Inheritance + Communication

# Object-Oriented Software Development

Source:

- Lecture 6 OOA / UML introduction: [PDF](<file:///D:/study/se/Lecture%206%20-%20OOA%20%20UML%20introduction.pdf>) / [TXT](<file:///D:/study/se/Lecture%206%20-%20OOA%20%20UML%20introduction.txt>)

Develop the software which is a collection of objects that incorporate both data structure （数据）and behavior （行为）
## 四个阶段：
- Object-Oriented Analysis (Requirements specification) 
- Object-Oriented Design (Architectural Design)
- Object Design (Detailed Design)
- Object-Oriented Programming (Implementation)

# UML

Source:

- Lecture 6 OOA / UML introduction: [PDF](<file:///D:/study/se/Lecture%206%20-%20OOA%20%20UML%20introduction.pdf>)
- Image: [uml.png.png](../../../Resources/Software%20Engineering/Images/uml.png.png)

![uml.png.png](../../../Resources/Software%20Engineering/Images/uml.png.png)

## Class Diagram

### \<\<instacance of \>\>
object ---\<\<instanceOf\>\> ---\> class

### Class Notation
```mermaid
classDiagram
    class Class name {
        -Attributes
        +Operations()
    }
```

### Associations and links

Source:

- Lecture 6 OOA / UML introduction: [PDF](<file:///D:/study/se/Lecture%206%20-%20OOA%20%20UML%20introduction.pdf>)
- Lecture 6 class diagram exercise: [PPTX](<file:///D:/study/se/class%20exercise%20lecture%206%20class%20diagram.pptx>)

A link （链接）is – a connection between two objects

An association 
– a relationship between classes and represents a group of links 
– bidirectional （双向）or unidirectional （单向）

Example:
```mermaid
classDiagram
    class Student {
        -name: String
        -studentID: String
    }
	class Book{
		-title: String
		-authors: List String
	}
	
	Student  -->  Book : Borrow
```

```mermaid
classDiagram
    class Student {
        -name: String
        -studentID: String
    }
	class Book{
		-title: String
		-authors: List String
	}
	
	Student  --  Book : Borrow
```

Unidirectional: A student can query the books he/she borrowed but it is not possible to find which student is this book lent to

Associations are inherently bidirectional.
Bidirectional A student can query the books he/she borrowed and It is possible to find which student is this book lent to


![asspcoatopm-classes.png.png](../../../Resources/Software%20Engineering/Images/asspcoatopm-classes.png.png)

Source:

- Image: [asspcoatopm-classes.png.png](../../../Resources/Software%20Engineering/Images/asspcoatopm-classes.png.png)
- Related: association class explanation from class diagram lecture/exercise.

关联关系本身可以有属性和操作。
关联类不能脱离它连接的类单独存在。
```mermaid
classDiagram
    class Student {
        name: String
        studentID: String
    }

    class Book {
        title: String
        authors: StringList
    }

    class Borrow {
        librarian: String
        time: Time
    }

    Student "1" --> "0..*" Borrow : borrows
    Borrow "0..*" --> "1" Book : book
```
### Multiplicity

Source:

- Lecture 6 OOA / UML introduction: [PDF](<file:///D:/study/se/Lecture%206%20-%20OOA%20%20UML%20introduction.pdf>)

**常见 multiplicity**

1 exactly one / 正好一个 
0..1 zero or one / 零个或一个 
0..* zero or many / 零个或多个 
1..* one or many / 一个或多个 
\* many / 多个 
\* n exactly n / 正好 n 个
\* m..n from m to n / m 到 n 个

```mermaid
classDiagram
    class Student {
        name: String
        studentID: String
    }

    class Book {
        title: String
        authors: StringList
    }

    Student "1" -- "0..*" Book : borrows
```
One student can borrow 0 or many books

### Qualifier

Source:

- Image: [qualifier.png.png](../../../Resources/Software%20Engineering/Images/qualifier.png.png)

![qualifier.png.png](../../../Resources/Software%20Engineering/Images/qualifier.png.png)

### Inheritance vs Aggregation

Source:

- Lecture 5 OO Object / Classes: [PDF](<file:///D:/study/se/Lecture%205%20-%20OO%20object.pdf>)
- Lecture 6 UML relationships: [PDF](<file:///D:/study/se/Lecture%206%20-%20OOA%20%20UML%20introduction.pdf>)

Inheritance: **is-a** relationship / 是一种

Aggregation: **has-a / part-of** relationship / 拥有、包含、整体-部分

### Inheritance 继承

B（子类 / subclass） is a kind of A（父类 / superclass）.

```text
B --|> A
子类 --|> 父类
```

Example:

```text
Dog is an Animal.
PPT file is a File.
Word file is a File.
```

Mermaid:

```mermaid
classDiagram
    class File {
        size
        open()
        close()
        edit()
    }

    class PPTFile {
        slideCount
    }

    class WordFile {
        wordCount
    }

    File <|-- PPTFile
    File <|-- WordFile
```

Meaning:

- `PPTFile` inherits attributes and operations from `File`.
- `WordFile` inherits attributes and operations from `File`.
- The hollow triangle arrow points to superclass.

中文理解：

继承表示“子类是父类的一种”。  
子类可以复用父类已有的 attributes 和 operations，并且可以增加自己的特殊 features。

### Aggregation 聚合

A has B, but B can still exist without A.

```text
A o-- B
整体 o-- 部分
```

Example:

```text
Team has Players.
Library has Books.
Department has Teachers.
```

Mermaid:

```mermaid
classDiagram
    class Library {
        name
    }

    class Book {
        title
        authors
    }

    Library o-- Book : has
```

Meaning:

- `Library` has `Book`.
- But `Book` can still exist if this library is deleted or if the book moves to another library.
- Empty diamond is on the whole side.

中文理解：

聚合表示“整体-部分”关系，但这个部分不是强依赖。  
部分对象可以脱离整体继续存在。

## Difference

| Relationship | Question to ask                                  | Meaning      | Mermaid / UML |       |
| ------------ | ------------------------------------------------ | ------------ | ------------- | ----- |
| Inheritance  | Is B a kind of A?                                | B 是 A 的一种    | `A <          | -- B` |
| Aggregation  | Does A have B?                                   | A 拥有/包含 B    | `A o-- B`     |       |
| Composition  | Is B a part of A and cannot exist independently? | B 是 A 的强组成部分 | `A *-- B`     |       |


### Aggregation vs Composition

Aggregation is weak whole-part:

```text
Library o-- Book
```

Composition is strong whole-part:

```text
House *-- Room
```

Composition means the part strongly depends on the whole.

中文：

- Aggregation: 部分可以独立存在。
- Composition: 部分通常不能脱离整体独立存在。

## Composition 组合

A owns B strongly. If A is destroyed, B usually cannot exist independently.

```text
A *-- B
整体 *-- 部分
```

Example:

```text
House has Rooms.
Order has OrderItems.
HumanBody has Heart.
```

Mermaid:

```mermaid
classDiagram
    class House {
        address
    }

    class Room {
        roomNo
        area
    }

    House *-- Room : contains
```

Meaning:

- `House` is the whole.
- `Room` is a part of `House`.
- If the house does not exist, the room as part of that house does not exist.
- Filled diamond is on the whole side.

中文理解：

组合也是“整体-部分”，但是比 aggregation 更强。  
部分对象强依赖整体对象，生命周期通常和整体绑定。

## Aggregation vs Composition Example

Aggregation:

```mermaid
classDiagram
    class Library {
        name
    }

    class Book {
        title
    }

    Library o-- Book : has
```

中文：

Library has Books, but Book can still exist without this Library.

Composition:

```mermaid
classDiagram
    class House {
        address
    }

    class Room {
        roomNo
    }

    House *-- Room : contains
```

中文：

House has Rooms, and Room normally cannot exist independently without the House.

### Quick Memory

```text
Inheritance = is-a
Aggregation = has-a, weak ownership
Composition = part-of, strong ownership
```

Exam trap:

```text
Library o-- Book      correct for aggregation
House *-- Room        correct for composition
Book <|-- Library     wrong, because Library is not a kind of Book
```

## Operation

![operations-in-a-class.png](../../../Resources/Software%20Engineering/Images/operations-in-a-class.png)

Source:

- Image: [operations-in-a-class.png](../../../Resources/Software%20Engineering/Images/operations-in-a-class.png)
- Lecture 5 OO Object / Classes: [PDF](<file:///D:/study/se/Lecture%205%20-%20OO%20object.pdf>)
- Related concept: class operations should work on attributes of the same class.

Operation in a class must work on the attributes of this class.

中文：

一个 class 里面的 operation，应该主要操作这个 class 自己的 attributes。  
不要因为“某个 user 做了这个动作”，就把 operation 放到 User 里面。

## Where should an operation belong?

Rule:

```text
Operation belongs to the class whose attributes it works on.
操作谁的数据，就放到谁的类里。
```

Example 1:

```text
User can edit Document.
Edit() belongs to Document, not User.
```

Why:

```text
Edit() changes Document.Content.
```

Mermaid:

```mermaid
classDiagram
    class User {
        Name
    }

    class Document {
        Content
        Edit()
    }
```

中文理解：

User 只是触发 edit 的 actor/object。  
真正被修改的是 Document 的 Content，所以 `Edit()` 应该放在 `Document`。

Example 2:

```text
User can draw a Line.
Draw() belongs to Line, not User.
```

Why:

```text
Draw() works on Line.Point1 and Line.Point2.
```

Mermaid:

```mermaid
classDiagram
    class User {
        Name
    }

    class Line {
        Point1
        Point2
        Draw()
    }
```

中文理解：

User 发出 draw 的命令，但 Line 根据自己的两个点来画线。  
所以 `Draw()` 属于 `Line`。

## Association between Classes

![association-between-classes.png](../../../Resources/Software%20Engineering/Images/association-between-classes.png)

Source:

- Image: [association-between-classes.png](../../../Resources/Software%20Engineering/Images/association-between-classes.png)
- Lecture 5 / class modeling slides.
- Related section: [Operation](./My%20SE%20notes.md#operation)

Association between classes is created because two participating classes have information dependency.

中文：

两个 class 之间是否需要 association，不是看句子里有没有 verb，而是看它们之间有没有信息依赖 / 静态关系。

Important sentence:

```text
Not every verb is an association.
Only when two classes have some static relationship, there is an association.
```

中文：

不是每个动词都是 association。  
只有两个类之间需要保存某种状态关系 / 信息依赖时，才需要 association。

## Is Edit an association?

Question:

```text
If a user can edit the document, is edit an association?
```

Answer:

It depends on whether user information needs to be recorded.

Case 1:

```text
If the edit work needs to be tracked according to user's information,
then edit is an association.
```

中文：

如果系统需要记录“哪个 user 编辑了哪个 document”，那么 User 和 Document 之间有信息依赖，需要 association。

Mermaid:

```mermaid
classDiagram
    class User {
        Name
    }

    class Document {
        Content
        Edit()
    }

    User --> Document : edits
```

Case 2:

```text
If the edit work will not record any user information,
the association is not needed.
```

中文：

如果系统只需要修改 Document.Content，不需要记录 user 信息，那么 User 和 Document 不一定需要 association。

## Operation vs Association

| Question | Look at | Result |
|---|---|---|
| Where does `Edit()` belong? | Which class's attributes are changed? | `Document`, because it changes `Content` |
| Is `edit` an association? | Do we need to remember relationship/info between User and Document? | only if user edit info must be tracked |

## Quick Memory

```text
Operation = behavior inside a class, working on its own attributes.
Association = static information dependency between classes.
```

中文口诀：

```text
操作谁的数据，operation 放谁那里。
需要记住谁和谁的关系，才画 association。
有动词不一定有关联。
```

Exam trap:

```text
User edits Document
```

Do not automatically put `Edit()` in `User`.  
Do not automatically draw `User -- Document`.

Ask:

1. Does `Edit()` change `Document.Content`?
   - Yes -> `Edit()` belongs to `Document`.
2. Do we need to record which `User` edited which `Document`?
   - Yes -> draw association.
   - No -> association is not needed.

# OOA simplified iSpace system

Source:

- Lecture 7 OOA example: [PDF](<file:///D:/study/se/Lecture%207%20-%20OOA%20-%20An%20example.pdf>) / [TXT](<file:///D:/study/se/Lecture%207%20-%20OOA%20-%20An%20example.txt>)
- Assignment / iSpace document: [A Simplified iSpace System.docx](<file:///D:/study/se/A%20Simplified%20iSpace%20System.docx>)
- Images: [sis-activity.png](../../../Resources/Software%20Engineering/Images/sis-activity.png), [sis-usecase.png](../../../Resources/Software%20Engineering/Images/sis-usecase.png)

![sis-activity.png](../../../Resources/Software%20Engineering/Images/sis-activity.png)

![sis-usecase.png](../../../Resources/Software%20Engineering/Images/sis-usecase.png)
![sis-std.png](../../../Resources/Software%20Engineering/Images/sis-std.png)
## Objects

Source:

- Lecture 7 OOA example: [PDF](<file:///D:/study/se/Lecture%207%20-%20OOA%20-%20An%20example.pdf>) / [TXT](<file:///D:/study/se/Lecture%207%20-%20OOA%20-%20An%20example.txt>)

Three types of objects:

1. Entity objects
2. Boundary objects
3. Control objects

### Entity objects

Entity objects are participating objects in the application domain.

中文：

Entity object 是业务领域里真正要保存信息的对象。  
一般来自系统描述中的重要名词。

Example:

```text
Student
Course
Assignment
Document
Book
```

### Boundary objects

Boundary objects represent the system interface.

中文：

Boundary object 是系统和外部 actor 交互的边界，比如页面、窗口、表单、API interface。

Example:

```text
LoginPage
EditProfilePage
BorrowBookForm
```

### Control objects

Control objects coordinate boundary objects and entity objects.

中文：

Control object 负责协调流程。  
通常一个 use case 可以有一个 control object。

Example:

```text
BorrowBookControl
EditProfileControl
iSpaceSystemControl
```

Exam memory:

```text
Entity = domain data
Boundary = interface
Control = coordination / workflow
```

Important rule:

```text
Entity objects never access boundary or control objects.
```

中文：

Entity object 不应该反过来依赖界面或控制对象。


# Lecture 11 - Object-oriented detailed design
## Restructuring
Source: [Lecture 11 - Object-oriented detailed design.pdf, pp. 18-24](<file:///D:/study/se/Lecture%2011%20-%20Object-oriented%20detailed%20design.pdf>)

Classes in a subsystem can be further adjusted
- Change n-ary associations to binary associations
- Increase the inheritance
- Collapse (降级) classes with no significant （明显的） behavior into attributes
- Use qualifier （限定符 ） to change the one-to-many and many-to-many relationship
- Implement an association class as a class

# Structural factoring
![two-level-factoring.png](../../../Resources/Software%20Engineering/Images/two-level-factoring.png)

# Software testing
## Unit Testing 单元测试

**Unit testing = 测一个单独的 function / program / class。**

课件例子是 `deductBalance()` 这个函数，unit testing 就是单独测试这个函数在不同 balance 和 amount 下是否返回正确结果、是否扣款、是否显示余额不足提示。课件也明确写：unit testing 是 test a single program or a function。

比如 ASDW 项目里：

`checkLogin()`  
`editInterviewRecord()`  
`validateStudentId()`  
`calculateScore()`

这些都可以单独做 unit testing。

---

## Integration Testing 集成测试

**Integration testing = 测几个 modules 合起来能不能正常工作。**

一个函数单独没问题，不代表它和别的模块组合起来也没问题。课件说 integration testing 是 test a module or an integration of several modules。

比如：

Login module 单独没问题。  
Edit interview record module 单独没问题。  
但登录后权限能不能正确传到 edit 页面？  
edit 后数据库是否真的更新？  
这就是 integration testing。

---

## System Testing 系统测试

**System testing = 测整个系统。**

它不是只看某个函数，也不是只看几个模块，而是看整个软件作为一个完整系统是否满足需求。课件直接写 system testing 是 test a system。

比如：

用户从 login → search student → edit interview record → save → logout 完整走一遍。  
如果这个完整流程能正确运行，才说明系统层面没有明显问题。

---

## Regression Testing 回归测试

**Regression testing = 修 bug 后，用之前的测试数据再测一次。**

课件说 regression testing 是在 bugs 被修复后执行，用同一组 test data 测 updated source code，目标是确保修 bug 没有引入更多 bugs。

比如你修了 edit interview record 的保存问题，结果影响了 search 功能。  
Regression testing 就是防这种情况。

一句话记：

**Regression testing 检查“修了旧 bug 后，有没有弄坏旧功能”。**

## V & V
– Verification
- Check if the system meets the specification. 
- Are we building the system properly (right procedure)?
– Validation 
- Check if the system meets users’ requirements (user’s expectation). 
- Are we building the proper system (right system)?



# White-Box Testing
- Statement testing
  -Every statement must be executed （运行）at least once
- Branch testing
  -Every branch must be executed at least once
- Path testing
  -Every path must be executed at least once
# Configuration Management
## Configuration management activities
- Planning
- Change Management
- Version control
- System building
![system-building.png](../../../Resources/Software%20Engineering/Images/system-building.png)
