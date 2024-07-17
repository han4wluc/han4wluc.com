
I came about this book from Antirez Tweet
This is not to be taken lightly as Redis codebase is considered one of the most beautiful codebases out there.

<!-- one line summary of the book -->
The book takes an abstract topic of software design and analyzes it, breaking it down into smaller topics that can be studied and discussed invididually. It shares several findings on what makes better software. The topic is general to software in general and not really specifit to a programming langauge or technology.

I recommend this book to software engineers who care about the quality of the code and strive to write better code.
There was a period in the beginning & mid of my career, that I knew that the code that I was writing was not the best. but it did the job and I needed to write more code. I was reading some books and many blog articles back then, but they mostly were recipes on how to use a specific technology as the soultion, or sharing experience of successsful experiences.

For this blog post, I will select few topics that I found most interesting, and give my commentanry and share some of my experiences in order to augment it. 

First, let me tell the experience which I think all of us software develoeprs and been throught.
We start a brand new project. Since is a new project, we set it up with the latest technology and version of the framework. We are all happy, and able to product a first working version relatively quickly. You write a lot of code, and you feel you know the entire codebase since everything was recently written by you. You feel productive and building features fast.
After a while, bugs starts to appear, and there are new requirements that need you to make technical tradeoffs. Once straaighforward requirements, now need to handle many edge cases and additional features. Those bugs and tradeoffs slow things down.
Time goes on, and at some point you feel things have gotten very slow, you don't undertand some parts of the codebase,  and you feel the urge to rewrite some parts of the code because you think there is a better way to write it. A major refactor or rewrite is a major investment, and its payoff is not guaranteed. Everything is multiplied in complexity if there are multiple developers working on the project.
I think we have all gone through some version or other of this lifecycle. And we may say that as time goes on and the codebase growns, the codebase is becoming more complex.
Complex is the keyword that this book tackes. But how would you define complexity? What causes complexity?
I know that complexity is the issue, but I would not be able to expain exactly what is complexity, and what makes a system complex.
Complexity is at the central topic in this book, and it is cleary broken down for us to study it and understand it better. Once we better understand complexity and what causes complexity, we can take more informed decisions on how to evolve our codebase to add more functionality while limiting the addition of complexity.



> "Complexity is anything related to the structure of a software system that makes it hard to understand and modify the system"




> An important and pratical attribute of complexity is that "Complexity is more apparent to readers than writers."

The above is important to understand. There is a tendency for software developers to rewrite the codebase that some other developer has written. I have been guilty of this many times. It is easy to take a codebase of someone who is not in the organization anymore, and tell others that the way the code was written was bad and I can re-write it better. Experienced programmers would always be more sceptical of such statments.
One reason you want like the code is that you don't fully understand it.
If you re-write it yourself, you will fully understand it, even if you end up writing more ore less the same code.
When writing the codebase, we're focusing on writing it and less of reading it.
The risk is that you may end up with the same thing. Once you leave the organization, and the next person has to take over, he may say the same thing, this code is hard to understand, I want to rewrite it.
This does not matter only to when codebase is handedover to another person, that person may be you, just the you in 3 months, 6 months, or 2 years. Have you ever expereicned the need to go change old codebase that you have written been thinking, this is some bad code I wrote long time ago.
So, with this information at hand, what can we do?
As the code writer, we need to optimize the codebase for the reader (including yuour future you), not for writing.
Some examples:
* using short non expressive variable names.
* Adding comments to places where behavior is not expressd in the code.





The 3 symptoms of complexity:
* "Change amplification": "a seemingly simple change requires code modifications in many different places"
* "Cognitive load": "how much a developer needs to know in order to complete a task"
* "Unknown unknowns": "it is not obvious which pieces of code must be modified to complete a task, or what information a developer must have to carry out the task successfully"

