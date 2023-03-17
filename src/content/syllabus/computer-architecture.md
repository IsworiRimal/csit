---
draft: false
author: "TUIOST"
description: "This course includes concepts of instruction set architecture, organization or micro-architecture, and system architecture. The instruction set architecture includes programmer’s abstraction of computer. The micro-architecture consist internal representation of computers at register and functional unit level. The system architecture includes organization of computers at the cache and bus level."
objectives: "Discuss representation of data and algorithms used to perform operations on data,Demonstrate different operations in terms of Micro-operations, Explain architecture of basic computer and micro-programmed control unit, Understand and memory and I/O organization of a typical computer system, Demonstrate benefits of pipelined systems"
tags:
  ["CA", "Computer Architecture", "CSIT", "Third Semester", "Syllabus", "TU"]
---

### Course Description:

This course includes concepts of instruction set architecture, organization or micro-architecture, and system architecture. The instruction set architecture includes programmer’s abstraction of computer. The micro-architecture consist internal representation of computers at register and functional unit level. The system architecture includes organization of computers at the cache and bus level.

### Course Objectives:

- Discuss representation of data and algorithms used to perform operations on data
- Demonstrate different operations in terms of Micro-operations
- Explain architecture of basic computer and micro-programmed control unit
- Understand and memory and I/O organization of a typical computer system
- Demonstrate benefits of pipelined systems

<hr>

### Course Contents:

#### Unit 1: Data Representation (4 Hrs.)

- 1.1. Data Representation: Binary Representation, BCD, Alphanumeric Representation, Complements, Fixed Point representation, Representing Negative Numbers, Floating Point Representation, Arithmetic with Complements, Overflow, Detecting Overflow
- 1.2. Other Binary Codes: Gray Code, self Complementing Code, Weighted Code, Excess-3 Code, EBCDIC
- 1.3. Error Detection Codes: Parity Bit, Odd Parity, Even parity, Parity Generator & Checker

#### Unit 2: Register Transfer and Microoperations (5 Hrs.)

- 2.1. Microoperation, Register Transfer Language, Register Transfer, Control Function
- 2.2. Arithmetic Microoperations: Binary Adder, Binary Adder-subtractor, Binary Incrementer, Arithmetic Circuit
- 2.3. Logic Microoperations, Hardware Implementation, Applications of Logic Microoperations.
- 2.4. Shift Microoperations: Logical Shift, Circular shift, Arithmetic Shift, Hardware Implementation of Shifter.

#### Unit 3: Basic Computer Organization and Design (8 Hrs.)

- 3.1. Instruction Code, Operation Code, Stored Program Concept
- 3.2. Registers and memory of Basic Computer, Common Bus System for Basic Computer.
- 3.3. Instruction Format, Instruction Set Completeness, Control Unit of Basic Computer, Control Timing Signals
- 3.4. Instruction Cycle of Basic computer, Determining Type of Instruction, Memory Reference Instructions, Input-Output Instructions, Program Interrupt & Interrupt Cycle.
- 3.5. Description and Flowchart of Basic Computer

#### Unit 4: Microprogrammed Control (4 Hrs.)

- 4.1. Control Word, Microprogram, Control Memory, Control Address Register, Sequencer
- 4.2. Address Sequencing, Conditional Branch, Mapping of Instructions, Subroutines, Microinstruction Format, Symbolic Microinstructions
- 4.3. Design of Control Unit

#### Unit 5: Central Processing Unit (4 Hrs.)

- 5.1. Major Components of CPU, CPU Organization
- 5.2. Instruction Formats, Addressing Modes, Data Transfer and manipulation, Program Control, Subroutine Call and Return, Types of Interrupt
- 5.3. RISC vs CISC, Pros and Cons of RISC and CISC, Overlapped Register Windows

#### Unit 6: Pipelining (6 Hrs.)

- 6.1. Parallel Processing, Multiple Functional Units, Flynn’s Classification
- 6.2. Pipelining: Concept and Demonstration with Example, Speedup Equation, Floating Point addition and Subtraction with Pipelining
- 6.3. Instruction Level Pipelining: Instruction Cycle, Three & Four-Segment Instruction Pipeline, Pipeline Conflicts and Solutions
- 6.4. Vector Processing, Applications, Vector Operations, Matrix Multiplication

#### Unit 7: Computer Arithmetic (6 Hrs.)

- 7.1. Addition and Subtraction with Signed Magnitude Data, Addition and Subtraction with Signed 2’s Complement Data
- 7.2. Multiplication of Signed Magnitude Data, Booth Multiplication, Division of Signed magnitude Data, Divide Overflow

#### Unit 8: Input Output Organization (4 Hrs.)

- 8.1. Input-Output Interface: I/O Bus and Interface Modules, I/O vs. Memory Bus, Isolated vs. Memory-Mapped I/O
- 8.2. Asynchronous Data Transfer: Strobe, Handshaking
- 8.3. Modes of Transfer: Programmed I/O, Interrupt-Initiated I/O, Direct memory Access
- 8.4. Priority Interrupt: Polling, Daisy-Chaining, Parallel Priority Interrupt
- 8.5. Direct Memory Access, Input-Output Processor, DMA vs. IOP

#### Unit 9: Memory Organization (4 Hrs.)

- 9.1 Memory Hierarchy, Main Memory, RAM and ROM Chips, Memory address Map, Memory Connection to CPU, Auxiliary Memory (magnetic Disk, Magnetic Tape)
- 9.2 Associative Memory: Hardware Organization, Match Logic, Read Operation, Write Operation
- 9.3 Cache Memory: Locality of Reference, Hit & Miss Ratio, Mapping, Write Policies

<hr>

### Laboratory Works:

The laboratory work includes implementing and simulating the algorithms, studied in the course, by using high level languages like C or VHDL. The laboratory works should include at least following concepts;

- Simulate features like overflow, data representation by using VHDL
- Simulate design of different units by using VHDL
- Simulate pipelining by using VHDL
- Implement algorithms for computer arithmetic using high level language like C or C++

<hr>

### Text Books:

1. M. Morris Mano, “Computer System Architecture”, Prentice-Hall of India, Pvt. Ltd., Third edition, 2007

### References Books:

1. William Stallings, “Computer Organization and Architecture”, Prentice-Hall of India, Pvt. Ltd., Seventh edition, 2005.
2. Vincent P. Heuring and Harry F. Jordan, “Computer System Design and Architecture”, Prentice-Hall of India, Pvt. Ltd., Second edition, 2003.
