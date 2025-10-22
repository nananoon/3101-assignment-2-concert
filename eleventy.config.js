import { HtmlBasePlugin } from "@11ty/eleventy";

// This function is used to configure the Eleventy generator.

// If you want to experiment with other configuration settings,
// you can read about them here: https://www.11ty.dev/docs/config/
export default function (eleventyConfig) {
	eleventyConfig.addPlugin(HtmlBasePlugin);
	// This sets the input directory for our site
	eleventyConfig.setInputDirectory("source");

	// This will copy over any jpg, css, or javascript files from
	// the input directory to the output directory
	eleventyConfig.addPassthroughCopy("source/**/*.jpg");
	eleventyConfig.addPassthroughCopy("source/**/*.css");
	eleventyConfig.addPassthroughCopy("source/**/*.js");

	// By default, all pages will use the "base.html" template in
	// source/_includes/base.html
	// You can either change this directly for all pages, or override
	// this for specific pages using the "layout" tag
	eleventyConfig.addGlobalData("layout", "base.html", "place.html");


	// This creates a collection named "place"
	// Tells Eleventy to gather all Markdown files from the folder source/places/ with .md extension.
	// loop through all your .md files in source/places/.

  eleventyConfig.addCollection("place", function (collectionApi) {
    return collectionApi.getFilteredByGlob("source/places/*.md");
  });
};