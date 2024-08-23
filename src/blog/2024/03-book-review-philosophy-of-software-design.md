
I came about this book from a (Tweet from Antirez's)[https://twitter.com/antirez/status/1727706640147738998]
This is not to be taken lightly as Redis was often regarded as some of the best code out there

I recommend this book to software engineers who care about the quality of the code and strive to design better software.
I wish I had come to read this book earlier in my career when there was a period I was reading various books and blogs about writing better software. 
The learnings of this books is not tied to any technology or framework or tech stack. It gives practical fundamentals about software and complexity. So, unlike the title of being a 'Philosophy', I find this book to be quite practical instead.

For this article, I will select few topics that I find most interesting, and give my commentanry and share some of my experiences in regards.

Let's first start with a little story that I think all software developers are familiar with:

We start a brand new project. Since is a new project, we set it up with the latest technology and version of the libraries. We are all happy, and able to product a first working version relatively quickly. We write a lot of code, and we feel we know the entire codebase since everything was recently written by us. We feel productive and building features fast.
After a while, bugs starts to appear, and there are new requirements that we did not originally expect and need to start make technical tradeoffs. Once straighforward requirements, now need to handle many edge cases and additional features. Those bugs and tradeoffs slow things down.
Time goes on, and at some point we feel things have gotten very slow, we don't undertand some parts of the codebase and need to re-read it multiple times. We feel the urge to rewrite some parts of the code because you think there is a better way to write it. A major refactor or rewrite is a major investment, and its payoff is not guaranteed.
This whole proccess is accellearated or multiplied in complexity if there are multiple developers working on the project.
We say that the codebase has become complex.

So, in around 10 years of my career, I have experienced this lifecycle in basically every coding project I've worked with.
It is a bit frustrating that software project needs to end up like this. But with enough experience we can do things to handle it.
* First is to understand about the design proccess. Which I will go more in detail in another article. (is the other book that Antirez reocmmended)
* Another central piece to understand what complexity is and what causes it. This is exactly what this book is about.

## Chapter 1: It’s All About Complexity

> "Complexity is anything related to the structure of a software system that makes it hard to understand and modify the system"

The author gives us a good definition. It becomes more useful as the author breaks up complexity into 3 symptoms and 2 causes.

The 3 symptoms of complexity:
* "Change amplification": "a seemingly simple change requires code modifications in many different places"
* "Cognitive load": "how much a developer needs to know in order to complete a task"
* "Unknown unknowns": "it is not obvious which pieces of code must be modified to complete a task, or what information a developer must have to carry out the task successfully"

The 2 causes of complexity:
* "Dependency": "a given piece of code cannot be understood and modified in isolation; the code relates in some way to other code, and the other code must be considered and/or modified if the given code is changed". Dependencies lead to change amplification and a high cognitive load.
* "Obscurity": occurs when importation information is not obvious. Obscurity creates unknown unknowns, and also contributes to cognitive load.

My opinions:
The relieving thing that there are only 3 symptosm and 2 causes, which are quite little and by getting good at identifyin these, we can become better software engineers.

> Change amplification
A bit extreme example. But from my expeirence how most of the web applications are built nowadays.
I've seen products where in order to add collect 1 more field from a user would require this: update frontend UI, update frontend code to call backend API, update API interface and spec, update backend code in DTO, controller, service, DAO, run migration to update database column, event store schema, update ETL data and business intelligence, update internal dashboard. 
A different system is one where you call all this in one configuration place. You just need add it to this configuration and it does all the work.
If adding fields is expected in this domain, I think definitively you should be designing for the second case.

> Cognitive load
We can think this as the RAM of our brain, it is fast memory but limited in capacity. If we want to add more to it, we need to remove sold old memory from it. Keep this in mind for later when we talk about interfaces.

> Unkdown unknowns
We all have been thorugh some experiences. We were working on a task but could not figure it out and when we ask the senior engineer he says it is becaseu of bala bla bal and our reactions is "how could I ever have known that?". Well, the issue is we needed to ask someone to figure it out. Preventing the unknown unknown is so that any engineer can figure it out by themself. Documention comes helpful here.

So, when writing code desiging software, we can ask ourself.
Is this code adding dependency or obscurity? Is it worth it?
It this contributing to change amplificiation, cognitive load or unkonw unknowns?


## Interface, information hiding, deep modules

Let's summarize the what is an interface and what is an implementation.

For a Web API, the API doc is the interface (for example Open API doc). The implemetnation is the the backend code. API documentation is part of the interface.
For a function. the Function parameters/arguments and return type is the interface. The imlementation is the content of the functions.
Function Comments are part of the interface.

> It’s more important for a module to have a simple interface than a simple implementation

To understand this quote, we need to understand the relationship of interface and implemeantion to cognitive load.

When we use a function, we need to 'load' its interface to our cognitive load. But we don't need to 'load' the implementation.
The implementation of the interface can be very complicated. But as long as the interface is simple, we can get all the benefits of the implementation by paying for the simplicity of the interface.

The user of the function should not be needing to know about the implemeantion. This is the whole point of the interaface. Unless, of course his/her task so to update the implementation itself.
If the user of the function needs to know or read about the details of the implementation, you might be having information leakage.

> Modules should be deep
> General-purpose modules are deeper

A simple interface and a general purpose implementation can be very powerful.

The general purpose module can take care of all the edge cases.

We only need to mantain this one implementation instead of mulitple implementation for different edge cases.

Example:

A social network were you can comment on posts, profiles, and comments itself.

A specific modules would look like: addCommentToPost(postId, content), addCommentToProfile(profileId, content), addCommentToComment(commentId, content).

A general purpose one looksl ike addComment(referenceId, referenceType, content);





> Interfaces should be designed to make the most common usage as simple as possible

* First implication of this is that you first need to understand you user or how this interface is planned to be used.
* Simple case, use case A is used 90% of time, and use case B is used 10% of time. Then we can design this function so that with default parameters, it will satisfy use case A. With an additional optional parameter passed, it will satisfy use case B.


# Commenting the code
> Comments should describe things that are not obvious from the code

This quote says it very well.

I've experienced both extremes of writing comments.
When writing excessive comments, we would write comments on every line of code. This makes it very verbose and giving us doubts on the usefullness of the comments.
When we stop writing comments and don't write any comments, then there will be times when there will be surprises to the reader or the reader will have no option but go ask the code author (who hopefully is still there).

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

This is definitively much easier said than done.
However, if we are able to make the code obvious then it will be pleasant to work with.
My opinion is that for us to write obvious code we need to understand the context of the code.
We need to understand how similar code is written. For example if we are building an API, we need to research and understand what competitor APIs are doing it. The users probably are familiar with some of those APIs.


# Writing vs reading the code

> "Complexity is more apparent to readers than writers."
> "Software should be designed for ease of reading, not ease of writing"

This is very important distinction to make. As we're writing the code intuitively we try to make it easiest for us. For example using shorter variable names or trying to make the smallest changes to the code.
However we need to understand that a code is written once in the beginning. But is being read many more times than that in future forever for as long as the code is being worked in. The reader includeds the the writer in the future as he/she will have to read this code again.
So as writing code, we need to be concious of this and try to optimize the code for future readers. The initial investment of writinig the code this way may take more time, but it will pay off dividents in the future as it saves time for readers.


# Conclusion

This book guides you on thinking about complexity, and shares techniques on not adding complexity.
If you found those concepts interesting, I recommend you to go read the entire book, and try to put those concepts in practice.

