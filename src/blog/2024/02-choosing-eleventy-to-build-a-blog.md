---
tags: post
layout: bloglayout.html
title: Choosing Eleventy to build a blog
description: Eleventy is the main technology used in this blog
date: 2024-05-10
---

In this post, I will go through why I choose Eleventy and how I use it to build this blog.
You can find the source code of the blog here.

I wanted to build a personal blog where I would have my own homepage and publish blog articles. I wanted to have a solution that was simple, easy to maintain, and give me full control on how my webpage is implemented. My blog is actually pretty simple, no need for many fancy functionalities. Elevently met those requirements.

Elevently does:
* Folder and file structure
* Templating and page metadata
* Configuration for customization and advanced functionalities
* Eleventy is a build time only tool

I will then briefly compare Eleventy with other tools:
* Comparing it with Ghost
* Comparing with nextjs, gatsby
* Comapring with Docsaurus, Vitepress

### Folder and file structure

Eleventy turns your folders and files into webpage content. Just like old plain html.

This structure would turn into:
```
src
|- index.html
|- blog
   |- 2024
      |- post1.md
```

`/` Will acess index.html
`/blog/2024/post1` would access `post1.md`

This is kind of obvious, but for many years of working with MVC and SPAs where we were required to configure the routing, we tended to forget about this. 

Notice also that files can have different formats. Elevently will automaticlaly transform the markdown files into `/blog/2024/post1/index.html` during build time.

So, this is great. I can have a more fancy homepage written with my custom html, and then use markdown to write the blog posts.

### Templating and frontmatter

Eleventy provides a templating functionality. 
For examples, all my blogs have the same layout, and need the same html headers etc...

It is easy to define a `bloglayout.html`, as the layout for the blog posts. Additionally, we can use front matter on the top of each page to define metadata for each page.

```yaml
---
tags: post
layout: bloglayout.html
title: Tech stac used in this blog
description: Eleventy is the main technology used in this blog. Additionally, it uses rettangoli and markdown
date: 2024-05-04
---
```

The layout will properly render the metadata.

This is really nice because:
* It replaces then need for database. The metadata lives in the same file as the content.
* The layout system is quite flexible, you can have for loops etc... It removes all duplication that you would otherwise need to do with plain html.

### Config file for advanced functionalities

There was a customization that I wanted for my blog.
When writing this markdown

```md
## This is a title
This is a paragraph
```

By default would be rendered into this:
```html
<h2>This is a title</h2>
<p>This is a paragraph</p>
```

However, I wanted it to be rendered differently. I'm using rettangoli for my html and UI, so I wanted the markdown to be converted into the rettangocli web components instead of the default html tags.

I wanted the markdown to be turned into:
```html
<rtgl-text c="on-su" s="tl">This is a title</rtgl-text>
<rtgl-text c="on-su" s="bl" mb="xl"></rtgl-text>
```

Luckly, Elevently enables this customization. Eleventy uses markdown-it to transform the markdown into html, and it exposes it in the config file. I can pass my own markdownit instance to overwrite the default behavior.
So all I had to do was to add something like this in the config file:

```js
const md = new MarkdownIt();
md.renderer.rules.heading_open = function(tokens, idx) {
  ...
  return `<rtgl-text c="${color}" s="${size}">`

};

md.renderer.rules.heading_close = function(tokens, idx) {
  const token = tokens[idx];
  const level = token.markup.length;
  return '</rtgl-text>\n';
};

md.renderer.rules.paragraph_open = function(tokens, idx) {
  return `<rtgl-text c="on-su" s="bl" mb="xl">`;
};

md.renderer.rules.paragraph_close = function(tokens, idx) {
  return '</rtgl-text>\n';
};
```

The config file was suprisingly flexible and allows many customizeation. Another transfomration I did was simply to minimize all the html during build time.


### Build time and runtime

Elevently does everything at build phase, and has zero footprint at runtime, in fact it allows me to choose any technology I want to use for runtime.
This non intrusive feature is really important for me.

### How it compares to other frameworks

I have not done an extensive research of other tools. I will compare to a few that I had previously bumped or used. I will briefly compare:

#### Ghost

Downsides:
* I would have either to use the hosted version which gives me less control
* Using the self-hosted version would mean I would need to maintain a database and server
* Don't get the benefit of writing in markdown + free git history

When to use Ghost:
* For poeple who are not technical and don't want to deal with markdown and git, the Ghost UI is really friendly
* In case you have multiple writers
* In case you need more publishing features such monetization and integrations

#### Nextjs, Gatsby

Downsides:
* You're forced to use reactjs
* Have to install many dependencies that you may not have control on
* Would need to setup a bit nextjs to make it use for blog
* They have a lot of features and flexibility but comes with additional complexity

When to use:
* I think if you need a very customized solution, use existing plugins, etc... and you're very into reactjs it may be a choice you could consider.

####  Docsaurus, Vitepress

Those in my mind are more ready for Static Generated Sites

Donwsides:
* They come with either reactjs or vuejs
* Have additional complexity as they provides many features for entire documentation, but not as much complexity as Nesxtjs or Gatsby

When to use
* For documentation of course
* They provide additional functionality by introducing limited additional complexity
* Or if you're compfortable with reactjs or vuejs.

One feature that Vitepress had, and I kind of wanted was that on the initial render, it is a static page, but then it fetches js to turn into an SPA, making it navigation to other pages instant. This was a really cool features that I would like to have on my blog. I though how to implement it, but might not be so straighforward. I would need to write the layout in javascript, and a way to render the the plain html at build time. something that I might be able to do with uhtml, but would require development and testing.
I ended up with a much simpler solution, of using `<link rel="prefetch" href="{{ url }}">`, which is supposed to prefetch the content beforhand, so when you navigate to a new page, all the content is loaded already. I'm not sure if it actually is working. For it to work, there needs to be the correct caching configurations which I don't think I have. But in case this works, it would be a good enough tradeoff for me, of making navigation fast while not adding additional complexity.

### Future works:

So far i'm pretty happy with Eleventy. And I think it offers enough extandability that I won't be swithing to anything else anytime soon,

Some of the features I plan to build in the near future, all of them can be easily satisfied with current setup.

* soon adding a RSS feed
* considering adding Giscuz, to enable comments for the posts. It seems really nice, but I'm not 100% at the moment if it I want to enable discussions or not. Another place for discussions is everypost I will tweet it via X/Twitter.
* Customize the homepage. The homepage is pretty plain right now, which is already enought. I might make it a bit more polished or fancy in future, will depends on my mood.

### Conclusion

My blog functionality are pretty simple. And I am happy that I have found a simple solution for it.
Eleventy comes in the form a simple tool that provides functionlities to stucture and create your blog without introducing a lot of complexity, yet if offers extendibility and gives you full control of the actual implementation.
