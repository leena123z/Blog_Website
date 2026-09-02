module.exports = function (eleventyConfig) {
  // Copy these files/folders straight to the output site, unchanged
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("admin");

  // Turns a date into "September 1, 2026"
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const d = new Date(dateObj);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  // Removes HTML tags so the homepage excerpt is plain text
  eleventyConfig.addFilter("striptags", (str) => {
    if (!str) return "";
    return str.replace(/<[^>]*>/g, "");
  });

  // Shortens excerpt text on the homepage to a set number of characters
  eleventyConfig.addFilter("truncate", (str, length = 160) => {
    if (!str) return "";
    const clean = str.trim();
    return clean.length > length ? clean.slice(0, length).trim() + "…" : clean;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
