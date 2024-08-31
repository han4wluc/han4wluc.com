---
tags: [post]
layout: bloglayout.html
title: 'Book Review: A Philosophy of Software Design'
description: ok
date: 2024-08-28
---

<img src="/public/2024/03/a-philosophy-of-software-design-cover.jpeg"></img>

I discovered this book from a [Tweet from Antirez's (author of Redis)](https://twitter.com/antirez/status/1727706640147738998).
This is not to be taken lightly as Redis is regarded as some of the best codebases available out there.

I recommend this book to software engineers who care about the quality of the code and strive to design better software.

I wish I had come to read this book earlier in my career as I find it more practical and influential than any of the blogs and other books I had read back then.

The learnings of this books is not tied to any technology or framework or tech stack. It gives practical fundamentals about software design and understanding of complexity.

For this article, I will select few concepts that I found most interesting, and share some of my experiences and thoughts. The content unless quoted is my opinion, not the author's writing.

Let's first start with a little story that I think all software developers are familiar with:

* We start a brand new project and set it up with the latest technology and version of the libraries. We are all happy, know the entire codebase, we can get something working very quickly.
* After a while, bugs starts to appear, and there are new requirements that we did not originally anticipate. We now need to handle edge cases and thinkg about technical tradeoffs we need to make.
* Time goes on, and at some point we feel things have gotten slower to release, we don't undertand some parts of the codebase and need to re-read it multiple times. We feel the urge to refactor or rewrite some parts of the code however a major refactor or rewrite is a major investment and its payoff is not guaranteed.
* This whole proccess is accellerated if there are multiple developers working on the project.
* We say that the codebase has become complex.

I have experienced this lifecycle again and again in basically all software project I've worked with.
It is a bit frustrating that software project needs to end up like this. But with enough experience we can make more educated decisions on how to handle it.
* First is to gain an understanding about the design proccess. I will go more in detail in another article. (is the other book that Antirez reocmmended)
* Another thing we can do is to better understand what complexity is and what causes it. This is exactly what this book is about.

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

The relieving thing is that by focusing only on those 2 causes and understand the 3 symptoms we can do a lot to reduce complexity. Once we have understood those concepts, we can better discuss how each software practice impacts these concepts.

### Symptom 1: Change amplification

> A seemingly simple change requires code modifications in many different places

This is a straighforward concept. If you need to make changes to more places, the task will be harder than where you only need to make changes in a fewer places.

### Symptom 2: Cognitive load

> how much a developer needs to know in order to complete a task

I like to think cognitive load as the RAM of our brain, it is fast memory but limited in capacity. If we want to add more to it, we need to remove some old memory from it. It cannot grow indefinitively.

For me personally, I have a tendency to load a lot of information into my cognitive load to work on the hard problems. Sometimes it becomes too much, and I have just shut down all the context, and then restart over again.

Another analogy in today's age of LLMs is the context window. All LLMs have a limited context window, and shorter prompts usually performs better and more concise instructions.

### Symptom 3: Unknown unknowns

> it is not obvious which pieces of code must be modified to complete a task, or what information a developer must have to carry out the task successfully

In an ideal world, when a developers starts working on a task, he/she knows already what needs to be done and starts the implementation. This is a world without unknown uknowns.

In the real world, we spend a lot of time in the beginning to figure out what needs to be done, often having to read a lot of documentation or the codebase and researching. In fact, this often takes much more time than the actual implementation.

This is the symptom that the author puts most emphasis on.

### Cause 1: Dependency

> a given piece of code cannot be understood and modified in isolation; the code relates in some way to other code, and the other code must be considered and/or modified if the given code is changed. Dependencies lead to change amplification and a high cognitive load

Adding dependencies is necessary in software. However dependencies come with additional complexity.
Below is the logic to be used for adding dependencies:

* If there is no need to add dependency, don't introduce a dependency
* Check if the benefit of adding depdency outweights the additional complexity that comes with the dependency
* If the benefit don't outweight the costs, don't add the dependency.
* Design the interface to be small so to minimize the complexity from the dependency

### Cause 2: Obscurity

> occurs when important information is not obvious. Obscurity creates unknown unknowns, and also contributes to cognitive load

Opposite of obscurity is obvious code.

Junior developers are focused only on creating working code. senior developers already know how to make working code and are more concerned on how to make the code mantainable.

making the code obvious is the best way to make the code maintainable.

It directly relates to the unknown uknown symptom.

There is no silver bullet, but the author does share some suggestions.


### Interface, information hiding, deep modules

Let's summarize the what is an interface and what is an implementation.

* For a Web API
  * The interface is the API specification and documentation (an Open API doc for example).
  * The implemetnation is the the backend code
* For a function
  * The interface is the function parameter types and return type
  * The implementation is the content of the functions, the code that is run when the function is invoked
* For a class
  * The interface is all the public methods and properties
  * The implementation is the actual content of the methods

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


### Code Comments
> Comments should describe things that are not obvious from the code

Below are two extremes of writing comments

* When writing excessive comments, comments can be written on every line of code. This makes it very verbose and giving us doubts on the usefullness of the comments. More comments means more work for the writer and also more content to maintain.

* No comments at all. The code itself should be self explanatory and that we should not be writing comments explaining the code. The issue is that the reader will need to spend a lot of time to go through the code and that there will always be information that is just lost in the code.

This quote provides such a beautiful statement for when and for what purpose comments should be written. It solves the shortcoming of both extremes.

### Consistency

When reading a codebase or documentation, we expect it to be consistent.

However when writing code or documentation it is a challenge to make everything consistent, it takes a lot of discipline.

The best way to promote consistency is to keep things consistent in the first place. A consistent codebase promotes consistency, once inconsistency is introduced, things will naturally become more inconsistent. Similar to broken window effect.

Documentation can help with consistency. For example documentation of the terminology or coding style guidelines.

When working on someone else's codebase, the best thing to do is to follow the existing way of doing things even if you don't agree with them or have a better way. If you don't do so, the code will start to become more inconsistent. If you really want to improve the way things are done in this codebase, you should change all the places at once so that it does not introduce inconsistency.

Consistency is a pre-requisite for implementing any convention over configuration.

### Writing vs reading code

> Complexity is more apparent to readers than writers

> Software should be designed for ease of reading, not ease of writing

The reader is like your user, the reader is always right. If the reader cannot understand the code, it is not his fault, it is because the code is not obvious enough.

Reviewing your own PR is a great way to take the reader's lens.

The reader does not only mean other people. After you've written the code, you yourself become the reader. We will eventually forget the context of when the code was written.

The code is written only once and that is it. However, it will be read over and over again for the entire lifetime of the codebase.

It will take a higher initial investment to make the code easier to read, but it will pay out dividends throughout the lifetime of the codebase. If this code is for a hackathon or proof of concept, it does not matter so much, but for a long term codebase it becomes essential. 

# Conclusion

This book has given me useful guidelines and fundamentals on how to think about complexity. It has also shared many techniques and things to look out for which can reduce complexity.

If you found those concepts interesting, definitively do go read the entire book, and try to put those concepts in real life.
