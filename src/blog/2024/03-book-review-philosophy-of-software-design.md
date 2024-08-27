---
tags: [post]
layout: bloglayout.html
title: 'Book Review: A Philosophy of Software Design'
description: ok
date: 2024-08-26
---

<img src="/public/2024/03/a-philosophy-of-software-design-cover.jpeg"></img>

I discovered this book from a [Tweet from Antirez's](https://twitter.com/antirez/status/1727706640147738998).
This is not to be taken lightly as Redis was sometimes regarded as some of the best codebases available in public.

I recommend this book to software engineers who care about the quality of the code and strive to design better software.

I wish I had come to read this book earlier in my career as I find it more practical and influential than any of the blogs and other books I had read back then.

The learnings of this books is not tied to any technology or framework or tech stack. It gives practical fundamentals about software design and understanding of complexity.

For this article, I will select few topics that I found most interesting, and share some of my experiences in regards.

Let's first start with a little story that I think all software developers are familiar with:

* We start a brand new project. We set it up with the latest technology and version of the libraries. We are all happy, know the entire codebase, get something working very quickly.
* After a while, bugs starts to appear, and there are new requirements that we did not originally anticipate. Once straighforward requirements, now we need to handle edge cases and thinkg about technical tradeoff we need to make.
* Time goes on, and at some point we feel things have gotten slower to release, we don't undertand some parts of the codebase and need to re-read it multiple times. We feel the urge to refactor or rewrite some parts of the code however a major refactor or rewrite is a major investment and its payoff is not guaranteed.
* This whole proccess is accellerated if there are multiple developers working on the project.
* We say that the codebase has become complex.

I have experienced this lifecycle again and again in basically all software project I've worked with.
It is a bit frustrating that software project needs to end up like this. But with enough experience we can make more educated decisions on how to handle it.
* First is to gain an understanding about the design proccess. I will go more in detail in another article. (is the other book that Antirez reocmmended)
* Another thing we can do is to better understand what complexity is and what causes it. This is exactly what this book is about.

## It’s All About Complexity (Chapter 1)

> Complexity is anything related to the structure of a software system that makes it hard to understand and modify the system

The author gives us a good definition. It becomes more useful as the author breaks up complexity into 3 symptoms and 2 causes.

The 3 symptoms of complexity:
* Change amplification
* Cognitive load
* Unknown unknowns

The 2 causes of complexity:
* Dependency
* Obscurity

The relieving thing is that by focusing only on those 2 causes and 3 symptoms we can do a lot to reduce complexity. The author refers to these concepts througout the whole book.

### Change amplification

> A seemingly simple change requires code modifications in many different places

If in order to complete a task you need to change in 1 place vs changing in 5 places, the answer is obvious. However, do we take this into consideration when designing our software? How to design such a system with all the constraints we have is not obvious.

I'll share an extreme example, but I also think how most of software is built in todays' terms. Let's say I want to collect one more datapoint from users. Below are the places whre I would need to introduce the change:
* update frontend code
* update API interface and spec
* update backend code in controller, service, DAO
* run migration to update database column
* update data pipeline for business intelligence
* finally update internal dashboard to show the new field.

However this is not the only way to do it. It is possible to build a system where you have information on where to collect in one configuration, and all you need to do is to update this configuration.

If adding fields is expected in this domain, I think definitively you should be designing for the second case.

### Cognitive load

> how much a developer needs to know in order to complete a task

I like to think cognitive load as the RAM of our brain, it is fast memory but limited in capacity. If we want to add more to it, we need to remove some old memory from it. It cannot grow indefinitively.

For me personally, I try to load a lot of stuff into my cognitive load to work on the hard problems. Sometimes it becomes too much, and I have just shut down all the context, and then restart over again.

Another analogy in the age is LLMs is the context window. All LLMs have a limited context window, and shorter prompts usually performs better and more concise instructions.

### Unknown unknowns

> it is not obvious which pieces of code must be modified to complete a task, or what information a developer must have to carry out the task successfully

We all have been thorugh some experiences. We were working on a task but could not figure it out and when we ask the senior engineer he says it is because of bala bla bal and our reactions is "how could I ever have known that?". Well, the issue is we needed to ask someone to figure it out. Preventing the unknown unknown is so that any engineer can figure it out by themself. Documention comes helpful here.

### Dependency

> a given piece of code cannot be understood and modified in isolation; the code relates in some way to other code, and the other code must be considered and/or modified if the given code is changed. Dependencies lead to change amplification and a high cognitive load

Dependency is everywhere, however it is not for free. So, when we add a dependency we need to consider if the benefits outweight the cost, and if there are simpler alternatives to adding a dependency.

### Obscurity

> occurs when important information is not obvious. Obscurity creates unknown unknowns, and also contributes to cognitive load

We want to codebase to be able to explain itself, and if necessary have documentation to do so.

Once we have understood those concepts, we can try apply them. When designing software and writing code, we can be more concious of these 3 symptoms and 2 causes, and strive to make decisions that minimize them

## Interface, information hiding, deep modules

Let's summarize the what is an interface and what is an implementation.

* For a Web API, the API doc is the interface (for example Open API doc).
* The implemetnation is the the backend code. API documentation is part of the interface.
* For a function. the Function parameters/arguments and return type is the interface.
* The imlementation is the content of the functions.
Function comments are part of the interface.

> It’s more important for a module to have a simple interface than a simple implementation

To understand this quote, we need to understand the relationship of interface and implemeantion to cognitive load.

When we use a function, we need to 'load' its interface into our cognitive load. But we don't need to 'load' the implementation.
The implementation of the interface can be very complicated. But as long as the interface is simple, we can get all the benefits of the implementation by paying for the simplicity of the interface.

The user of the function should not be needing to know about the implementation. This is the whole point of the interaface. Unless, of course his/her task so to update the implementation itself.
If the user of the function needs to know or read about the details of the implementation, you might be have what the author calls 'information leakage', and you will have a hard time because when you implementation changes, the interface will need to change as well.

> Modules should be deep. General-purpose modules are deeper

Modules should be deep reiterates modules to have simple interfaces and rich implementation.
General purpose modules are better was an interesting concept for me. That is because a general purpose modules can satisfy both the needs of edge cases and common cases. The advantage is that you only need to maintain one implementation to satisfy all use cases.

> Interfaces should be designed to make the most common usage as simple as possible


First implication of this is that you first need to understand you user or how this interface is planned to be used.

Simple case, use case A is used 90% of time, and use case B is used 10% of time. Then we can design this function so that with default parameters, it will satisfy use case A. With an additional optional parameter passed, it will satisfy use case B.


# Commenting the code
> Comments should describe things that are not obvious from the code

This quote says it very well.

I've experienced both extremes of writing comments.
When writing excessive comments, we would write comments on every line of code. This makes it very verbose and giving us doubts on the usefullness of the comments.

When we stop writing comments and don't write any comments, then there will be times when there will be surprises to the reader or the reader will have no option but go ask the code author (who hopefully is still there).

## Chapter 17: Consistency

When reading a codebase or documentation, we expect it to be consistent.

However when writing code or documentation it is a challenge to make everything consistent, it takes a lot of discipline.

The best way to promote consistency I think is to keep things consistent in the first place. A consistent codebase promotes consistency, once inconsistency is introduced, things will just become more inconsistent.

Another way to promote consistency is to document it. For example a documentation for terminology, or style guidelines.

Another thing about consistency that I have experienced is when you're working on a legacy code. When you see something done in a wrong way, I have a big urge to fix it or do it a new way. However, that is probably a bad idea. It is probably better to just stay consistent and do it the same way it was done in the codebase. And in the future to fix all the instances in one go so that it stays consistent.

## Chapter 18: Code should be obvious

This is definitively much easier said than done.
However, if we are able to make the code obvious then it will be pleasant to work with.
My opinion is that for us to write obvious code we need to understand the context of the code.
We need to understand how similar code is written. For example if we are building an API, we need to research and understand what competitor APIs are doing it. The users probably are familiar with some of those APIs.


# Writing vs reading the code

> Complexity is more apparent to readers than writers

> Software should be designed for ease of reading, not ease of writing

This is very important distinction to make. As we're writing the code intuitively we try to make it easiest for us. For example using shorter variable names or trying to make the smallest changes to the code.
However we need to understand that a code is written once in the beginning. But is being read many more times than that in future forever for as long as the code is being worked in. The reader includeds the the writer in the future as he/she will have to read this code again.
So as writing code, we need to be concious of this and try to optimize the code for future readers. The initial investment of writinig the code this way may take more time, but it will pay off dividents in the future as it saves time for readers.

Copying working code from Stack Overflow or ChatGTP and committing to the code base is easy. However taking this code and edit it so that it is easier to read takes work.

# Conclusion

This book has given me useful guidelines and fundamentals on how to think about complexity. It has also shared many techniques and things to look out for which can reduce complexity.

If you found those concepts interesting, you should go read the entire book, and try to put those concepts in real life.
