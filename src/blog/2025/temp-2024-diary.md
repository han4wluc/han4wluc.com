
I never had a habit of writing, or even less writing diary or reflections in my life.
But, I need to start writing, it is important for me and and for others who will read.

The nice thing about writing a year recap is that I get to put in all small content that would not normally make it into an article. I can put any ideas that are on my head even though they are not related to a specific topic.

## Job change to solopreneur

For context, I had been a Senior Software Engineer at Southeast Asia fintech Xendit for almost 3 years. I had relocated to Singapore about 1 and had a half year already.
In January, there was a (layoff)[https://www.techinasia.com/indonesian-unicorn-slashes-200-jobs] and I was one of the ones affected.
I was kind of prepared for it and did not take it badly. In fact, it was probably the best thing that happened to me at the time.

There is a saying that you either work for the money, or work for the learning. The learning aspect for me was very small already. I was the most senior member in the team, and there was very limited work across teams. There were great engineers in the organization, but I had almost no interaction with them. I did learn about people management, and project management which I really appreciate, however in terms of software and tech I was not learning much. Even without the layoff I needed to start looking for something else.

The most urgent things for me to solve after the layoff was my Singapore work visa because otherwise I would have needed to leave Singapore. I briefly looked around for open positions and jobhunting I could do, but honestly there was nothing that really excited me that much.

So, the plan was to start my own company in Singapore and use this pathway to get my work visa. One week later, I already had the Singapore company incorporated and was going through the steps to get the visa. Luckly, I eventually got the visa that I needed.

This was not the first time I was in this position of not having a job.
Back in 2016/2017, I had left a startup, and was studying new things such as AI technology. However, I did not have the resources and guidance to get into AI and eventually went to co-found Edugo (at the time called Edugora)
Back in 2019/2020, I was doing freelancing with my own company in China. I was not able to build a product, and started doing freelancing instead. I did not like the freelance experience as I did not have the network or specialization so it was very hard to get good projects to work on. I ended up taking a job at Xendit which was great for me at the time because it was all remote.

These experiences, of trying to start a business or product, and the experience of working in mid stage startups shaped me on what I wanted to do.

What I enjoy most is building great tech products, and I decided it was time for me to double down on this path:
* I'm in my early 30s, this is maybe the best age as I'm physically and mentally at the peak
* Have some savings
* Kid goes to school, meaning I don't have to spend time for the kid during the day

The pathway for me is to be a solopreneur and bootstrap a business.

The solopreneur path has become more and more viable in the last decade, things like cloud technology lowering barrier of entry, and ChatGPT democritizing information and learning.
(levelsio)[https://x.com/levelsio] is maybe the solopreneur with most visibility. He is really good at communication and execution. But the thing about solopreneur, is we must carve our own unique path.
There is also this saying going on about a 1 person company unicorn, likely enabled by AI.

For me, it does not have to be one person, it can be a small team, depends on what kind of product and business you are buildling. Small teams actually is all what is needed to make an impact to the world. There are countless examples of industry changing product or technology that was basically written by 1 or 2 people in the beginning especially in the software context.

The other important aspect is that this business must be bootsrapped, and not go through the VC money path:

* Independence and ownership. This is very important so I can make all product and business decisions.
* Forces me to focus on a business model that can make revenue and profit with low investments
* I take most of the upside, which I can invest back into products and continue the cycle

So, the plan is simple:

* Go with the solopreneur path, can eventually expand to a small team.
* Focus all my effort to build a unique and compelling product.
* Turn the product into a profitable business.

I'm good at building the product and I'm interested in a product led business and less of a sales/marketing led business.

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
I then started using this framework for my frontend project to get it into a feedback loop. After months of iteration, it was actually working, and I eventually made it into a library called (Rettangoli)[https://rettangoli.dev/]

Something magic happens when you can just work indefinitively on a project without worrying about time, scope, or business. I let the scope creep indefinitively. So from a layout library, I let it expand into a UI library, and then into replacing the whole frontend framework.
I could take a whole day or days to fix some seemingly very insignificant things, or rewriting parts or the whole codebase. I could spend days learning about certain concepts wihout real output.
I've been writing frontend for almost 10 years. This is the culmination of all my experience in frontend and I have built the frontend framework that I wanted. I don't use anymore libraries such as tailwind, UI libraries, reactjs, vuejs, angular, svelte, redux, mobx. I basically made everything from scratch. (uhtml)[https://github.com/WebReflection/uhtml] is one of the few libraries that I use and it was essential building block for my frontend stack.

So, while I figured out most of frontend for myself, I was thinking of the backend stack as well. I'm also building a backend stack from scratch that does not use any backend framework or ORM.

In terms of databases, I've been looking for an ideal database for a long time as well.
Unlike the frontend or backend framework, the database is definitively not something I could build from scratch myself.
However, I'm lucky to be in a good timing, there are very interesting databases popping up as alternative to traditional databases.

MySQL and PostgreSQL are great databases but they have 2 shortcomings for me:
* Hard to run in an distributed environemnt or add replication. For running a replica, I could hardly do it myself, I would need to use a managed service.
* Overly complex features. Those databases have evolved over many years, and there is so many features about them that I don't know.

I had looked into TiDB, but the distributed natuer of deployment was even more complex, and the serverless managed version looked nice but only a managed version was available.

`sqlite` is actually the database that provides the simplicity and robustness that I wanted, however it was not as easy to deploy it in a production or distributed environment.
There were projects like (rqlite)[https://rqlite.io/] that enabled it to be deployed in a distrubuted way but still had limitations.
(libsql)[https://github.com/tursodatabase/libsql] / (Turso)[https://turso.tech/] is the one that really overcharged sqlite and made it my database of choice.
sqlite can handle tens of millions of rows in a table which is mostly enough for me, and libsql / Turso makes it very easy to replicate, backup and restore etc... ideal for production usage.

When you realize that your project does not need to be at the scale of bit tech companies and that you can fit everything in a single machine. This new wave of databases become very attractive

* libsql / turso: primary database OLTP
* duckdb/motherduck. for OLAP use caases
* keydb: for key value store. It is to Redis what libsql is to sqllite.
* redpanda: kafka alternative without Zookeeper.

Another technology that I have been looking for a long time was an alternative to k8s. So, k8s was designed to run at an organization like Google, which is very different from an org like a small team or solopreneur.
I had been looking at (Nomad)[https://www.nomadproject.io/], with the hope that it is a simpler alternative to k8s, but it turns out you still need to setup Consul etc...
One day, finally I stumbled upon (Kamal)[https://kamal-deploy.org/]. Which is like docker-compose but can deploy to remote servers and provides a bunch of orchestration features. It is simple and works.

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

I had attended a (hackathon from Apart Research)[https://www.apartresearch.com/event/research-augmentation-hackathon-supercharging-ai-alignment]. They are an interesting org, they do AI Alignment research and also organize regular remote hackathons.
Attending this hackathon, I learned about
* Learned what is AI Alignment research and why it matters
* Learned about AI technologies such as RAG, Agents etc...
* Very interesting AI Alignment communities such as (Less Wrong)[https://www.lesswrong.com/], (EA Forum)[https://forum.effectivealtruism.org/], (Manifund)[https://manifund.org/], (AI Safety)[https://ui.stampy.ai/]. It is a complete different community.
This space is super interesting, but I wanted to build another product and needed my time to focus on that, so I did not show up for the next hackathon.

----

I had attended a couple of startup and AI events in Singapore, one of them was from (The Generative Beings)[https://thegenerativebeings.com/].

one of the AWS events was a AWS product and customer showcase, sales pitch.
There was a panel There are some promising startup buliding AI applications such as such as (HypotenuseAI)[https://www.hypotenuse.ai/], (Locofy)[https://www.locofy.ai/], (Pebblely)[https://pebblely.com/]. 

However, as someone had said, there is a lot more talking and less of doing going on here. But still, Singapore still is a powerhouse for AI in the region.


## Volunteering

I had done a couple of volunteering sessions in 2023 with Halogen. I would go to a secondary school, and help some students with their business canvas. In 2024, there was a event for the volunteers. I was not really excited on going, I though it would be an usual networking event and I would leave without much takeway.
The event itself was nice, I got to met some people and learn more about Halogen, but I thought that was it. 
Funny thing serendipity comes to play here, from the event I learn about this value sorting exercise. Where there were like 50+ cards, each card a value on it. The user would need to sort the card by their importance, and then the user would need to talk about why some values were most important to him/her.
I then researched a bit more about this concept, but did not find a universsaly widely methodology.
Continiung searching i landed on a video that mentioned Robert Hartman as a pioneer in psychology, and found out about his Hartman Value Profile methodology.
There was not much information about Hartman, I mean his wikipedia page was plain. But then I stumbled upon a video from Robert Hartman Institute, and that was it! This was me who had made first contact with Formal Axiology, or the science of value.



* Build for Good mentorship. But this always get me thinking, could we do this in Italy?

One thing that I started to appreciate more and more is learning new things about Italy

I know I want to do some volunteering where I make a big impact. The issues with my previuos experiences is that I don't feel big impact.

I'm looking for something more like I tech coding, or need higher engagement and responsibility of me for the students.
There is couple new opportunities I've found, I hope to try them in 2025.


## Investing

Unfortunanetly, for investing the saying goes like this: the best time to invest was 20 years ago, the next best time to invest is now.
I was never into investing. Especially preferred to do my own work instead of giving the money to someone else to so they do their work.
Also stocks had a bad reputation in my head, as related to gambling.
However, I am working very slowly, turtle speed, I cannot deploy money that fast, well which is good because I have a longer runway. but it also means I have some idle money sitting there.
Seeing how the stock market, and crypto has performened over the years, it feels like I am taking more risk by not investing. I can invest, I have enough financial literacy that I can manage the risk.

* I started to learn more about Stocks and investing in the public market. I'm investing a small amount, not to become rich but more for the learning. It is interesting, and it could easily be a fulltime job to catch up with the financial news and analyzie all the stocks out there.

* I'm chekcing again angel investing

It is a bit embarassing. Before this year, I did not know how to buy stocks or buy crypto.

Even though the amoutns I'm investing is small, I still get the learning, and it setups up the stage for me later to invest larger amounts when I have the resources, see the opportunity.

## Personal
On a personal side.

Wisdom teeth removal in SG would be 1200 SGD for one tooth. in China is 1.5k rmb, about 300 SGD. It pays for all flight tickets by doing it in China and got to visit family.

Hopefully the operation went all well, but there was risk in it. Best to do this in the 20s.


## Books

Actually, all the books I've read this year were my favourite books.

Greatness cannot be planned: it became one of my favourite books

Growth Mindset: I loved the concept, and had studied it before reading this book. The format of this book was not most likable to read for me, but there were some good parts of it as well. It felt more about convincing those who are not familiar with the concept.

Philosophy of software design: great book, blogged about it here

Design of design: even greater book. As i'm writing software and designing the software, I am going through this design experience, especially the co evolution and iteration of problem distory and building solution.

Hartman freedom to live: great book, easy to read.

Structure of value: too hard to read, I could not read it. Need to take more time to read it.

## Take aways

Learning #1

I was ready in terms of how to get my visa, but not on the project or business side.
I was too unprepared to start my own project. 
That is because I did not have any side projects during my fulltime job.
I wish I would have dedicated less nights for my day job and use it for some side project instead. I mean time was not the only issue, also willpower and motivation for side project.

In a more ideal scenario, I would have I working on a side project for 1 year before the layoff. I would have been able to pick up my business much more quicker.

What about my job? I think time was not the main limit for the output. The main limit for output what the things that we worked on. I would timebox my time working, so that I have motivation to spend that time most efficiently.
Other way to think about it, I should not have procastitated my work to nights, I should have finished it in time during the day or forced me to do so.


Learning #2

Never stop novelty search. Serendipity. This one at least I got some returns. I wanted to learn something new from volunteering. And it brought me to the discover of Formal Axiology and Robert Hartman. 
Robert Hartman's Formal Axiology. Now, this may be the most important finding for me.
The way that this proposal goes, is that it has the power to completely change the world.
It is shocking to me how such a potential thing is so under studied and under developed.
I must go back to it once I have more time.
Imagine we could program this into AI, might hold the key to solve AI Alignment problem.


I was in a fulltime job, but I did take time out to do volunteering even if it was unclear for me what it would bring be. I'm not saying it will alwasy succeed, I attended events without much returns, and other volunteering with Better.sg but did not bring as much home. However it is necessary to have some activity. No matter how busy, keep some time for trying out new things and activities.

Learning #3

I have 0 revenue. But I'm building the best code, best product that I have in any other time of my work experience.
There is something magic happens when your goals is just to build the best thing and not worrying about short term deliverable, your boss' or collegues' opinion, running out of money, or even immeidate users / customers.
Of course doing this to an extreme, may lead to a bad outcome where I run out of business. But this magic is key of small team changing the world, and I must preserve this magic for my projects and as my org grows.
There is some magic to it, and I need to preserve this magic as the product and org grows


Learning #4

Optimize for learning. Learning is not about studying. There is so much more to learn outside what you learn at school. Unfortunately I learned this only later in my adult life.

Attend events and talks

Do internships

Volunteer

Investing is actually a learning opportunity.

speculation, luck and irrational markets aside.
If there was an investment and you did not invest, but the value went up. It means there was something about this investment that you didn't know, and that if you would have known you would have invested.
If you did invest, and the value did not go up as you expected, it also means there was something about this investmetn that did not go as you predited, learning there.

Invest small amounts.
Angels investors see thousands of startups a year. By seeing so many pitches, you learn a whole lot about startups, emergent technology etc... You are basically seeing what the future will look like beforehand. You can take this and apply it in your daily job, other investment or other life decisions.
You also see what businesses, teams, technology tend to work out and which does not work out.

Investing in stocks, when you start researching stocks and companies, you learn more about their business, and essentially how the world works.


## Wishes for 2025

I need to the first users and first paying customers of my product. This is the priority right now in my life. I need to set the product to be ready to scale in 2026.

I need to figure out how I'm going to take advanrage of AI. I may need to build and deploy some agents, maybe buy some GPU phisical or in cloud, and do all the things post-raining, fine tuning, evaluations to figure it out. Many things are already mature enough to be used and have real impoact. Agentic AI from Antrhopic blog seems a good start

Volunteering & social impact. There are few shots in this I want to try in 2025, need to figure out what works best for me.

Read Hartman book. I definitively want to learn more about this. I know this is difficult to read, and it will take time. I need to pick up this book hundred times to really absorb and internalize it.

## Conclusions

This has been a good summary of what has been going on for me in 2024. There are couple of important milestones that need to happen in 2025, so we will see how that goes.

