// playwright.config.js
const config = {
    reporter: [['html', { open: 'never' }]], // 'on' or 'never' or 'always'
    use: {
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
    },
  };
  
  module.exports = config;
  