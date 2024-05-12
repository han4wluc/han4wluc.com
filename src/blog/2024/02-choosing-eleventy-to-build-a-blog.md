---
tags: [post]
layout: bloglayout.html
title: Choosing Eleventy to build a blog
description: In this blog post, I describe why I choose Eleventy for my blog. Eleventy is tool that provides essential features to build a blog without introducing significant complexity.
date: 2024-05-12
---

In this post, I will go through why I choose Eleventy and how I use it to build this blog.
You can find the source code of the blog here.

I wanted to build a personal blog to have my personal homepage and publish blog articles, the functionality and design would be very basic. I wanted a solution that was simple, easy to maintain, and give me full control on how my webpage is implemented.

Elevently met those requirements, especially in being simple without adding additional complexity.

### Folder and file structure

Eleventy turns your folders and files into webpage content. Just like old plain html.

The below folder structure for example
```
src
|- index.html
|- blog
   |- 2024
      |- post1.md
```
Will be turned into:

`/` Will access `index.html`
`/blog/2024/post1` Will access `post1.md`

This is obvious, but for many years of working with MVC and SPAs, we frontend developers had to explicitly configure the routing. 

Notice also that files can have different formats. Elevently will automaticlaly transform the markdown file into `/blog/2024/post1/index.html` during build time.

This setup enables me to have a homepage written with my custom html, and blog posts written in markdown.

Writing markdown files for blog posts is very attractive for me because you get the git commit history and github collaboration tools for free.

### Templating and frontmatter

Eleventy provides a templating functionality. For example, all my blogs have the same layout and need the same html headers etc... All I have to do is to define a `bloglayout.html`, as the layout to be reused in the blog posts.
Front matter which is a small yaml snippet on you write on the top of the markdown or html file to define metadata for each page.
Below is the front matter for this blog post page

```yaml
tags: [post]
layout: bloglayout.html
title: Choosing Eleventy to build a blog
description: In this blog post, I describe why I choose Eleventy for my blog. Eleventy is tool that provides essential features to build a blog without introducing significant complexity.
date: 2024-05-12
```

This is really nice because:
* It can act as a database
* The metadata lives in the same file as the content.
* The templating integrates well with the metadata, you can have for loops etc...

The templating system and front matter removes the duplication that you would otherwise need to do with plain html

### Config file for advanced functionalities

I wanted to customize how the markdown was rendered into html
When writing the below markdown:

```md
## This is a title
This is a paragraph
```

By default would be rendered into this:
```html
<h2>This is a title</h2>
<p>This is a paragraph</p>
```

However, I wanted it to be transformed differently. I'm using `rettangoli` for my html and UI, so I wanted the markdown to be converted into the rettangoli web components instead of the default html tags.

I wanted the markdown to be turned into:
```html
<rtgl-text c="on-su" s="tl">This is a title</rtgl-text>
<rtgl-text c="on-su" s="bl" mb="xl"></rtgl-text>
```

Luckly, Elevently enables this customization [link to url]. Eleventy uses `markdown-it` to transform the markdown into html, and it exposes it in the config file. I can pass my own `markdown-it` instance to overwrite the default behavior.
So all I had to do was to add something like this to customize the header tags transformation:

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
```

The config file was suprisingly flexible, easy to implement and it did exactly what I needed.
There are many other customizations that you can do with the config file, for example another one that I use is to minify the html during the build phase.

### Build time and runtime

Elevently does everything at the build time, and has zero footprint at runtime. It allows you to choose any technology you want for the runtime.
This non intrusive feature is really important for me. In fact the page right now does not use any javascript except for the `rettangoli` dependency. This gives me full control of how the webpage is implemented.

### How it compares to other frameworks

I have not done an extensive research of other tools to build personal blogs. I will briefly compare to a few that I had previously bumped or used.
Eleventy wins over other tools mostly for its simplicity

#### Ghost

Why I didn't want to use it:
* I didn't want to use a cloud version
* Using the self-hosted version would mean I would need to maintain a database and server
* I preferred the git based storage rathen that a database storage

When to use Ghost:
* For people who are not technical and don't want to deal with markdown and git, the Ghost UI is user friendly
* In case you need more publishing features such monetization and integrations with other tools

#### Nextjs, Gatsby

Why I didn't want to use it:
* You're forced to use Reactjs
* Have to install many dependencies from `npm` that I don't have control on
* Would need to add significant config and boilerplate to turn a Nextjs project to be used as a blog
* They have a lot of features and flexibility but comes with additional complexity

When to use:
* I think if you need a very customized solution, and powerful features, use existing plugins, etc... 
* You are sure to use Reactjs as your frontend framework

####  Docsaurus, Vitepress

Those were the solutions closest to Eleventy in terms of static site generation

Why I didn't want to use it:
* I didn't want to use Reactjs or Vuejs
* I didn't need the documentation specific features

When to use
* For documentation of course

There was one feature from Vitepress that was really attractive and I was thinking on how to implement it on Eleventy

> The initial visit to any page will be served the static, pre-rendered HTML for fast loading speed and optimal SEO. The page then loads a JavaScript bundle that turns the page into a Vue SPA ("hydration")

For me to implement a `JavaScript bundle that turns the page into an SPA` would require significant work.
I ended up with a much simpler solution, of using `<link rel="prefetch" href="{{ url }}">`, which is supposed to prefetch the content beforhand, so when you navigate to a new page, all the content is loaded and cached already. The html tag alone seems not to be enough for it to work as the html does not seem to be cached by default. I will look into it in a later time on how to properly configure the caching to make the prefetch work as expected.

### Conclusion

My blog requirments are pretty simple. Eleventy is a simple tool that provides functionlities to stucture and create your blog without introducing a lot of complexity. Eleventy offers extendibility and gives you full control of the actual webpage implementation.