The 2 causes of complexity:
* "Dependency": "a given piece of code cannot be understood and modified in isolation; the code relates in some way to other code, and the other code must be considered and/or modified if the given code is changed". Dependencies lead to change amplification and a high cognitive load.

* "Obscurity": occurs when importation information is not obvious. Obscurity creates unknown unknowns, and also contributes to cognitive load.

My opinions:

Chapter 2 is one of my favourites. It breaks down what is exactly complexity and where it comes from.
I knew that dealing with software main problem is complexity. However I would have a hard time to answer what is complexity.
The author decomopresses Complexity into 3 symptoms and 2 causes:

We want to minimize complexity in our systems. By having clear definitin, symptoms and cuses of complexity we can be much more cautious and aware how our code impacts complexity.
This helps us build a red flag detector, code smell detector, an inner radar to detect complexity when we see it.








Take a break, and analyze how to write better software rather than more software.
Too much time attention is spent on shipping out features or completing specific tasks, or learning to use a specific tool or framekwork or APIs.
Not enough time is spent on thinking what actually makes good software and how to write better software.

The title of this book, made me assueme it would be ideological and abstract. But this is actually one of the most practical books I have seen on software engineering and coding, to the point that I could be putting those concept into practice immediately.

I will also try to add more examples from my personal experiences to give different viewpoints to the concepts

Why I like and recommend this book:
* Every software engineer develops experience of what good software should look like. However if you asked me to explain what good software should look like, I would have a hard time explaining it. What this book does is exactly that, it breaks down what makes good software into small pieces and discusses each point individually so that the reader can learn it.
* By the time the reader finishes this book, the reader will have developed a detector for things to watch out in codebase and techniques to design good software.

Recommend who should read this book:
* Any Software engineers both in their early career or experienced who care about software quality

Philosophy of Software Design is a great book about how to write good software

Having been writing code for 10 years, I agree with all points made in this book.
My experiences has given me an intuition on what good code should be like, and how to design a system.
However it is not a systematic approach and follows mostly my intuition and gut feel.
The does an extremely good job to break down aspects of good code design and make each concept accessible for the reader to analyze.

I will follow most suggestions in this book, and recommend it to people working with me.

In this post I will go through the book's content and give my personal experiences and opinions on it.

Every software developer has been though this experience:

We hack something together and make it work.
It does the job and is amazing.
We keep adding more features and more code, we are able to meet all the new requirments at a fast speed
At some point, we experience that bugs start popping out, adding functionalities and making changes take longer time.
We spend more time debugging.
At some point we conclude that there is a better way to structure the code.
We come to the decision, should we stop development to re-write part or all of the codebase?
This experience happens again and again in nearly all software developmetn projects.

There are some key points on this experience.
* The project becomes more complex as you add more code
* You find that there is a better way to do something

We experienced this many times, and from each experience we become a bit better software engineers.
But, have we gone back to analyze, why did the software become complex, what could we do to manage the complexity and design better systems?

This book analyzes exactly what is complexity, and what things makes software more complex, and what to watch out for. It also shares serveral techniniques to use to manage this complexity and have easier to work with code.

I was implressed on how the author was able to break down those abstract details into small, understandable and tackable concepts.

I have been through organizations with different levels of code quality.
Some organizations disregarded code quality and only cared about shipping out features.
Some organizatios had well established code guidelines and review processes and made sure every change was adhering to the quality standads.
It is really really hard to maintain high quality code, especially when there are many inexperienced programmers and little leadership on code quality.

Leadership, the top leaders in engineers should be first examples of pushing for code quality. If the leaders don't care or don't know how to distinguish good code design, why should I care?
Junior programmers are ones that focus more on writing working code rather than high quality code. One main reason is that they are not able to distinguish good vs bad code. If left untouched, they will write a lof of code their way. The leaders has to be able to tell the junior developer if a piece of code is good or bad.

