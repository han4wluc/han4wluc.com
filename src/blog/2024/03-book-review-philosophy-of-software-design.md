---
tags: [post]
layout: bloglayout.html
title: 'Book Review: A Philosophy of Software Design'
description: ok
date: 2024-09-02
---

<img src="/public/2024/03/a-philosophy-of-software-design-cover.jpeg"></img>

I discovered this book from a [Tweet from Antirez](https://twitter.com/antirez/status/1727706640147738998). Redis is regarded as some of the best codebases available out there, so his opinion was not to be taken lightly.

I wish I had come to read this book earlier in my career as I find it more practical than then articles and other books I had read back then. I recommend this book for people who care and strive to improve the quality of their code.

The learnings of this books is not tied to any technology or framework or tech stack. It teaches about fundamentals of complexity in regards to software.

For this article, I will select few concepts that I found most interesting, and share some of my experiences and thoughts. The content unless quoted is my opinion, not the author's writing.

Let's first start with a little story that I think all software developers are familiar with:

* We start a brand new project and set it up with the latest technology and version of the libraries. We are all happy, know the entire codebase, we can get something working very quickly.
* After a while, bugs starts to appear, and there are new requirements that we did not originally anticipate. We now need to handle edge cases and think about technical tradeoffs.
* Time goes on, and at some point we feel things have gotten slower to release, we don't undertand some parts of the codebase and need to re-read it multiple times. We feel the urge to refactor or rewrite some parts of the code but a major refactor or rewrite is a big investment and its payoff is not guaranteed.
* This whole proccess is accellerated if there are multiple developers working on the codebase.
* We say that the codebase has become complex.

I have experienced this lifecycle again and again in basically all software project I've worked with.
It is a bit frustrating that software projects needs to end up like this. But with enough experience we can make more educated decisions on how to handle it.
* First is to gain an understanding about the design proccess. I will go more in detail in another article. (is the other book that Antirez reocmmended)
* Another thing we can do is to understand what complexity is and what causes it. This is exactly what this book is about.

### It’s All About Complexity (Chapter 1)

> Complexity is anything related to the structure of a software system that makes it hard to understand and modify the system

The author gives us a good definition. It becomes more useful as the author breaks up complexity into 3 symptoms and 2 causes.

The 3 symptoms of complexity:
* Change amplification
* Cognitive load
* Unknown unknowns

The 2 causes of complexity:
* Dependency
* Obscurity

Those concepts itself are actually pretty straighforward. The author refers to those concepts througout the book.

### Symptom 1: Change amplification

> A seemingly simple change requires code modifications in many different places

This is straighforward. If you need to make changes to more places, the task will be harder than where you only need to make changes in a fewer places.

### Symptom 2: Cognitive load

> how much a developer needs to know in order to complete a task

I like to think cognitive load as the RAM of our brain, it is fast memory but limited in capacity. If we want to add more to it, we need to remove some old memory. It cannot grow indefinitively.

For me personally, I have a tendency to load a lot of information into my cognitive load to work on the hard problems. Sometimes it becomes too much, and I have just shut down all the context, and then restart over again. Tasks that require more cognitive load are more tiring to perform.

Another analogy in today's age of LLMs is the context window. All LLMs have a limited context window, and shorter prompts with concise instructions usually performs better.

### Symptom 3: Unknown unknowns

> it is not obvious which pieces of code must be modified to complete a task, or what information a developer must have to carry out the task successfully

This is the symptom that the author puts most emphasis on.

In an ideal world, when a developers starts working on a task, he/she knows already what needs to be done and starts the implementation. This is a world without unknown uknowns.

In the real world, we spend a lot of time in the beginning to figure out what needs to be done, often having to read a lot of documentation or the codebase and researching. In fact, this often takes much more time than the actual implementation.

We need to think about how do we make the software so that we can as much as possible approach the ideal world scenario.


### Cause 1: Dependency

> A given piece of code cannot be understood and modified in isolation; the code relates in some way to other code, and the other code must be considered and/or modified if the given code is changed. Dependencies lead to change amplification and a high cognitive load

Adding dependencies is necessary in software. However dependencies are not free, they come with additional complexity.

We need to think about:

* How to design interfaces so that we add least amount of complexity from the dependency.
* What are the benefits of adding the dependency. Is the tradeoff worth it?

The section below about interfaces will go in more detail on how to achieve this.


### Cause 2: Obscurity

> occurs when important information is not obvious. Obscurity creates unknown unknowns, and also contributes to cognitive load

Opposite of obscurity is obvious code. The author advocates that code should be obvious.

Junior developers are usually focused mostly on creating working code. Senior developers already know how to make working code and are more concerned on how to make the code mantainable.

There is no silver bullet on how to do this, the author does share several techniques and practices such as code comments, consistency and optimizing code for reading instead of writing.

### Interface, information hiding, deep modules

Let's summarize the what is an interface and what is an implementation.

**Interface**: a defined way for different components or systems to communicate and interact with each other. It specifies what operations can be performed, but not how those operations are carried out

**Implementation**: the actual code and logic that fulfills the contract defined by the interface. It is the how part, where the operations specified by the interface are actually performed

> It’s more important for a module to have a simple interface than a simple implementation

To understand this quote, we need to understand the relationship of interface and implemeantion to cognitive load.

A bigger or richer interface will increase cognitive load.

A longer or richer implementation does not increase cognitive load.

This is because when using a function/module/API we only need to know about the interface and not about the implementation.

If the implementation is simplier than the interface itself, it may be possible that the dependency is not worth it.


> Modules should be deep. General-purpose modules are deeper

By deep modules, the author refers to modules that have small interface and rich implementation.

General purpose modules are modules that can satisfy both the specific cases and common cases, so we only need to maintain this one interface and implementation.

This is a simplified exmaple:

Instead of having 3 interface like this:
```
insertAtBeginnig(content)
insertAt(position, content)
insertAtEnd(content)
```

It can be written with only one interface:
```
insert(position, content)
```

This one interface can satisfy the specialized cases of inserting in the beginning or in the end as well

> Interfaces should be designed to make the most common usage as simple as possible

We need to first understand the users or how this interface will be used.

If a function has 2 use cases and use case A is used 90% of the time. We should make the default behavior to satisfy use case A and allow case B by specifying additional parameters.


### Code Comments
> Comments should describe things that are not obvious from the code

Below are two extremes of writing comments

* When writing excessive comments, comments can be written on every line of code. This makes it very verbose and giving us doubts on the usefullness of the comments. More comments means more content to maintain.

* No comments at all. The code itself should be self explanatory and that we should not be writing comments explaining the code. The issue is that the reader will need to spend a lot of time to go through the code and that there will always be information that is just lost in the code.

This quote provides such a precise statement for when and for what purpose comments should be written. It solves the shortcoming of both extremes.

### Consistency

When reading a codebase or documentation, we expect it to be consistent.

However when writing code or documentation it is a challenge to make everything consistent, it takes a lot of discipline.

The best way to promote consistency is to keep things consistent in the first place. A consistent codebase promotes consistency, once inconsistency is introduced, things will naturally become more inconsistent. Similar to [broken window effect](https://en.wikipedia.org/wiki/Broken_windows_theory).

Documentation can help with consistency. For example documentation of the terminology or coding style guidelines.

When working on someone else's codebase, the best thing to do is to try remain consistent with the existing codebase. We should resist the urge to change how things are done even if we don't agree with it. If you do want to change something, try changing it all at once so that the end state is a consistent one.

### Writing vs reading code

> Complexity is more apparent to readers than writers

> Software should be designed for ease of reading, not ease of writing

The reader is like the user, the reader is always right. If the reader cannot understand the code, it is not his/her fault, it is because the code is not obvious enough.

Reviewing our own PR is a great way to take the reader's perspective.

The reader does not only mean other people. After we've written the code, we become the reader. We will eventually forget the context of when the code was written.

The code is written only once and that is it. However, it will be read over and over again for the entire lifetime of the codebase.

It will take a higher initial investment to make the code easier to read, but it will pay out dividends throughout the lifetime of the codebase. If this code is for a hackathon or proof of concept, it does not matter so much, but for a long term codebase we need to be more conscious of such investment. 

# Conclusion

I like this book for the topic of why software becomes more complex and what we can do about it. It does not only share the theory but the book is filled with examples and references so that a lot of it feels practical.

Many of these concepts are not entirely new for an experienced software engineer, but I could have never written these concepts down and explain them so explicitly as the author. By writing these down, it lets us become more concious about them when we're writing software.

By mastering the complexity of software, I hope to be able to create more ambitious hight quality products that can stand the test of time.

If you found those concepts interesting, definitively do go read the actual book, and try put those learnings when designing and writing software.
