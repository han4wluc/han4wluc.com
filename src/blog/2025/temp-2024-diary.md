
I never had a habit of writing, or even less of writing diary entries or reflections in my life.
But, I need to start writing - it is important for me and for others who will read.

The nice thing about writing a year recap is that I get to include all the small content that would not normally make it into an article. I can put down any ideas that are in my head even though they are not related to a specific topic.

## Job change to solopreneur

For context, I had been a Senior Software Engineer at Southeast Asian fintech Xendit for almost 3 years. I had relocated to Singapore about one and a half years ago.
In January, there was a [layoff](https://www.techinasia.com/indonesian-unicorn-slashes-200-jobs) and I was one of the ones affected.
I was kind of prepared for it and did not take it badly. In fact, it was probably the best thing that happened to me at the time.

There is a saying that you either work for the money or work for the learning. The learning aspect for me was very small already. I was the most senior member in the team, and there was very limited work across teams. There were great engineers in the organization, but I had almost no interaction with them. I did learn about people management and project management which I really appreciate, however in terms of software and tech I was not learning much. Even without the layoff I needed to start looking for something else.

The most urgent thing for me to solve after the layoff was my Singapore work visa because otherwise I would have needed to leave Singapore. I briefly looked around for open positions and job hunting I could do, but honestly there was nothing that really excited me that much.

So, the plan was to start my own company in Singapore and use this pathway to get my work visa. One week later, I already had the Singapore company incorporated and was going through the steps to get the visa. Luckily, I eventually got the visa that I needed.

This was not the first time I was in this position of not having a job.
Back in 2016/2017, I had left a startup and was studying new things such as AI technology. However, I did not have the resources and guidance to get into AI and eventually went to co-found Edugo (at the time called Edugora).
Back in 2019/2020, I was doing freelancing with my own company in China. I was not able to build a product and started doing freelancing instead. I did not like the freelance experience as I did not have the network or specialization, so it was very hard to get good projects to work on. I ended up taking a job at Xendit which was great for me at the time because it was all remote.

These experiences of trying to start a business or product, and the experience of working in mid-stage startups shaped what I wanted to do.

What I enjoy most is building great tech products, and I decided it was time for me to double down on this path:
* I'm in my early 30s, this is maybe the best age as I'm physically and mentally at my peak
* Have some savings
* Kid goes to school, meaning I don't have to spend time for the kid during the day

The pathway for me is to be a solopreneur and bootstrap a business.

The solopreneur path has become more and more viable in the last decade, with things like cloud technology lowering barriers to entry, and ChatGPT democratizing information and learning.
[levelsio](https://x.com/levelsio) is maybe the solopreneur with most visibility. He is really good at communication and execution. But the thing about being a solopreneur is that we must carve our own unique path.
There is also this saying going around about a 1-person company unicorn, likely enabled by AI.

For me, it does not have to be one person - it can be a small team, depending on what kind of product and business you are building. Small teams are actually all that is needed to make an impact on the world. There are countless examples of industry-changing products or technologies that were basically written by 1 or 2 people in the beginning, especially in the software context.

The other important aspect is that this business must be bootstrapped, and not go through the VC money path:

* Independence and ownership. This is very important so I can make all product and business decisions.
* Forces me to focus on a business model that can make revenue and profit with low investments
* I take most of the upside, which I can invest back into products and continue the cycle

So, the plan is simple:

* Go with the solopreneur path, can eventually expand to a small team.
* Focus all my effort on building a unique and compelling product.
* Turn the product into a profitable business.

I'm good at building products and I'm interested in a product-led business rather than a sales/marketing-led business.

Easier said than done, but essentially this is the plan, and I have to spend the next years executing it.

## Choosing the product

The next most important thing for me to choose was what product to build.

I've been of course thinking about this. But only this year I've reached a conclusion of what I want to build. It took a few months of trying different things and soul searching.
Surprisingly, this is not too far different from the direction of what I wanted to build 10 years ago.
10 years ago, I decided to learn programming, there were things I wanted to build.
I was not a good programmer back then, and wanted to get a job to learn how to build tech products.
I've now already learned too much, and technical skills or product skills is for sure not what is preventing me from building the things I want to build.
The tech and product landscape has changed a lot in the 10 years of course, but some of things I want to build are still the same.

What I want to build in my life is those 3 things: a Visual Novels platform, a Music platform, and a Learning platform.
I will start by building the Visual Novel platform.

This is all comes to personal experience, those are things that I wish it existed when I was young and that could have made my life better. And I have a much greater felling of importance, duty, destiny, to finish this job rather than working on building applications for other companies.

I dedicate myself to build the best possible product I can.

## Software and tech

After not having a job anymore, I got a lot of free time.
I started working on things that interested me the most, not worrying too much about anything else.
The first thing I had to get out of my head was a frontend layout framework inspired by flexbox. I had this ideas over the years on and off, but could not really pull it out. Now I had the time to do it.
I did some experimentation and got something working, and then iterated it over and over to improve it. I learned about web components, and material design color scheme, and some specific CSS stuff.
I then started using this framework for my frontend project to get it into a feedback loop. After months of iteration, it was actually working, and I eventually made it into a library called [Rettangoli](https://rettangoli.dev/)

Something magic happens when you can just work indefinitively on a project without worrying about time, scope, or business. I let the scope creep indefinitively. So from a layout library, I let it expand into a UI library, and then into replacing the whole frontend framework.
I could take a whole day or days to fix some seemingly very insignificant things, or rewriting parts or the whole codebase. I could spend days learning about certain concepts wihout real output.
I've been writing frontend for almost 10 years. This is the culmination of all my experience in frontend and I have built the frontend framework that I wanted. I don't use anymore libraries such as tailwind, UI libraries, reactjs, vuejs, angular, svelte, redux, mobx. I basically made everything from scratch. [uhtml](https://github.com/WebReflection/uhtml) is one of the few libraries that I use and it was essential building block for my frontend stack.

So, while I figured out most of frontend for myself, I was thinking of the backend stack as well. I'm also building a backend stack from scratch that does not use any backend framework or ORM.

In terms of databases, I've been looking for an ideal database for a long time as well.
Unlike the frontend or backend framework, the database is definitively not something I could build from scratch myself.
However, I'm lucky to be in a good timing, there are very interesting databases popping up as alternative to traditional databases.

MySQL and PostgreSQL are great databases but they have 2 shortcomings for me:
* Hard to run in an distributed environemnt or add replication. For running a replica, I could hardly do it myself, I would need to use a managed service.
* Overly complex features. Those databases have evolved over many years, and there is so many features about them that I don't know.

I had looked into TiDB, but the distributed natuer of deployment was even more complex, and the serverless managed version looked nice but only a managed version was available.

`sqlite` is actually the database that provides the simplicity and robustness that I wanted, however it was not as easy to deploy it in a production or distributed environment.
There were projects like [rqlite](https://rqlite.io/) that enabled it to be deployed in a distrubuted way but still had limitations.
[libsql](https://github.com/tursodatabase/libsql) / [Turso](https://turso.tech/) is the one that really overcharged sqlite and made it my database of choice.
sqlite can handle tens of millions of rows in a table which is mostly enough for me, and libsql / Turso makes it very easy to replicate, backup and restore etc... ideal for production usage.

When you realize that your project does not need to be at the scale of bit tech companies and that you can fit everything in a single machine. This new wave of databases become very attractive

* libsql / turso: primary database OLTP
* duckdb/motherduck. for OLAP use caases
* keydb: for key value store. It is to Redis what libsql is to sqllite.
* redpanda: kafka alternative without Zookeeper.

Another technology that I have been looking for a long time was an alternative to k8s. So, k8s was designed to run at an organization like Google, which is very different from an org like a small team or solopreneur.
I had been looking at [Nomad](https://www.nomadproject.io/), with the hope that it is a simpler alternative to k8s, but it turns out you still need to setup Consul etc...
One day, finally I stumbled upon [Kamal](https://kamal-deploy.org/). Which is like docker-compose but can deploy to remote servers and provides a bunch of orchestration features. It is simple and works.

In summary, over the year, I have re-done my whole tech stack. There are still many things to figure out but many of the big items have been figure out

This is a tech stack that:
* Optimized for 1 person / small team instead of large organization
* It has to be easy to maintain and operate because we will be few people serving millions of users
* It has to be cheap to operate because otherwise we would not be profitable
* Few dependencies as possible as it gives us more control and forces us to learn how things work

## AI

I consider myself a late user of AI. For someone who is working in tech and into AI in 2017, I use it embarrasingly little and late. I still write almost all of my code myself.

So, AI is evolving really fast and there is new models and products and tools coming out everyday, and there is this constant reminders that if you don't use AI, you will be be running behind.
And then there is always reminders that AI will reach a singularity point soon, and maybe will be end of humanity.
There is a lot of FOMO and hype which is stressful, some of it is legitimally based and some of it is just trying to get your attention.
What do we do with all this noise but also the reality?

I've decided to not be a first mover, and not even a fast follower, but a slow follower. It would take me just too much time and effort to stay updated with the latest research and products, and tools, and doing trial and error with technologies that are changing all the time.
I will come in when some of the technology looks more mature and when I have strong use cases that need the techonology.
Yes, this is a tradeoff I am making, I will not be cool and I will not be in the front seat. If I was 10 years younger I would definitively try go on the front seat, but that is not me right now.
I still do need to get some updates to understand what is going on with the technology, but is not my primary thing at the moment.

----

Those two are the AI tools that I use the most other than ChatGPT, I think they are really popular in general.

* Perpelxity: I'm very impressed by how fast and reliable the search results are. It helped me doing a lot of research quickly.

* Cursor: I've ditched VS Code + Github Copilot the day I installed Cursor. I was impressed the first time I used Cursor and how smooth was the migration from VSCode.

----

I had attended a [hackathon from Apart Research](https://www.apartresearch.com/event/research-augmentation-hackathon-supercharging-ai-alignment). They are a very interesting organization, they do AI Alignment research and also organize regular remote hackathons.
Attending this hackathon, I learned about
* Learned about AI technologies such as RAG, Agents etc...
* Learned about this AI Alignment field, realy but really important.
* Communities around AI Alignment such as [Less Wrong](https://www.lesswrong.com/), [EA Forum](https://forum.effectivealtruism.org/), [Manifund](https://manifund.org/), [AI Safety](https://ui.stampy.ai/). I was impressed by the richness of those communities.
This space is super interesting and exciting, but for me I had other plans at this time, so I did not show up for the next hackathons.
I would like to come back to this field once I ahve got more time.

----

I had attended a couple of startup and AI events in Singapore, one of them was from [The Generative Beings](https://thegenerativebeings.com/). It was a nice networking event, and there are actually many alumni from large companies here in Singapore such as Google, Amazon, Microsoft, Meta. I think the event was not really technical but gathers many people here from that all interested in generative AI.

Another event I attended was AWS Conclave. This event was more from AWS & Partners to showcase their products in the hope that people in the audience will adopt them more. There was a panel that showcasing some promising startup bulding AI applicationsn in Singapore such [Hypotenuse AI](https://www.hypotenuse.ai/), [Locofy](https://www.locofy.ai/), [Pebblely](https://pebblely.com/). 

There was an article that said in Singapore there is a lot talking going on on AI and less of actually doing. I think we need to put it into context. If we compare Singapore to San Francisco or Beijing, then there is still a big gap, especially in frontier technology. If you consider Singapore's small size and how other countries are doing, then Singapore is very much a leader in the region on AI.

I stopped going to these events. Mostly because they take time and my primary product does not have immediate use of AI right now. I plan to go to those events and network more when I have more immediate use cases of AI.

## Volunteering

I had done a couple of [volunteering sessions back in 2023 with Halogen](https://halogen.sg/training-equipping/nfte). I would go to a secondary school, and help some students with their business canvas. h
In 2024, there was a event for the volunteers. I was not really excited on going, I though it would be an usual networking event and I would leave without much takeway. The event itself was nice, I got to met some people and learn more about Halogen, but I thought that was it. 
Funny thing is then serendipity comes to play here, from the event I learn about this value sorting exercise. 
In this exercise the user would be given 50 cards, each card with a value on it. The user would need to sort the card by their priority, and then the user would need to talk about why some values were most important to him/her. It is hard for people to talk about these, but once you are able to, it tells a lot about who you are.
I was interested in this because in startups we always say we hire for culture first, but in practice I feel most of the interview is based on skills and personality rather than actual values. I felt this methodology could help us on interviewing for values and culture.
I then researched a bit more about this concept, but it did not seem to be a very widely used methodology, so I continued to search deeper and similar techniques.
Continuing the search, I landed on a video that mentioned Robert S. Hartman as a pioneer in psychology, and the development of Hartman Value Profile.
Then I stumbled upon a video from Robert Hartman Institute, and that was it! This was me making first contact with Formal Axiology, and the science of value.
The argument goes that in the last centuries, the world has made huge improvement in quality of life mostly due to natural philosophy having transforemd into a natural science. In terms of ethics however, we have have not made any progress. This is because ethics is still a philosophy. Formal axiology holds the answer of turning ethics from a philosophy into a science so that we can have the same success that has happened with natural science.
Formal axiology is an undeveloped gold mine for solutions to some of the world most pressing problems. I'm spending time throughout the year to learn about formal axiology.


[Build for Good](https://www.build.gov.sg/bfg2024/) was another volunteering that I did. It is a hackathon organized by Open Government Products. The participants are mostly university students but also some professional from public and private sector. The idea or vision is to involve the civil population to raise problems that they see in Singapore, and instead of just complaining about it have them actually come to this hackathon and do real things to solve the problem.
I got matched with a team of NUS students, met with them once a week for a month, helping them going through the problem validation, solution development and deployemnt. However, the team was actually quite knowledgeable and able to execute. I have tried to give them some suggestions, but I think they would have done well by themself as well.

The hackathon was well organized, some observations:
* It was not the usual weekend hackathonm, this was a 4 weekends hackathon. The event would have everyone gather in an open office every Saturday, it provided lunch and open office space. During this session, there would be workshops on the different stages such as problem validation, solutioning, usability testing etc... 
* Teams also had to present their ideas and work progress to everyone during the session. There was questions feedback from audience or mentors after the presentation.
* Each team had a volunteer mentor like me, but they also brought in specialized mentors from Open Government Products.
* The organizerrs also organized a user testing session, where they invited and gathered many users from public, and would come and test what the teams had prepared for them to test.
* Teams that struggled the most were the ones that were not able to validate the original problem statement. They had to pivot their idea leaving them with little time to validate the new problem and come up with the solution.
* Teams who performed best were the ones who were able to validate the problem by building a close relationship and engagement with the end user which then provided valuable and genuine feedback for them to build a solution and test it.
* Overall all teams were able to deliver some working product. Some were more mature than others but it was a good result overall.
* Singapore government is known for it being efficient, from this event I got more first hand experience it. In some other countries, government agencies are known for being inefficient and non innotivative. In this event however, it was a Singapore government agency teaching the startup process through the hackathon. My anedocte is that a Singaporean who studied in top universities overseas and worked there, would come back to Singapore and work for a govertnment agency. The high salary, low tax, high quality of life, and work purpose and impact makes it a good choice.


## Investing

For investing the saying goes like this: the best time to invest was 20 years ago, the next best time to invest is now.
I have started looking into investing only this year. Below are some of the reasons I haven't been interested in investing:
* Didn't have much money to invest in the first place
* I have preferred to do my own work instead of giving the money to someone else to so they do their work.
* Risk averse, did not want to lose hard earned money
* Wanted to stay away as much as possible with things like gambling, as stocks or crypto are sometimes are compared to gambling

Below is the reasons why I have changed my mind:
* I have some savings now and I can't deploy all the capital I have. A significant portion of the money is justing sitting there collecting interest rate.
* US stock and Crypto have historically performed very well. Eventhouh my absolute wealth is increasing because of interest rate, my relative wealth is decreasing because.
* The point above led me to the conclusions that investing is responsible, and not investing is actually not making full use of the hard earned money. I'm talking about investing in terms of having a high financial literacy and calculated risk.
* The learning element in investing is very valuable.
  * I learn of how the financial markets work, which are an important part of how the world finance, wealth and economy works
  * I need to study financial concepts like interest rate, balance sheets, investor calls, etc... which in turn makes me a better business owner as well
  * If I invest in a stock, I need to study a stock and company, the industry, technology etc...
  * For angel investing, looking at many pitch decks, and seeing which companies succeed, you learn about those sucess stories, and also how the future economy and technology will look like.

## Personal

On a personal side, I had not gone to the dentist for many years. This time I went to the dentist, I was told I had to remove 2 wisdom teeth. The optimal age to remove wisdom teeth was around 18 or 20. Removing them at my age, there is risk of complications during the removal.
Wisdom teeth removal in SG would be around 1200 SGD for one tooth. in China is was 1.5k rmb, about 300 SGD.
So we plannned this trip to China to remove wisdom teeth and visit family. Doing it in China and paying the flights costed less than doing it in Singapore.

I think the learning here is that we do need regular health checks or increase health literacy, I would not otherwise had the opportunity to find about wisdom teeth thing.

## Books

I actually like a lot the books that I have read this year.

[Why Greatness cannot be planned: The Myth of the Objective](https://link.springer.com/book/10.1007/978-3-319-15524-1): it became one of my favourite books. I might write a book review on it.

[Mindset](https://www.goodreads.com/book/show/40745.Mindset): I loved the concept of growth mindset, this is the book by the original author. I did not like the format of the book of being a huge collection of small examples, but I think it was more targeted to people who are less familiar with the concept. There were still useful techniques on how to adopt a growth mindset and a good reminder of keeping a growth mindset.

[A Philosophy of Software Design](https://www.goodreads.com/book/show/39996759-a-philosophy-of-software-design): Great book about writing software. Managing complexity is the core concept. I have wrote an article about it [here](https://han4wluc.com/blog/2025/01-book-review-philosophy-of-software-design/).

[The Design of Design](https://www.goodreads.com/book/show/7157080-design-of-design-the): Same author of The Mythical Man-Month. The author is a software engineer from many decades, and has worked on early operating systems at IBM, also a Turing award receiver. The book describes the different design processes that exist or are being used today, and which ones tend to work best. He has decades of pratical and theorical experience in this aspect and there is a lot to learn from.

[Freedom to Live: The Robert Hartman Story](https://www.goodreads.com/book/show/30735175-freedom-to-live): Robert Hartman's Autobiography

[The Structure of Value: Foundations of Scientific Axiology](https://www.goodreads.com/book/show/14516779-the-structure-of-value): This is the Formal Axiology "textbook", it is not easy to read and I have not finished it. I need more time to decode it.

## Reflections

Reflecting on how this year went, there is few things that I think could have been done better


I wish I had worked more on a side project while I had a full time job, this would have allowed me to achieve results much faster instead of having to start from scratch.
I had a fulltime job and family so didn't have time for side projects. I spent many nights for my fulltime job.
A better way would have been to timebox how much time I spend on my fulltime job, so that I also remove temptation for procastination as well, and make dedicated time in the night that I would spend on side projects.


I'm extremely underinvested in personal and professional relationships and network. Starting from scratch is very slow.


Serendipity sometimes work, such as what has happened with me discovering Formal Axiology. However what you can control is to create the opportunities for serendipity to do its magic. I would not have gotten anything if I stayed home, but I do every once in while get rewarded for attending many random and different events here and there.


I am writing the best codebase I have in my career. This is because I focused only on technology and product without worrying anything about business side. Eventually I will need to come out of the pre-launch mode and be in contact with the market, but I still do want to keep the freedom and focus that creates the magic for building great teachnology and products.


Optimize for learning. Learning is not about studying. There is so much more to learn outside what you learn at school. Unfortunately I learned this only later in my adult life.
Everything is a learning opportunity.
Invest small amounts of money in different financial assets to get a sense of how it works.
Attend different events, hackathons to learn from
Do different jobs

Investing in stocks, when you start researching stocks and companies, you learn more about their business, and essentially how the world works.


## Ending

I need to the first users and first paying customers of my product. This is the priority right now in my life. I need to set the product to be ready to scale in 2026.

I need to figure out how I'm going to take advanrage of AI. I may need to build and deploy some agents, maybe buy some GPU phisical or in cloud, and do all the things post-raining, fine tuning, evaluations to figure it out. Many things are already mature enough to be used and have real impoact. Agentic AI from Antrhopic blog seems a good start

Volunteering & social impact. There are few shots in this I want to try in 2025, need to figure out what works best for me.

Read Hartman book. I definitively want to learn more about this. I know this is difficult to read, and it will take time. I need to pick up this book hundred times to really absorb and internalize it.

2024 overall was a good year, with many critical changes happening. 2025 there will be important milestones for me to reach