My conclusion is that:
* Tactical programming will take you far, but just as far.
* There will be a point with tactical programming will meet a bottleneck. This is not necessarly bad as most projects will never reach the bottleneck.
* However for long term success and scalability, you will need to reach that level of code quality.
* I'm betting that high quality code is more productive and enjoyable than writing non high quality code

I will not be summarizing this book, instead I will give my internapreation and eaxmples in my experience that I can relate

I'll be encorcing anyone who codes with me to read this book.
This way he will be better able to undersantd and talk about the code.

If you care about quality of the codebse, the maintainability and scalablity of the codebase. This book will give you more tools, suggetsions, and ways of thinking to help on that.

What chapter is about:

## Chapter 1: Definition of Complexity:
"Complexity is anything related to the structure of a software system that makes it hard to understand and modify the system"

An important and pratical attribute of complexity is that
"Complexity is more apparent to readers than writers."


The 3 symptoms of complexity:
* "Change amplification": "a seemingly simple change requires code modifications in many different places"
* "Cognitive load": "how much a developer needs to know in order to complete a task"
* "Unknown unknowns": "it is not obvious which pieces of code must be modified to complete a task, or what information a developer must have to carry out the task successfully"

The 2 causes of complexity:
* "Dependency": "a given piece of code cannot be understood and modified in isolation; the code relates in some way to other code, and the other code must be considered and/or modified if the given code is changed". Dependencies lead to change amplification and a high cognitive load.

* "Obscurity": occurs when importation information is not obvious. Obscurity creates unknown unknowns, and also contributes to cognitive load.

My opinions:

Chapter 2 is one of my favourites. It breaks down what is exactly complexity and where it comes from.
I knew that dealing with software main problem is complexity. However I would have a hard time to answer what is complexity.
The author decomopresses Complexity into 3 symptoms and 2 causes:

We want to minimize complexity in our systems. By having clear definitin, symptoms and cuses of complexity we can be much more cautious and aware how our code impacts complexity.
This helps us build a red flag detector, code smell detector, an inner radar to detect complexity when we see it.


I have experienced on my own that complexity is the main challenge in writing larger software.
We have all been through it, when we start a new codebase, it feels really good, we're using the latest technology, you understand the whole codebase, it has few features but it does them well and works, and most satisfying is that it is really fast to implement new features and make changes. We know that the big problem is complexity and we do all we can to add features but not add complexity.
Give it a few months or a year, updating the codebase starts to become slower process, there are bugs found around the codebase, you start to not understanding the whole codebase maybe more poeple were working on the code, or you forgot what you had writter many months ago. This is typically what happens in coding projects.
One solution that the industry has adopeted is to split the codebase, to a library or in case of backend API development split into microservices. The thinking goes like this: you cannot undestand the whole codebase because it is just too bug. Ok, then let's break it down. Let's put this domain into one codebase, and put this other domain in another codebase. This makes each individual codebase smaller, and I only care about this one codebase. The other codebase? I'll just let another team or person handle it.
The problem with this is that it indeed made working with a single codebase easier, but it has made it harder for anyone to understand the whole system, because now to understand the whole system you have to learn two codebasees instead of one. So before jumping into splitting to a different library, considere other tools that you have. This microserfices thing, is a topic for whole other blog post.
So, we know that complexity it what we are fighting against, but the author did an amazing job to break down complexity into 3 symptioms and 2 causes, giving us the power to better understand complexity, so it is easier to fight against.

## Chapter 3: Working Code Isn't Enough

What chapter is about

Tactical programming is about creating working code as quickly as possible to get the job done.
Strategical programmming thinks more about the overall design of the system.
Strategical programming might take longer in the short term, but it saves more time in the long term.

My opinions

basically is making a point that you should aim for long term, rather than short term. Working code is not what we aim fore, instead we want to aim for a good designed system, it pays in the long run.

Quoting Margin Flower: "High quality code is cheaper to produce" https://martinfowler.com/articles/is-quality-worth-cost.html



