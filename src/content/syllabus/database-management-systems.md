---
draft: false

author: "TUIOST"

objectives: "The main objective of this course is to introduce the basic concepts of database, data modeling techniques using entity relationship diagram, relational algebra and calculus, basic and advanced features SQL, normalization, transaction processing, concurrency control, and recovery techniques."

description: "The course covers the basic concepts of databases, database system  concepts and architecture, data modeling using ER diagram, relational model, SQL, relational  algebra and calculus, normalization, transaction processing, concurrency control, and  database recovery."

tags: ["Database", "DBMS", "CSIT", "Fourth Semester", "Syllabus", "TU"]
---

### Course Description:

The course covers the basic concepts of databases, database system concepts and architecture, data modeling using ER diagram, relational model, SQL, relational algebra and calculus, normalization, transaction processing, concurrency control, and database recovery.

### Course Objectives:

The main objective of this course is to introduce the basic concepts of database, data modeling techniques using entity relationship diagram, relational algebra and calculus, basic and advanced features SQL, normalization, transaction processing, concurrency control, and recovery techniques.

<hr>

### Course Contents

#### Unit 1: Database and Database Users (2 Hrs.)

- **Introduction**

  Traditional file processing system; Definition of database and database management system with example

- **Characteristics of the Database Approach**

  Self-describing nature of a database system; Insulation between programs and data, and data abstraction; Support of multiple views of the data; Sharing of data and multiuser transaction processing

- **Actors on the Scene**

  Database administrators; Database designers; End users; System Analysts and Application Programmers

- **Workers behind the Scene**

  DBMS system designers and implementers; Tool developers; Operators and maintenance personnel

- **Advantages of Using the DBMS Approach**

  Controlling redundancy; Restricting unauthorized access; Providing persistent storage; Providing storage structures and search techniques for efficient query processing; Providing backup and recovery; providing multiple user interfaces; Enforcing integrity constraints; Reduced application development time; Flexibility; Availability of up- to-date information; Economies of scale

#### Unit 2: Database System – Concepts and Architecture (3 Hrs.)

- **Data Models, Schemas, and Instances**

  Definition of data abstraction and data model; Categories of data models (high level, low level, and representational data models) – Introduction to entity-relationship model, relational data model, network data model, hierarchical model, network model, object data model, and self-describing data models; Concept of schema and instance

- **Three-Schema Architecture and Data Independence**

  Concept of three-schema architecture; Logical and physical data independence

- **Database Languages and Interfaces**

  Concept of DDL, SDL, VDL, DML, procedural and non-procedural languages; Concept of interfaces

- **The Database System Environment**

  Concept of database system environment

- **Centralized and Client/Server Architectures for DBMSs**

  Basics of centralized and client/server architectures.

- **Classification of Database Management Systems**

  Classification based on data models, number of users, number of sites, cost and type of access path.

#### Unit 3: Data Modelling Using the Entity-Relational Model (6 Hrs.)

- **Using High-Level Conceptual Data Models for Database Design**

  Concept of conceptual design

- **Entity Types, Entity Sets, Attributes, and Keys; Relationship Types, Relationship Sets, Roles, and Structural Constraints**

  Concept of entity types, entity sets, attributes, and keys; Concept of relationship types and relationship sets, roles and constraints.

- **Weak Entity Types**

  Concept of weak entity types and partial keys

- **ER Diagrams, Naming Conventions, and Design Issues**

  Drawing ER diagrams using ER notations, naming conventions and design issues

- **Relationship Types of Degree Higher Than Two**

  Concept of higher degree relationships

- **Subclasses, Superclasses, and Inheritance**

  Concept of enhanced ER (EER) model, superclasses, subclasses and subclasses

- **Specialization and Generalization**

  Concept of specialization and generalization

- **Constraints and Characteristics of Specialization and Generalization**

  Different constraints and characteristics of specialization and generalization

#### Unit 4: The Relational Data Model and Relational Database Constraints (3 Hrs.)

- **Relational Model Concepts**

  Concept of domain, attributes, tuples, and relations; Characteristics of relations; Relational model notation

- **Relational Model Constraints and Relational Database**

  Different categories of constraints; Domain constraints; Key and NULL values constraints;

- **Schemas**

  Relational databases and relational database schemas; Entity integrity, referential integrity, and foreign key

- **Update Operations, Transactions, and Dealing with Constraint Violations**

  Concept of insert, delete, and update operations; Concept of transactions

#### Unit 5: The Relational Algebra and Relational Calculus (5 Hrs.)

- **Unary Relational Operations: SELECT and PROJECT**

  Concept and example of SELECT and PROJECT operations; Sequences of operations; RENAME operation

- **Relational Algebra Operations from Set Theory**

  Concept and example of UNION, INTERSECTION, MINUS, and CARTESIAN PRODUCT operations

- **Binary Relational Operations: JOIN and DIVISION**

  Concept and example of JOIN operation and its variations; Concept and example of DIVISION operation

- **Additional Relational Operations**

  Concept of generalized projection, aggregate functions, OUTER JOIN operations, and OUTER UNION operation

