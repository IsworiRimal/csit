---
draft: false

author: "TUIOST"

objectives: "Describe need and role of operating system., Understand OS components such a scheduler, memory manager, file system handlers and I/O device managers., Analyze and criticize techniques used in OS components, Demonstrate and simulate algorithms used in OS components, Identify algorithms and techniques used in different components of Linux"

description: "This course includes the basic concepts of operating system components. It consists of process management, deadlocks and process synchronization, memory management techniques, File system implementation, and I/O device management principles. It also includes case study on Linux operating system."

tags: ["Operating System", "OS", "CSIT", "Fourth Semester", "Syllabus", "TU"]
---

### Course Description:

This course includes the basic concepts of operating system components. It consists of process management, deadlocks and process synchronization, memory management techniques, File system implementation, and I/O device management principles. It also includes case study on Linux operating system.

### Course Objectives:

- Describe need and role of operating system.
- Understand OS components such a scheduler, memory manager, file system handlers and I/O device managers.
- Analyze and criticize techniques used in OS components
- Demonstrate and simulate algorithms used in OS components
- Identify algorithms and techniques used in different components of Linux

<hr>

### Course Contents

#### Unit 1: Operating System Overview (4 Hrs.)

- **1.1 Introduction:** Definition, Two views of operating system, Evolution/History of operating system, Types of OS (Mainframe, Server, Multiprocessor, PC, Real-Time, Embedded, Smart Card Operating Systems), Operating System Structures
- **1.2 System Calls:** Definition, Handling System Calls, System calls for Process, File, and Directory Management, System Programs, The Shell, Open Source Operating Systems

#### Unit 2: Process Management (10 Hrs.)

- **2.1 Introduction:** Process vs Program, Multiprogramming, Process Model, Process States, Process Control Block/Process Table.
- **2.2 Threads:** Definition, Thread vs Process, Thread Usage, User and Kernel Space Threads.
- **2.3 Inter Process Communication:** Definition Race Condition, Critical Section
- **2.4 Implementing Mutual Exclusion:** Mutual Exclusion with Busy Waiting (Disabling Interrupts, Lock Variables, Strict Alteration, Peterson’s Solution, Test and Set Lock), Sleep and Wakeup, Semaphore, Monitors, Message Passing
- **2.5 Classical IPC problems:** Producer Consumer, Sleeping Barber, and Dining Philosopher Problem
- **2.6 Process Scheduling:** Goals, Batch System Scheduling (First-Come First-Served, Shortest Job First, Shortest Remaining Time Next), Interactive System Scheduling (Round-Robin Scheduling, Priority Scheduling, Multiple Queues), Overview of Real Time System Scheduling (_No need to discuss any real time system scheduling algorithm_)

#### Unit 3: Regular Expressions (6 Hrs.)

- 3.1 Introduction: Definition, Deadlock Characterization, Preemptable and Non-Preemptable Resources, Resource Allocation, Necessary Conditions for Deadlock
- 3.2 Handling Deadlocks: Ostrich Algorithm, Deadlock prevention, Safe and Unsafe States, Deadlock Avoidance (Bankers algorithm for Single and Multiple Resource Instances),Deadlock Detection (For Single and Multiple Resource Instances), Recovery From Deadlock (Through Preemption and Rollback)

#### Unit 4: Memory Management (8 Hrs.)

- 4.1 Introduction: Monoprogramming vs Multi- programming, Modelling Multi-programming, Multiprogramming with fixed and variable partitions, Relocation and Protection.
- 4.2 Space Management: Fragmentation and Compaction, Memory management (Bitmaps & Linked-list), Memory Allocation Strategies
- 4.3 Virtual Memory: Paging, Page Table, Page Table Structure, Pages and Frames, Handling Page Faults, TLB’s
- 4.4 Page Replacement Algorithms: Hit Rate and Miss Rate, Concept of Locality of Reference, FIFO, Belady’s Anomaly, Second Chance, LRU, Optimal, LFU, Clock, WS-Clock.
- 4.5 Segmentation: Why Segmentation, Drawbacks of Segmentation, Segmentation with Paging(MULTICS)

#### Unit 5: File Management (6 Hrs.)

- 5.1 File Overview: File Naming, File Structure, File Types, File Access, File Attributes, File
  Operations, Single Level, Two Level and Hierarchical Directory Systems, File System Layout.
- 5.2 Implementing Files: Contiguous allocation, Linked List Allocation, Linked List Allocation using Table in Memory/ File Allocation Table, Inodes.
- 5.3 Directory: Directory Operations, Path Names, Directory Implementation, Shared Files
- 5.4 Free Space Management: Bitmaps, Linked List

#### Unit 6: Device Management (6 Hrs.)

- 6.1 Introduction: Classification of IO devices, Controllers, Memory Mapped IO, DMA Operation, Interrupts
- 6.2 IO Handling: Goals of IO Software, Handling IO(Programmed IO, Interrupt Driven IO, IO using DMA), IO Software Layers (Interrupt Handlers, Device Drivers)
- 6.3 Disk Management: Disk Structure, Disk Scheduling (FCFS, SSTF, SCAN, CSCAN, LOOK, CLOOK), Disk Formatting (Cylinder Skew, Interleaving, Error handling), RAID

#### Unit 7: Linux Case Study (5 Hrs.)

- 7.1 History, Kernel Modules, Process Management, Scheduling, Inter-process Communication, Memory Management, File System Management Approaches, Device Management Approaches.

<hr>

### Laboratory Work :

The laboratory work includes solving problems in operating system. The lab work should include;

1. Demonstration of basic Linux Commands
2. Process creation and termination, thread creation and termination
3. Simulation of IPC techniques
4. Simulation process Scheduling algorithms
5. Simulation of deadlock avoidance and deadlock detection algorithms
6. Simulation of page replacement algorithms
7. Simulation of File allocation techniques
8. Simulate free space management techniques
9. Simulation of disk scheduling algorithms

<hr>

### Text Books:

1. Modern Operating Systems: Andrew S. Tanenbaum, PH1 Publication, Third edition, 2008

### Reference Books:

1. Abraham Silberschatz, Peter Baer Galvin and Greg Gagne, “Operating System Concepts”, John Wiley & Sons (ASIA) Pvt. Ltd, Seventh edition, 2005
2. Harvey M. Deitel, Paul J. Deitel, and David R. Choffnes, “Operating Systems, Prentice Hall, Third edition, 2003.
