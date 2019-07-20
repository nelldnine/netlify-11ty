module.exports = function(config) {
  config.addPassthroughCopy('uploads');
  config.addPassthroughCopy('src/admin/config.yml');

  return {
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src'
    }
  }
}