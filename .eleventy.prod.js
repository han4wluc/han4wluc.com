const htmlmin = require("html-minifier");
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
// Override the default header renderer
md.renderer.rules.heading_open = function(tokens, idx) {
  const token = tokens[idx];
  const level = token.markup.length;  // This determines the '#' count, e.g., # is 1, ## is 2, etc.

  const color = 'on-su';  // Color for the header text

  const sizes = {
    1: 'dm',
    2: 'tl',
    3: 'tm',
    4: 'ts'
  }

  const size = sizes[level]

  return `<rtgl-text c="${color}" s="${size}">`

};

md.renderer.rules.heading_close = function(tokens, idx) {
  const token = tokens[idx];
  const level = token.markup.length;
  return '</rtgl-text>\n';  // Closing tag for custom h1
};

md.renderer.rules.paragraph_open = function(tokens, idx) {
  return `<rtgl-text c="on-su" s="bm">`;  // Custom tag for paragraph
};

md.renderer.rules.paragraph_close = function(tokens, idx) {
  return '</rtgl-text>\n';  // Closing tag for custom paragraph
};

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPassthroughCopy("src/public");
  eleventyConfig.addTransform("htmlmin", function (content) {
    // Prior to Eleventy 2.0: use this.outputPath instead
    if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      output: "dist"
    },
  };
};
