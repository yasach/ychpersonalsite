const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const embedTwitter = require("eleventy-plugin-embed-twitter");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const embedTikTok = require("eleventy-plugin-embed-tiktok");
const { EleventyEdgePlugin } = require("@11ty/eleventy");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyEdgePlugin);

  eleventyConfig.ignores.add("./src/_sass");
  eleventyConfig.ignores.add("./src/_scripts");

  eleventyConfig.addWatchTarget("./src/css");
  eleventyConfig.addPassthroughCopy({ "./src/_css/main.css": "/css/main.css" });
  eleventyConfig.addPassthroughCopy({ "./src/_fonts": "/fonts" });
  eleventyConfig.addPassthroughCopy({ "./src/_public": "/" });
  eleventyConfig.addPassthroughCopy({ "./src/_search/app.js": "/js/app_search.js" });
  eleventyConfig.addPassthroughCopy({ "./node_modules/@github/time-elements/dist/index.js": "js/time_elements.js" });

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(embedTwitter, {
    theme: "dark",
    align: "center",
    doNotTrack: "true",
  });

  eleventyConfig.addPlugin(embedYouTube, {
    lite: true,
  });

  eleventyConfig.addPlugin(embedTikTok);

  return {
    dir: {
      data: "_data",
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