This is not about technical complexity per set. but to encourage the reader to adapt a strategic instead of tactical.

I have some doubts about using 20% of your time to improvements. Althoughs systematically it makes sense, there may be few problems.

Unfortunately in real life the pressume to get working code is enormous.
Developers are not incentivised to produce the best code, but to produce the working code for the business at the least effort.

When I was just starting to program, all my effort were spent in producing working code. I was not experienced, and I did not know what things would work out. When I finally got something working, I would finally try to wrap it around a function or something. But rarely would go back and look at what I have done, and how to improve it.
With more experience and now that getting working code is easier, you get more surplus and priviliedge to go back and look at what you have done. Working code is only the first step, the next step is to take the working code and improve on it, ask the question how could you make this code better? Yes, it will take more effort, but your goal is to produce high quality code that provides value for the long term. Too often myself, or other more junior developers unfortunately stop at the make code work step, and don't take enough time to improve it before submitting it.
Similar thing for when doing a leetcode exercise or something. Leetcode scores on whether the code is working. But after you have a working code, you should look at it and improve on it.
So, I don't agree that 20% is the right number, but I can agree that it is a good starting point. We are always faced with the dilemma of whether to refactor or add more features and collect tech debt. Only the business and developers can make this choice and many things needs to be considered.

1. refactoring sometimes is not incremental but has to meet a threshold. Even if you keep refactoring regularly, due to the design proccess you may encounter a time when a major refactor or rewrite is considered. this major refactor will not get done if your strategy is to use only 20% of your time to work on it because it will take more that 20% of the time. 


Subsequent Chapters go on describing techniques that tend to produce lower complexity code.


## Chapter 4 Modules should be Deep

What chapter is about

It is very important to distinguish interface from implementation.
When working on a task that involves different modules, is impossible to understand the implementation of all modules. That would be too big of a cognitive load.
Instead, what we can do is to be able to understand the interface of the relevant modules would be enough.

Do not attach implementation with interface. When implementation changes, the interface should not change.

Modules should have a smaller interface and a larger implementation. This is they key.
Most of the complexity lies in the implementation. The interface is usually simple. So if you are able to do that, the complexity that you have added is only the size of the interface, while the features or value that is added is the size of the implemetation. We have added a lot of features while introducing little complexity.

Modules should be considered first before considering to split the codebase into a separate library or microservice. Module gets many of the benefits of spllitting to a codebase while not having the overhead of a separate library or microservice.


## Chapter 5 Information Hiding
The interface should hide information that the user does not need to know.

Althought this is obvious in theory, it is harder to apply in practice when you are actually designing a module. It takes some attempts to come up with the right interface.

By information here, the author means the information about the implemeantion that is not part of the interace. I will give a couple examples from my experience:


I called an API, and I needed a content text format. I was expecting a string, but what I got instead was a lower level structure of the string that contained much embedded information. In order to get the string, I actually had to take pieced of the information and call other APIs to get the whole content. I wish there was an API I could use to get the whole text version of the content. I had to learn about how the system worked, how it handled updates etc... its data structure to correctly use this APIs.

But what came out was a specific data strustcutere that I didn't know exactly how to decode.


Another problem that I encounter is that many APIs are a direct mapping of how the data is stored.


I often see that the API is a mirror of how the data is stored in the database. However we should be considering those separatedly.
This is also why I think APIs should not expose the createdAt and updatedAt variables.

createdAt is a column for autogerenearted column.
For example if we add 2 users that actulaly registered 2 years ago, but we never had them in the database. Then the createdAt will be now. Instead it should be 2 years ago. The correct thing is to have a separeate column for registrationDate and use that. 

I was once told, why don't we expose all the database columns in the API? because it seemed that everytime we wanted to expose a data, we would need to create a PR to update the interface and expose the new column.
I didn't want to expose all the columns because once exposed you have to basically maintain it forever.

column or variable names
sometimes the naming might not match, we may use one thing for customer facing, and one thing internally.

