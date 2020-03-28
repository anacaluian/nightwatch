
module.exports = {
    'Youtube search' : function (browser) {
      browser
        .url('https://www.youtube.com')
        .waitForElementVisible('body')
        .assert.titleContains('YouTube')
        .assert.visible('input[type=text]')
        .setValue('input[type=text]', 'Starset - Monster')
        .assert.visible('button[id=search-icon-legacy]')
        .click('button[id=search-icon-legacy]')
        .waitForElementVisible('body')
        .assert.visible('a[id=video-title]')
        .click('a[id=video-title]')
        .pause(4000)
        .end();
    }
  };