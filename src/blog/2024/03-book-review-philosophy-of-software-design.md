
I came about this book from a (Tweet from Antirez's)[https://twitter.com/antirez/status/1727706640147738998]
This is not to be taken lightly as Redis codebase is highly regarded

I recommend this book to software engineers who care about the quality of the code and strive to write better code.
I wish I had come to read this book earlier in my career.
There was a period in the beginning & mid of my career, that I knew that the code that I was writing was not the best. but it did the job and I needed to write more code, but I did not know how better code was. I was reading some books and many blog articles back then, but they mostly were recipes on how to use a specific technology as the solutions, or sharing of successful experiences.

This book gives me more practical fundamentals and understanding of complexity. I can use as guidelines to make decision on the code regardless of the codebase langauge and framework. So, unlike the title of being a 'Philosophy', I find this book to be quite practical.

I will select few topics that I found most interesting, and give my commentanry and share some of my experiences in order to augment it

Let's first start about a little story that I think all software developers are familiar with:

We start a brand new project. Since is a new project, we set it up with the latest technology and version of the framework. We are all happy, and able to product a first working version relatively quickly. You write a lot of code, and you feel you know the entire codebase since everything was recently written by you. You feel productive and building features fast.
After a while, bugs starts to appear, and there are new requirements that need you to make technical tradeoffs. Once straighforward requirements, now need to handle many edge cases and additional features. Those bugs and tradeoffs slow things down.
Time goes on, and at some point you feel things have gotten very slow, you don't undertand some parts of the codebase,  and you feel the urge to rewrite some parts of the code because you think there is a better way to write it. A major refactor or rewrite is a major investment, and its payoff is not guaranteed.
Everything is multiplied in complexity if there are multiple developers working on the project.
I think we have all gone through some version or other of this lifecycle.
And we may say that as time goes on and the codebase growns, the codebase is becoming more complex.

So, in around 10 years of my career, I have experienced this lifecycle in basically every coding project I've worked with.
It is a bit frustrating that software project needs to end up like this. But with enough experience we can do something about it.
* First is to undersatnd about the design proccess. Which I will go more in detail in another article. (is the other book that Antirez reocmmended)
* Another one is to understand what is complexity and what causes it. This is exactly what this book helps us on. Understanding this, we can make educated decisions on minimizing the complexity of the project.

## Chapter 1: It’s All About Complexity

> "Complexity is anything related to the structure of a software system that makes it hard to understand and modify the system"

The above is a good definition. It becomes more useful as the author breaks up complexity into 3 symptoms and 2 causes.

The 3 symptoms of complexity:
* "Change amplification": "a seemingly simple change requires code modifications in many different places"
* "Cognitive load": "how much a developer needs to know in order to complete a task"
* "Unknown unknowns": "it is not obvious which pieces of code must be modified to complete a task, or what information a developer must have to carry out the task successfully"

The 2 causes of complexity:
* "Dependency": "a given piece of code cannot be understood and modified in isolation; the code relates in some way to other code, and the other code must be considered and/or modified if the given code is changed". Dependencies lead to change amplification and a high cognitive load.
* "Obscurity": occurs when importation information is not obvious. Obscurity creates unknown unknowns, and also contributes to cognitive load.

My opinions:
The relieving thing that there are only 3 symptosm and 2 causes, which are quite little and by getting good at identifyin these, we can become better software engineers.
When looking at a PR, or designing a system, or adding new code, we can just go though these:
* Is this new code making it easier or harder to make changes/removing/adding features or code?
  * Example. We decide to 
* Is this design, adding to the cognitive load, meaning that we need to learn or know new things to complete a task? I like to think cognitive load as our brain's RAM. We can add so many things to it, but if we want to add more, we need to take some previous information out of it.
  * Example. We want to implement a new text search feature, currently we're just using SQL. We want to do that by adding Elastic Search. This can add cognitive load, because now, in order to modify the search feature a developer will need to be familair with the Elastic Search interface. We need to think about if the additional complexity is worth it for the use case.
* is the code self explanatory, or do I have to add comments/documenmtation to explain it? or will they come find me?



> Change amplification
A bit extreme example:
I've seen products where in order to add collect 1 more field from a user would require this: update frontend UI, update frontend code to call backend API, update API interface and spec, update backend code in DTO, controller, service, DAO, run migration to update database column, update ETL data and business intelligence, update internal dashboard. 
A different system is one where you call all this in one configuration place. You just need add it to this configuration and it does all the work.
If adding fields is expected in this domain, I think definitively you be designing for the second case.



## Interface, information hiding, deep modules

Let's summarize the what is an interface and what is an implementation.

For a Web API, you API doc is the interface (for exasmple a Open API doc). The implemetnation is the the backend code.
For a function. the Function parameters/arguments and return type is the interface. The imlementation is the content of the functions.
Comments are part of the interface.

We want the user of the API or function to be able to use the function without worrying about the internal implementation. This is because if they only need to know the interface, this is less cognitive load, if they need to read and undertand the implemenation, we are incraesing the cognitive load and thus adding complexity.

> Interfaces should be designed to make the most common usage as simple as possible
* First implication of this is that you first need to understand you user or how this interface is planned to be used.
* Simple case, use case A is used 90% of time, and use case B is used 10% of time. Then we can design this function so that with default parameters, it will satisfy use case A. With an additional optional parameter passed, it will satisfy use case B.

> Modules should be deep
> It’s more important for a module to have a simple interface than a simple implementation
* One main reason goes back to cognitivie load. The interface is the cognitive load that you need to add in order to use the fuctionality. A small interface and a rich implementaiton means we add small interrface to the cognitive load and gain the rich functionality .

function addTwoNumbers(a, b)
function calculatePrimeNumber(x)

> General-purpose modules are deeper

This got me paying attention. I think of this as writing one interface and implementatin that can satisfy all the use cases.
It is powerful because it means you only need to maintain this one interaface + implemeanation instead of maintaining several ones. Also for the user, they only need to learn this one interface instead of learning multiple ones.


Example non general purpose API

Article
ArticleComment
ArticleCommentComment
CollectionComment
CollectionCommentComment

Comment
- referenceId
- referenceType: 'article' | 'collection' | 'comment'

> information hiding

One mistake junior developers make is to be exposing implementation details in the interface

# Better Together Or Better Apart

Sometimes code is better together, sometimes it is better to split apart.
The book goes into more detail about things to consider

# Commenting the code
Comments should describe things that are not obvious from the code

Regarding the argument of whether you should be writing or not writing comments. I think this quote summarized perfectly when to write code and what kind of code should be written.

One distinction you have to make is the interface comments and implemntation comments.

Interface comments are part of the interface. Again, you don't want to explain here all the implemeantion details. But need to explain what the user needs to know to use this interface.

Implementation interface, here we can go more in detail to expalin what the code is doing, why some decisions were made. It is for the user to better understand the implemeantation.


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


# Writing vs reading the code

> "Complexity is more apparent to readers than writers."
> "Software should be designed for ease of reading, not ease of writing"

This is very important distinction to make. As we're writing the code intuitively we try to make it easiest for us. For example using shorter variable names or trying to make the smallest changes to the code.
However we need to understand that a code is written once in the begigging. But is being read many more times than that in future forever for as long as the code is being worked in. The reader includeds the the writer in the future as he/she will have to read this code again.
So as writing code, we need to be concious of this and try to optimize the code for future readers. The initial investment of writinig the code this way may take more time, but it will pay off dividents in the future as it saves time for readers.



# Conclusion

This book guides you on thinking about complexity, and shares techniques on not adding complexity.
If you found those concepts interesting, I recommend you to go read the entire book, and try to put those concepts in practice.