remember, implemenation is what you can change anytime.
interface is, if you want to change it you'll need to tell the user of the interface about it, or introduce a breaking change. unless the interface is used in the same codebase, then refactor becomes easier you can just change it all at once.

## Chapter 6: General Purpose Modules are better

This was a very interesting finding. I have experienced, but did not pay that much attention to it.
But this is also a good news. But this is a powerful concept, closely related to modules should be deep

This is actually a powerful finding.

Let me give an example.

Early in my carrer we were building a social application. Where there were aritcle, articles couldhave comments. comments could have comment replies. We also had article collections, and article collections could have comments.

In the beginning there were only articles and comments. The database was designed like this:

Article

ArticleComment

it was all good. Then it was require that you could reply to comments. so we satisfied that

Article
ArticleComment
ArticleCommentComment

Then there was a cocept of collections, and those also needed to have comments, and since we wanted to keep the experience consistent with articles, we also needed comment of comments.

Article
ArticleComment
ArticleCommentComment
CollectionComment
CollectionCommentComment

You can see clearly now how this is a problem. If we wanted to make somethng else commentable, we would need to create 2 more tables, and re-implement all of them.
This is specialized in the sense that comments are specific to artice or collections, maybe we even had some specialized concpet such as notifications.

a better way to structure this would have been:

Comment
- referenceId
- referenceType: 'article' | 'collection' | 'comment'
- thread (always the top most element), so you can fetch all commments in one query

this is more scalable, less duplicate logic.
if we wanted to add a functionality whether a comment should send a notification, we could do that and enable/disable it for different reference types.

## Chapter 7: Different Layer different abstraction

We have all experienced this.
Too much abstracton is a problem.
No abstraction is also a problem.


## Chapter 8: Pull complexity downward

One advantage is that the hard stuff needs to be solved only once and and in one place
This concept closely relates to the deep modules ones.
The way I see it is to use a library to do the heavy lifting.

## Chapter 9: Better together or apart
this is a trade off that often comes up

## Chapter 10: Define errors out of existence

During the mid of my career. I was implenting simple a grps API to query some data.
There was a case where the data was not availalbe.
In this case what should the behavior be?
One options was to throw an error or special code because data was not available. The other optiosn was to return empty data. 
We face this situation all the time, in local code, when trying to query cache data. 

However you have to be careful of not hiding silent errors. Failing fast is one best way to catch errors early so they can be fixed early instead of hiding them.




## Chapter 11: Design it twice

Software design, this would take a whole blog post. But we will leave it simple for now:

You build an app for the first time. The outcome is that it will work, and in the process you learned many things, but for sake of time you had to make tradeoffs and ship it things out.
Now, you scratch everything up, and have to build it again.
The second time you build it, you will already have the experience, and can fully implement the learnidgs that you had gained the first time.
But that took too much time, you had to build the whole thing and re-do it again. Instead of building the whole thing, you should try design it entirely. and then redesign it.  this becomes a more cost perimissive method.


## Chapter 12: Writing comments

I have to admit I've almost never written extensive comments in my codebase. 
The times when I wrote most comments in codebase when the project needed to be handed over, and I would spend half a day or so dedicated in adding comments to the codebase. not sure how useful it was.
The author got one thing right that comment should comment things that are not obvious from the code.

## Chapter 13: Comments should describe things that aren't obvious from the code

## Chapter 14: Choosing names

There was a period in my career where my strategy was to be as verbose as possible so that variables were self explanatory. the outcome of this was long and verbose variable names, which was not elegant. Furthermore, when this variable was referred, it would need to copy this long name again and again. Furthermore if the behavior or details of the function changed, the naming may become wrong and need to change the name as well.
Short variable names usually one to three words long seem to be the most elegant.

Too short variable names can cause confusion such as pointed out by the book, especially when there is variable with similar name it can cause confusion.



