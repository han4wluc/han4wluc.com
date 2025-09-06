---
tags: [post]
layout: bloglayout.html
title: Reflection on how programming changed over last 2 years
description: A reflection on how programming has comletely transformed in the last 2 years with generative AI technologies such as Github Copilot, Cursor, Claude Code
date: 2025-09-01
---

## Intro

As a software engineer, the programming experience has completely changed over the last 2 years.
In this article, I will put this change into context and share some of my personal experiences.

## Historical context 1950 - 2015

I started programming for real around 2015. But even before I got started, the programming world had been going through big changes since its inception.

* Punch cards - 1940s-1970s
* Assembly - 1949-present
* COBOL/Fortran - 1957/1959
* C/C++ - 1972/1985
* High-level explosion (Java, JavaScript, Python etc...) - 1990s-2000s
* English - vibe coding - 2023 - present

Each programming layer is built on top of the previous layer. C/C++ for example has become the foundation for all the higher level programming languages. Today's AI generated code that is prompted in natural language still produces actual code.

Change is definitely not something new in the world of programming. There has been a gradual trend of moving from lower abstractions to higher level abstractions. Every decade or so there is a new programming paradigm.

## 2015 - 2023

From when I started programming, I would say there were some main trends that I rode: expansion of web and web frameworks, mobile, and cloud. VSCode was also a big one.

JavaScript kept changing. I remember in 2016 or so, we were still writing Node.js with callbacks. We then switched to using Babel to get the new features until ES2015 many years later was natively supported by the Node.js runtime, and later even browsers, until TypeScript became mainstream.

There were so many frontend frameworks coming out around 2015, until people started to stick with React, and then Vue.js became a good alternative.

AWS and Docker led the cloud transformation. Everyone started doing microservices, and eventually Kubernetes. 

On the mobile side, things changed all the time - new versions of Android and iOS, Java to Kotlin, Objective-C to Swift, React Native, Flutter, etc.

There was also VS Code, which became a dominant IDE. I was previously using Sublime Text.

I would not say all those changes were necessarily good or mandatory, but there have definitely been changes and you needed to keep learning new things.

Looking at it retrospectively, not all of the new technologies were necessary or fit for my use cases.

Microservices for example had a backlash, it may have made sense for big teams, but not so much for smaller teams. Same with Kubernetes, it is an overkill for smaller teams.

Today I don't use TypeScript anymore and I don't use VSCode anymore. But I had to use and learn all those things before I could say that I don't need them or that there is a better alternative that is a better fit for me.

## 2023 - 2025

From 2023 on, the programming experience changes were very different. Summarized to those:

* ChatGPT
* GitHub Copilot
* Cursor
* Claude

Looking at the changes in these 2 years, the previous decade felt like nothing changed much.

## ChatGPT and other LLMs

