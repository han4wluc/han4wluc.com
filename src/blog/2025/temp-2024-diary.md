
I never had a habit of writing, or even less writing diary or reflections in my life.
But, I need to start writing, it is important for me and and for others who will read.

The nice thing about writing a year recap is that I get to put in all small content that would not normally make it into an article. I can put any ideas that are on my head even though they are not related to a specific topic.

## Job change to solopreneur

For context, I had been a Senior Software Engineer at Southeast Asia fintech Xendit for almost 3 years. I had relocated to Singapore about 1 and had a half year prior.
In January, there was a (layoff)[https://www.techinasia.com/indonesian-unicorn-slashes-200-jobs] and I was one of the ones affected.
I was kind of prepared for it and did not take it badly. In fact, it was probably the best thing that happened to me at the time.

There is a saying that you either work for the money, or work for the learning. The learning aspect for me was very small already. I was the most senior member in the team, and there was very limited work across teams. There are great engineers in the org, but I had almost no interaction with them. I did learn about people managent, and project management which I really appreciate. However in terms of software and tech I was not learning much. Even without the layoff I needed to start looking for something else.

The most urgent things for me to solve after the layoff was my Singapore work visa because otherwise I would have needed to leave Singapore. I had looked around what jobs I could do, but honestly there was nothing that really excited me that much.

So, the plan was to start my own company in Singapore and use this pathway to get my work visa. One week later, I already had the Singapore company incorporated and was going through the steps to get the visa. Luckly, I eventually got the visa that I needed.

This was not the first time I was in this position of not having a job.
Back in 2016/2017, I had left Yanye, and was studying new things, at the time AI related. However, I did not have the resources and guidance to get into AI and eventually went to co-found Edugo (at the time called Edugora)
Back in 2019/2020, I was doing freelancing with my own company in China. I was not able to build a product, and started doing freelancing instead. I did not like the freelance experience as I did not have the network or specialization so it was very hard to get projects to work on. I ended up taking a job at Xendit which was great because it was all remote.

These experiences, of trying to start a business or product, and the experience of working in mid stage startups shaped me on what I wanted to do.

What I enjoy most is building great tech products, and I had to put my self in a position that I must do it now.
* I'm in my early 30s, this is maybe the best age, I'm physically and mentally at the peak
* Have savings (mostly from Edugo exit)
* Kid goes to school, meaning I don't have to spend time for the kid during the day

The pathway for me is to be a solopreneur and bootstrap a business.

The solopreneur path has become more and more viable in the last decade, things like cloud technology lowering barrier of entry, and ChatGPT democritizing information and learning.
levelsio is maybe the single most influencial solopreneur. He is really good at communication and execution. But the thing about solopreneur, is we must carve our own path.

There is this saying going on about a 1 person company unicorn, likely enabled by AI.

It does not have to be one person, it can be a small team, depends on what kind of product and business you are buildling. Small teams actually is all what is needed to make an impact to the world, especially in this innovation space. There are countless examples of industry changing product or technology that was basically written by 1 or 2 people in the beginning especially in the software context.

The other important aspect is that this business must be bootsrapped, and not go through the VC money path.

* Independence. I still get to work for myself. For example, I can keep a perk for myself such as traveling to Italy for 1 month.
* I focus on a business model that can make revenue and profit with low investment
* I take most of the upside, which I can invest back into products and start a cycle

So, the plan is simple.
* Go with the solopreneur path, can eventually expand to a small team.
* Focus all my effort to build a unique and compelling product.
* Make the product a profitable business.

I'm good at building the product and I'm interested in a product led business and less of a sales/marketing led business.

Easier said than done, but essentially this is the plan, and I have to execute it.


## Choosing the product

The next most important thing for me to choose was what product to build.

I've been of course thinking about this. But this year I've reached a conclusion of what I want to build.
Surprisingly, this is not too far different from the direction of what I wanted to build 10 years ago.
10 years ago, I decided to learn programming, the was things I want to build.
I was not a good programmer back then, and wanted to get a job to learn from the job.
I've already learned too much, and technical skills is for sure not what is preventing me from building the things I want to build.
The landscape has changed a lot in the 10 years of course, but the direction is the same.

What I want to build in the immediate is a platform for Visual Novels.
And then there are 2 other products that I want to build in my lifetime, a Music app platform and a Learning app platform.

This is all comes to personal experience. And I have a much greater felling of importance, duty, destiny, to finish this rather than working on building applications within another company.

I'm basically building what I wish had existed when I was younger. I want to build the best product I can.


## Software and tech

After not having a job anymore, I started working on things that interested me the most, not worrying too much about anything else.
The first thing I had to get out of my head. I also wanted a layout framework for frontend, mostly inspired by flexbox. I had some ideas over the years on and off, but could not really pull it out. Now i had the time to do it.
I did some experimentation and got something working, and iterated to improve it over time. I started using this framework for my actual project and was able to build it the way I wanted. I have published it as Rettangoli UI https://rettangoli.dev/
I now use this instead of tailwind, css, UI libraries.
There is some magic that happens when you can just work indefinitively on a project without worrying about scope, or the business side. The scope creeped in a way it lasted much longer

I and eventually I had a whole UI framework eventually turned out to be , and evolved into an entire frontend framework.
To think about it, I've been writing frontend for almost 10 years. This is the culmination of the experience and the framework that I want.

The UI framework replaces all of tailwind, css, antd/bootstratp etc...
For the frontend, I came to realize I really wanted to ditch FE frameworks. ditch react, vuejs, angular. And I even wanted to ditch state management frameowrks, no redux, no signals, no mobx.

And oh my god, it took months, but I eventally did it...

So, this is mostly done, I have figured out most of frontend for myself.

Similar things for the backend, I'm building from scratch. I can ditch backend frameworks, I can ditch all ORMs.

In terms of databases, I've been looking at what database to use.

Unlike the frontend or backend framework, the database is not something I could build from scratch myself.
However, I'm lucky to be in a good timing, there are very cool databases popping up that are much more lightweight than traditional databases.

When you realize that your project does not need to be at the scale of bit tech companies, you can fit everything in a single machine. Then you can choose solutions that are much simpler and less of distributed systems.

Turns out the most promising a the new databases:
* libsql/turso: primary database OLTP
* duckdb/motherduck. for OLAP
* keydb: for key value store. is to Redis what libsql is to sqllite.
* redpanda: kafka alternative.

there is something magical if I can self host it.


## AI

I had attended a hackathon called Apart Research Hackathon. They are an interesting org, they do AI Alignment research and also organize remote hackathons.
Attending this hackahton, I learned about all those AI communities such as Less Wrong, EA Forum. It is a complete different community.
This space is super interesting, but I wanted to build another product, and needed my time to focus on that, so I did not show up for the next hackathon.


* Chesherie Cat. Roma. I had enough that there is little AI and startup from Italy, and up to to day there is no uniform from Roma. I've had enough of this, and we're going to build Italy what France has done for Mistral. I'm gonna play a part on this. I'm the worst example since I have left Italy and don't live in Italy. But it does not matter, I will contribute in the way I can contribute. Unfortuantely after intial excitement, I conclude that I did not have time to work on this. I am not an immediate user of this product. I see challanges of a community model and dependencies such as langchain.

So, the thing goes that France got Mistral, and that makes us Italian extremly invidious and we need to build some AI powerhouse in Italy as well.
Well, that is not entire right. Mistral atually trains using CINECA which is in Bologna. Italy is got some other interesting startups in AI space such as Colosseum, Bending Spoons, and even a national VC that invests in AI. So, it is not that bad.

Those two are the AI tools that I use the most other than ChatGPT.
* Perpelxity: I'm very impressed by how fast and good are the search results.
* Cursor: I've ditched VS Code + Github Copilot. I was impressed the first time I used Cursor and how smooth was the migration from VSCode.

I consider myself a late user of AI. I use it embarrasingly little and late. I still write most of the code myself.
In 2025 but may take longer, hopefully I will figure it out, similary of how I figured out Frontend and Backend.
There is some aspects of the product and business model that I'm buildng that must be done with AI

## Volunteering

* I had done some volunteering back in 2023 Halogen. So, I had done a couple of volunteerings in 2023. Where I would go to a school and act as a corporate mentor. There was an event.

* Build for Good mentorship. But this always get me thinking, could we do this in Italy?

One thing that I started to appreciate more and more is learning new things about Italy

I know I want to do some volunteering where I make a big impact. The issues with my previuos experiences is that I don't feel big impact.
I'm looking for something more like I tech coding, or need higher engagement and responsibility of me for the students.
There is couple new opportunities I've found, I hope to try them in 2025.

## Italy

It is the second time in a row I have traveled to Italy.

There is this story about H-Farm that is insane.

## Personal
On a personal side.

Wisdom teeth removal in SG would be 1200 SGD for one tooth. in China is 1.5k rmb, about 300 SGD. It pays for all flight tickets by doing it in China and got to visit family.

## Investing

Unfortunanetly, for investing the saying goes like this: the best time to invest was 20 years ago, the next best time to invest is now.
I was never into investing. Especially preferred to do my own work instead of giving the money to someone else to so they do their work.
However, I am working very slowly, turtle speed, I cannot deploy money that fast, well which is good because I have a longer runway. but it also means I have some idle money sitting there.
Seeing how the stock market, and crypto has performened over the years, it feels like I am taking more risk by not investing. I can invest, I just need to manage the risk.
Learned how Tether works.

* I started to learn more about Stocks and investing in the public market. I'm investing a small amount, not to become rich but more for the learning. It is interesting, and it could easily be a fulltime job to catch up with the financial news and analyzie all the stocks out there.
I learned about different REITs. Data center REITs.
I learned about interest rates and how to actually buy US gov Treasure Bills. Actually, just buying US Gov T Bills instead of putting in my bank's fixed deposit already gives a bit higher yield.

* I'm chekcing again angel investing

It is a bit embarassing. Before this year, I did not know how to buy stocks or buy crypto.


## Books
Actually, all the books I've read this year were my favourite books.


Greatness cannot be planned

Growth Mindset

Philosophy of software design

Design of design

Hartman freedom to live

## Take aways

Learning #1

I was ready in terms of how to get my visa, but not on the project or business side.
I was too unprepared to start my own project. 
That is because I did not have any side projects during my fulltime job.
I wish I would have dedicated less nights for my day job and use it for some side project instead. I mean time was not the only issue, also willpower and motivation for side project.

In a more ideal scenario, I would have I working on a side project for 1 year before the layoff. I would have been able to pick up my business much more quicker.

What about my job? I think time was not the main limit for the output. The main limit for output what the things that we worked on. I would timebox my time working, so that I have motivation to spend that time most efficiently.


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


Learning #4

Optimize for learning. Learning is not about studying. There is so much more to learn outside what you learn at school. Unfortunately I learned this only later in my adult life.


Attend events and talks

Do internships

Volunteer

Invest small amounts.
Angels investors see thousands of startups a year. By seeing so many pitches, you learn a whole lot about startups, emergent technology etc...

Investing in stocks, when you start researching stocks and companies, you learn more about their business, and essentially how the world works.


## Wishes for 2025

I need to the first users and first paying customers of my product. This is the priority right now in my life. I need to set the product to be ready to scale in 2026.

I need to figure out how I'm going to use AI. I may need to build and deploy some agents, buy some GPU phisical or in cloud, and do all the things post-raining, fine tuning, evaluations to figure it out. Many things are already mature enough to be used and have real impoact.

Agentic AI from Antrhopic blog seems a good start

Volunteering & social impact. There are few shots in this I want to tryi n 2025, need to figure out what works best for me.

Read Hartman book