## Chapter 15: Write the comment first

This is easier said than done. 



## Chapter 16: Modifying existing code


## Chapter 17: Consistency

This is something I would be looking for in a code I use, and something I would expect.
but is harder to do in reallity. One of the most importantn consequences is this:

When working on a codebase written by someone else, I go through the code.
I come up with my own opinion of the code. I like some some things are done, and may dislike some other things, or I may even spot something that is utterly wrong.
Now I have a requirements and need to make some changes or add some code.
Then the question comes up. 
I get the temptation of fixing the code, by doing thing right.
But doing thing right, I would be making the code inconsistent.
What is the best choice?
Best choice is probably to keep doing things how it was done before, and stay consistent.
And then in the future do a bigger refactor the fix the thing from wrong to right and keeping the state consistent.
The danger is that this refactor may never come, and wrong approach be added more and more.


There was one example of an API request. It was wrong that it added body paramters to a GET request.
The orignal author admitted that it was a mistake.
Howevver we needed to add a new parameter to this API should we add it to the body params like before or add it to the query params?
We decided to add it to the body params, and it would require less code changes.
Implementing totally new APIs, of course we would be adding directly to query params and not copying the wrong implemetnation. It would be dump to keep sending body params in GET requests. Luckly there was only 1 or 2 APIs that implemented the wrong body params.
Leaving out the opportunity in future to change all body params to query params.


## Chapter 18: Code should be obvious

This is definitively easier said than done.

don't overcomplicate or overengineer things. most likely the simplest solution may be the best one.

if things are not obvious, it should be commented

forces you to think about the code from a readers's perspective

the writer must know and have experience on the context of the code to know how obvious code should be. he/she should be familiar with other such codebases

the author points out how event-driven programming can make things less obvious. This is an interesting take, and something that I have not fully considered when implementing event driven systems. but is really true. 

In fact, many other LLMs have followed the OpenAI API interface.
It uses existing naming that users are already familiar with.

## Chapter 19: Software Trends

I'll give a quick opinions on each. May be future blogs on individual topics specifically

Object Oriented Programming:
Don't overuse it. but the basics are necessary and I use them every day. I can't do with functional programming

Agile development:

On my first onsite job, we used scrum. It visualized the progress of tasks and enforced people to raise the blockers that are encountered.
I've been using daily morning standups for most part of the rest of the career, often without an actual scrum board.

My job in 2018, we didn't use a formal scrum, we just had task lists. Well was a small team of only 3 devs. A year later, I would think we lacked structure and a more structured scrum would have been beneficial.
Later in 2023, I was asked to implement scrum throughly with all documentation, story points, weekly grooming, sprint plannig, measure the velocity of the team, etc...
My thoughts now is that I never want to do agile and scrum ever again.
My sweet spot currently is a small team of independent talented developers. Maintaining a tasklist and backlog but withough going through all the scrum ceremonies and overhead seems to work best.
Agile and scrum is just a tool to get progress going, and not the reason for why we work. We don't do agile for sake of doing agile.

Unit tests:

First realization is that unit tests is just one of the available tests that you have. it is not the only one.
Unit test is the most bottom one in the testing layer. That means is that this is where quanity is the highest.
Write unit tests when you want the behavior not to change.

Test driven development:
It always sounded a great idea. I don't religiously follow this. I sometimes do it when I'm implementing a specific function that I know how the API and behaviors should be.

Getters and setters:
useful because it gives move flexibility for refacotring. but not a must have


I want to finish this blog post soon


## Chapter 20: Design for Performance
I rarely work on performance. Will skip

## Chapter 21: Design What Matters

Next

Just reading a book, will not make me a better programmer and acquire all these skills.
I need to take those learnings and put them and try them out in real life, in practice.
These are definitively more tools and approaches, and when workinig on some software problems, I will be thinking about using one of those tools. Applying those tools in real life will give more experience on which ones work and which ones work less well. 

















