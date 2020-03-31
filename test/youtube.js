var data = require('../env');
module.exports = {
    'Youtube search' : function (browser) {
      browser
        .url('https://www.youtube.com')
        .waitForElementVisible('body')
        .assert.titleContains('YouTube')
        .assert.visible('input[id=search]')
        .setValue('input[id=search]', data.search)
        .assert.visible('button[id=search-icon-legacy]')
        .click('button[id=search-icon-legacy]')
        .waitForElementVisible('body')
        .assert.visible('a[id=video-title]')
        .click('a[id=video-title]')
        .pause(4000)
        .end();
    }
  };