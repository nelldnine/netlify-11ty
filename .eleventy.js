module.exports = function(config) {
  config.addPassthroughCopy('src/admin/config.yml');

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}