ChatGPT changed the world. For programmers, [this graph](https://blog.pragmaticengineer.com/content/images/size/w1000/2025/05/image-6.png) of StackOverflow traffic summarizes exactly this change for software engineers.

Google + StackOverflow used to be a core skill that I had, and something that would put me at an advantage over other programmers.

Because of ChatGPT that is so good at information retrieval and explaining things, programmers started to use it more and more instead of Google or StackOverflow. I rarely end up in StackOverflow nowadays.

I was a pretty late adopter of ChatGPT. It took me a while to get used to it. But today, I ask LLMs so many questions and you can do so much more than Google + StackOverflow. 

Some examples of how I use LLMs:

* I have a use case and looking for a library to solve the problem. I ask the LLM which is the best tool for this use case.
* Explaining things I don't understand or don't know. Can ask follow-up questions.
* Help me come up with the best name for variables, library etc...
* Brainstorm all kinds of ideas
* Get feedback on idea or solution that I have to improve it

## GitHub Copilot

For GitHub Copilot, here I mean the autocompletion.
In ChatGPT you could copy paste code, but it was not that convenient. Now AI was directly in your IDE and did something you could not have done with the ChatGPT interface.

[This podcast](https://www.produxlabs.com/product-thinking-blog/episode-223-ai-github-copilot) talks about the story of how GitHub Copilot came to life.

It is really remarkable how Copilot came to be, but roughly I see it as:

* Satya Nadella nominated as CEO of Microsoft in 2014
  * He introduces Growth Mindset to whole company
  * Embraces Open Source technologies, much more software engineer friendly internally
* Microsoft acquires GitHub in 2018
* Microsoft invests in OpenAI in 2019

Now Microsoft, which already has a huge software engineering org both in terms of employees and customers:

* Got GitHub which has the largest codebase dataset in the world
* Got C#, TypeScript etc. which are used by devs all around the world
* Got VSCode which gives them huge distribution advantage
* Got Azure Cloud, the largest cloud after AWS
* And got early and internal access to OpenAI models. Their engineers get to work together with OpenAI engineers, to develop products much earlier than others. This is how Copilot was created.

Copilot's success inspired and sparked a whole class of products - all the VSCode fork or extension products like Cursor, Windsurf, etc.

As innovative as Copilot's autocompletion was, other products started to take the idea and take it even further.

## Cursor

I think it was around 2024 when Cursor really picked up. I was seeing everyone talking about it.
I tried it, and was most amazed by how seamless the transition from VSCode to Cursor was.

By using Cursor, it became really convenient. I felt more AI features were exposed than just the Copilot autocomplete.
I'd say Cursor in terms of product was mostly:
* UX improvement
* Better models (Claude Sonnet while Copilot was using OpenAI models at the time)
* Bundled pricing - At the time, 500 requests per $20/month gave people the feeling they were getting more out of it rather than API pricing.

Some innovations it brought:
* Code indexing RAG enabling LLM to better create diffs across different files
* Better autocomplete than Copilot - it could handle multiple lines and complete larger chunks of code
* Easy to copy paste code into the LLM chat
* Can refer to files with `@` symbol
* Both chat and inline options - it was fast and could make changes to a whole file
* Better diff and review UX.

The bump in the user experience and productivity was very noticeable. I used Cursor for around 8 months or so.

## Claude Code

When I first saw Claude Code, I was not interested in a CLI tool. After all, all the value I got from Cursor was basically from the nice UX.
I started using it in June, around 4 months after the launch. I cancelled my Cursor subscription after 1 month of using Claude Code.

As I'm writing this article, I've been using Claude Code for around 3 months. It feels much longer.

It has been very unintuitive to explain why Claude Code is so much better than other tools.

* Faster product iteration due to being a terminal CLI
* Understanding agentic systems

### Faster iteration

Being a terminal CLI, Claude Code can iterate much faster. Mostly because the UI is much simpler and easier to maintain.
Claude Code uses [Ink](https://github.com/vadimdemedes/ink) which is a React based terminal UI framework.

* Teams like Cursor had to invest significantly in the UX/UI. All UI/UX features need to be supported, and it takes complexity and time to maintain those.
* Claude Code team, with no UX/UI, can invest everything in making the coding better

When you have a smaller team that can iterate faster, you know what happens.

Another aspect where Claude Code is simpler than Cursor is the file indexing.

* Cursor indexes the files while Claude Code does not. 
* Claude is often described by the Anthropic team as looking through the codebase just like a human would do. It basically runs `ls` and then uses the `Read` tool.

How do we humans handle large codebases? We "index" them by creating README files and documentation, or splitting into folder and file organization. It just turns out that the same thing can be used by LLMs as well.

By not doing actual indexing and storing indexes, Claude Code again has avoided a lot of complexity. Cursor and Windsurf teams need to maintain their indexing implementation and make sure the LLM can work with it.

It is remarkable how all the reasons why I had switched from Copilot to Cursor now became a liability for Cursor, and the reason why I switched away from it to Claude Code.

### Agentic systems

One of the biggest questions I had was why Claude Code performed so much better than Cursor or any other tools when they are all using the same Claude Opus or Sonnet models?

The answer is in the agentic system implemented by system prompts and tool calling.

[This article](https://minusx.ai/blog/decoding-claude-code) explains in more detail how Claude Code works: 

When you talk to an LLM in a chat interface, the LLM gives 1 output for every question.

In an agentic system, when you give 1 question, the LLM can do multiple things, especially if it has access to tools.

Tools basically allow the LLM to get context about the codebase without us needing to tell everything. And it is able to do all the things it needs to get the task done, including calling bash commands and editing files.

The TODO List that Claude Code uses is really useful and helps it plan and execute the task correctly.

Now, all product including Github Copilot and Cursor have an agentic coding mode, they all work in a similar way. Claude Code has an advantage iterating such product because they own and control both the base model and the product.

### Examples of how I use Claude Code

I won't dive deep into this, as it may be better fit for a separate article.
But basically I use it all the time on a daily basis.

For normal day usage, I would just instruct Claude Code to do the task that I would have had to manually go there and code.

If the task is larger, I let Claude Code write a plan in an `.md` file and I review that before implementation.

For new projects or tasks that I have a good idea on how to do, I sometimes use a more organized workflow:

* I write the feature's README, then let Claude Code improve it
* I let Claude Code write the spec which are the test cases
* I let Claude Code go implement the code until all tests pass

This kind of workflow works very well where the agent can go out and do a big chunk of work uninterrupted. I have used it for libraries like [Jempl](https://github.com/yuusoft-org/jempl)

For Jempl, I hardly wrote any code for this repository. It was 95% done by Claude Code. 

Another thing that Claude Code is extremely good at that I could not do myself is things like performance optimization. With Claude Code, I can just ask it to optimize and make it faster, and it will do all the things necessary to get the job done.

### Claude Code more than coding

I also came to realize that Claude Code is just a general purpose agent tool, not just for coding.
I would compare it more to something like [Manus](https://manus.im/). In theory, Claude Code can do all the same things as Manus, just that Manus has been better optimized for the tasks and wrapped as a real product for a more general audience. 

Some examples that I've used Claude Code for outside coding:

* Web Search and write reports, similar to how I would use Perplexity
* Rate and score candidate resumes based on specific criteria
* Summarize and explain text articles

You could technically use Claude Code for anything that does not need real-time response.
I think there are so many more use cases out there I haven't had the time to try yet.

### Limitations of Claude Code

Some of the limitations I'm currently facing with Claude Code:

**Testing frontend**:  One of the biggest bottlenecks for me using Claude Code right now is that I develop a lot of frontend and UI. One thing I find myself doing is that I'm like the tester that needs to refresh the browser and check the result while Claude Code is the programmer. This is a major bottleneck preventing Claude Code from completing the task by itself.

There are tools to let Claude use a browser, and I expect the tooling to automate frontend will keep improving until I can close this loop.

**Multitasking**: I keep finding myself opening multiple tabs with Claude Code. At some point it gets limited and hard to manage those. There are tools that help and make multitasking easier with Claude Code.

**Memory & Long context**: Currently Claude Code's memory is bound to one task I'm working on. The difference with humans is that humans have memory and knowledge from the whole project.


I think all those limitations are being worked on and I expect it to improve significantly in the coming months.


## What comes after Claude Code?

In addition to Claude Code, there are so many new AI tools that I have not tried. The main one is Devin, whose entry price made it too prohibitive for me to try it. But I see it as a very promising direction, where an AI will basically work like any other employee on Slack.

There are also so many other CLI tools and IDE-based tools, GitHub-based bots, vibe coding platforms, too many for me to try or name.

I do not know for sure what will be the next thing that will be much better than Claude Code. It may be possible that we will stick with Claude Code, and the ecosystem and tooling evolves to make it even more powerful.

Or it may be possible that something new will come along that will change the coding paradigm again.

Both things will be tried, and it is not possible to predict right now how it will turn out.

## Conclusions

Programming has evolved dramatically throughout history, but the pace of change in the last 2 years has been unprecedented. From ChatGPT to GitHub Copilot to Cursor to Claude Code, each iteration has fundamentally transformed how we write software.

The critical change is that code that used to be written line by line by a person is now mostly generated by AI. The person of course still needs to understand the code and be able to instruct the AI.

What I've learned through past transitions and how I guide myself through the new transition:

**Don't chase every new tool.** The landscape changes too quickly, and you'll exhaust yourself trying to keep up with everything.

**But don't stand still either.** Missing a paradigm shift like agentic coding tools means falling behind significantly in productivity and capability.

**Find the right tool for you.** Everyone works in different environments and has different use cases. We need to find and evaluate solutions for our specific use case rather than using something just because other people are.

I expect that the way we write code and create products will continue to significantly change in the following years, and I hope to be able to adapt to it.

