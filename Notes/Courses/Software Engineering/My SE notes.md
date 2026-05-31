---
tags:
  - course/se
  - se/use-case
  - se/diagram
  - exam/mcq
  - exam/drawing
  - Done-by-me
---


# Include vs Extend vs  inheritance/generalization [[10 Include vs Extend]]

Include:  A (Base case) ---include---> B    必做的公共步骤。`include` 表示“每次执行 A，都一定会执行 B”。B 通常是多个 use case 共享的公共子流程。

Extend:  A (Base use case) <---extend--- B 条件触发的可选行为。Extension use case happens only under some condition.

Ineritance: A（父） <------B（子） 
A is the generalization of B.
B is a specialization of A.
B is a kind of A.
For two use cases A and B, if A the generalization of B, and B is a specialization of A, then they have inheritance relationships.
子 use case 是父 use case 的一种特殊类型。

![[use-case-diagram-relationships.png]]


# State Machine Model
![[state-transition-machine.png.png]]

Data-Flow Model
![[notation.png.png]]

# Features of A Class
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
Develop the software which is a collection of objects that incorporate both data structure （数据）and behavior （行为）
## 四个阶段：
- Object-Oriented Analysis (Requirements specification) 
- Object-Oriented Design (Architectural Design)
- Object Design (Detailed Design)
- Object-Oriented Programming (Implementation)

# UML
![[uml.png.png]]

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


![[asspcoatopm-classes.png.png]]
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
![[qualifier.png.png]]

### Inheritance vs Aggregation

Inheritance: **is-a** relationship / 是一种

Aggregation: **has-a / part-of** relationship / 拥有、包含、整体-部分

## Inheritance 继承

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

## Aggregation 聚合

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

| Relationship | Question to ask | Meaning | Mermaid / UML |
|---|---|---|---|
| Inheritance | Is B a kind of A? | B 是 A 的一种 | `A <|-- B` |
| Aggregation | Does A have B? | A 拥有/包含 B | `A o-- B` |

## Quick Rule

Ask:

1. Can I say "B is a A"?
   - Yes -> Inheritance.
2. Can I say "A has B"?
   - Yes -> Aggregation.

Example:

```text
Student is a Person -> inheritance
Class has Students -> aggregation
Library has Books -> aggregation
PPT file is a File -> inheritance
```

## Exam Trap

Do not use inheritance just because two classes are related.

Wrong:

```text
Library <|-- Book
```

This means "Book is a Library", which is false.

Correct:

```text
Library o-- Book
```

This means "Library has Books".

## Aggregation vs Composition

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
