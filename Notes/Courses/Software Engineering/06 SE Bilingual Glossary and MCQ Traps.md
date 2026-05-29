# SE Bilingual Glossary and MCQ Traps

Purpose: prepare for multiple-choice questions by making concept boundaries sharp.

## Requirements

Functional requirement: 系统应该做什么。Example: "The system shall allow customers to transfer money."

Non-functional requirement: 系统应满足的质量/约束。Example: performance, reliability, security.

Trap:

- "The system shall respond within 2 seconds" is non-functional, not functional.

## System Models

Context model: shows the system boundary and external entities.

Use case diagram: shows actors and user-visible services.

State transition diagram: shows states and event-triggered transitions.

Data flow diagram: shows how data moves and is transformed.

Trap:

- DFD does not show time order as its main purpose. Sequence/activity/state diagrams are better for behavior over time.

## OO Basics

Object: an instance/entity with state and behavior.

Class: a template/type describing common attributes and operations.

Abstraction: focus on essential features and hide irrelevant details.

Encapsulation: bundle data and operations; hide internal representation.

Inheritance: reuse/extend behavior through superclass-subclass relationship.

Polymorphism: same operation/message can behave differently for different object types.

Trap:

- Object is not the same as class. Object = instance; class = blueprint.
- Encapsulation is not simply "using classes"; it also implies information hiding.

## UML Relations

Association: general relationship.

Aggregation: weak whole-part relationship.

Composition: strong whole-part relationship; part lifecycle depends on whole.

Generalization: inheritance / is-a relationship.

Multiplicity: how many objects participate in a relationship.

Trap:

- Use inheritance only when "A is a B" is true.
- Composition is stronger than aggregation.

## Architecture

Repository model: components share a central data repository.

Client-server model: clients request services from servers.

Layered model: system organized into layers, each layer uses services of lower layers.

Centralized control: one component controls execution.

Event-based control: components respond to events.

Trap:

- Layered model is good for separation, but may add overhead.
- Repository model makes data sharing easy, but central data schema can become a dependency bottleneck.

## Design Principles

Cohesion: how strongly responsibilities inside a module belong together. High cohesion is good.

Coupling: how strongly modules depend on each other. Low coupling is good.

Information hiding: hide design decisions likely to change.

Modularity: divide system into well-defined modules.

Refactoring: improve internal structure without changing external behavior.

Trap:

- High cohesion + low coupling is desirable.
- Refactoring should not change observable behavior.

## Structured Design

DFD: data-flow diagram, output of structured analysis.

Structured tree: call tree/module hierarchy, output of structured design.

Transform center: central process that converts input data into output data.

First-level factoring: split into input, transform, output branches.

Second-level factoring: further decompose branches into lower-level modules.

Trap:

- DFD is not the final program structure; structured tree is closer to implementation structure.

## Testing

Black-box testing: specification-based testing.

White-box testing: structure/code-based testing.

Equivalence-class testing: partition input domain into classes.

Boundary value testing: test values at/near boundaries.

Statement testing: every statement executed at least once.

Branch testing: every branch outcome executed at least once.

Path testing: independent paths executed.

Regression testing: test again after changes.

Trap:

- Boundary value testing is black-box.
- Statement coverage does not guarantee branch coverage.
- Branch coverage does not guarantee path coverage.
- Testing finds defects; it does not prove absence of all defects.

## Configuration Management

Version control: manage different versions of files/components.

Change management: control requested changes.

Release management: prepare and manage released versions.

System building: assemble source/components into executable system.

CASE tools: Computer-Aided Software Engineering tools.

Trap:

- Version control is only one part of configuration management.

## Cost Estimation

LOC/SLOC/KLOC: code-size measures.

Function points: functionality-based size measure.

Object points: UI/report/component-based size measure.

Person-month: effort unit.

COCOMO II: algorithmic cost estimation model family.

Price to win: price based on winning bid, not necessarily true cost.

Trap:

- LOC is language-dependent.
- Adding people late does not linearly reduce calendar time.
- Price to win can under-estimate actual effort.

