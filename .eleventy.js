const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/scripts");
  eleventyConfig.addFilter("postDate", (dateObj) => DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED));
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addFilter("image", (imageUrl, size) => {
    if (imageUrl.startsWith('https://lh3.googleusercontent.com/drive-viewer/')) {
      const imageUrlWithoutSize = imageUrl.split('=')[0];
      return `${imageUrlWithoutSize}=s${size || 200}`;
    };
    return imageUrl;
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
