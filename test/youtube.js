var data = require('../env');
module.exports = {
    'Youtube login' : function (browser) {
      browser
        .url('https://www.youtube.com')
        .waitForElementVisible('body',5000)
        .assert.titleContains('YouTube')
        .assert.visible('.style-scope.ytd-button-renderer.style-suggestive.size-small')
        .click('.style-scope.ytd-button-renderer.style-suggestive.size-small')
        .waitForElementVisible('input[name=identifier]',5000)
        .setValue('input[name=identifier]', data.youtube.email)
        .click('div[id=identifierNext]')
        .waitForElementVisible('input[name=password]',5000)
        .assert.visible('input[name=password]')
        .setValue('input[name=password]', data.youtube.password)
        .click('div[id=passwordNext]')
        .pause(7000)
        .end();
    },

    'Youtube search':function(browser){
      browser
      .url('https://www.youtube.com')
      .waitForElementVisible('body',5000)
      .setValue('input[name=search_query]',data.youtube.search)
      .click('button[id=search-icon-legacy]')
      .assert.visible('a[id=video-title]')
      .click('a[id=video-title]')
      .pause(4000)
      .end();
    }
  };