- **The Tuple Relational Calculus**

  Introduction to tuple relational calculus with examples

- **The Domain Relational Calculus**

  Introduction to domain relational calculus with examples

#### Unit 6: SQL (8 Hrs.)

- **Data Definition and Data Types**

  CREATE TABLE command; Attribute data types and domains; ALTER and DROP commands

- **Specifying Constraints**

  Attribute constraints and attribute defaults; Key and referential integrity constraints

- **Basic Retrieval Queries**

  SELECT-FROM-WHERE structure; Ambiguous attribute names, aliasing, renaming, and tuple variables; Unspecified WHERE clause and use of asterisk (\*); Pattern matching and arithmetic operators

- **Complex Retrieval Queries**

  Comparisons involving NULL; Nested queries

- **INSERT, DELETE, and UPDATE Statements**

  Concept and example of INSERT, DELETE, and UPDATE commands

- **Views**

  Concept of views; CREATE VIEW command

#### Unit 7: Relational Database Design (7 Hrs.)

- **Relational Database Design Using ER-to-Relational Mapping**

  Converting ER / EER models to relations with examples

- **Informal Design Guidelines for Relational Schemas**

  Imparting clear semantics to attributes in relations; Redundant information in tuples and update anomalies; NULL values in tuples; Generation of spurious tuples

- **Functional Dependencies**

  Definition and concept of functional dependencies with example

- **Normal Forms Based on Primary Keys**

  Concept of normalization; Practical use of normal forms; Keys and attributes participating in keys; Concept of first, second, and third forms with example

- **General Definitions of Second and Third Normal Forms**

  General definitions of second and third normal forms

- **Boyce-Codd Normal Form**

  Concept and example of boyce-codd normal form

- **Multivalued Dependency and Fourth Normal Form**

  Definition and concept of multivalued dependencies with example; Concept of fourth normal form

- **Properties of Relational Decomposition**

  Dependency preservation property and nonadditive (lossless) join property

#### Unit 8: Introduction to Transaction Processing Concepts and Theory (4 Hrs.)

- **Introduction to Transaction Processing**

  Single-user versus multiuser system; Transactions, Database items, Read and write operations, and DBMS buffers; Why do we need concurrency control? Why do we need recovery?

- **Transaction and System Concepts**

  Transaction states and operations; The system log; Commit point; Buffer replacement policies

- **Desirable Properties of Transactions**

  Desirable properties of transactions

- **Characterizing Schedules Based on Recoverability**

  Concept of schedule; Characterizing schedules based on recoverability

- **Characterizing Schedules Based on Serializability**

  Conflict serializability; Testing for conflict serializability; View equivalent and view seializability; How serializability is used for concurrency control

#### Unit 9: Concurrency Control Techniques (4 Hrs.)

- **Two-Phase Locking Technique**

  Concept of two-phase locking; Types of locks and system lock tables; Lock conversion; Guaranteeing serializability by two-phase locking; Basic, conservative, strict, and rigorous two-phase locking; Dealing with deadlock and starvation

- **Timestamp Ordering**

  Timestamp ordering concurrency control concept; Basic and strict timestamp ordering; Thomas’s Write rule

- **Multiversion Concurrency Control**

  Concept of multiversion concurrency control technique; Multiversion technique based on timestamp ordering; Multiversion locking using certify locks

- **Validation (Optimistic) Techniques and Snapshot Isolation Concurrency Control**

  Concept of validation (optimistic) techniques and snapshot isolation concurrency control

#### Unit 10: Database Recovery Techniques (3 Hrs.)

- **Recovery Concepts**

  Recovery outline and categorization of recovery algorithms; Caching (Buffering) of disk blocks; Write- ahead logging, steal/no-steal, and force/no-force; Checkpoints and fuzzy checkpointing; Transaction rollback and cascading rollback

- **NO-UNDO/REDO Recovery Based on Deferred Update**

  Concept of no-undo/redo recovery based on deferred update

- **Recovery Technique Based on Immediate Update**

  Concept of recovery technique based on immediate update

- **Shadow Paging**

  Concept of Shadow Paging

- **Database Backup and Recovery from Catastrophic Failures**

  Concept of database backup and recovery from
  catastrophic failures

<hr>

### Laboratory Work :

The laboratory work includes writing database programs to create and query databases using basic and advanced features of structured query language (SQL) like

- Data definition and data Types
- Specifying constraints (primary key, foreign key, referential integrity etc.)
- Basic and complex retrieval queries
- Aggregate functions
- INSERT, DELETE, and UPDATE Statements
- Using join and views

<hr>

### Text Books:

1. Fundamentals of Database Systems; Seventh Edition; Ramez Elmasri, Shamkant B. Navathe; Pearson Education
2. Database System Concepts; Sixth Edition; Avi Silberschatz, Henry F Korth, S Sudarshan; McGraw-Hill

### Reference Books:

1. Database Management Systems; Third Edition; Raghu Ramakrishnan, Johannes Gehrke; McGraw-Hill
2. A First Course in Database Systems; Jaffrey D. Ullman, Jennifer Widom; Third Edition; Pearson Education Limited
