
module.exports = {
    'Dev.to' : function (browser) {
      browser
        .url('https://dev.to/')
        .waitForElementVisible('body')
        .assert.visible('input[type=text]')
        .setValue('input[id=nav-search]', 'Nightwatch js')
        .sendKeys(browser.Keys.RETURN)
        .pause(4000)
        .end();
    }
  };