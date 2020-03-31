module.exports = {
    'Dev.to' : function (browser) {
      browser
        .url('https://dev.to/')
        .waitForElementVisible('body')
        .assert.visible('input[name=q]')
        .getElementProperty('input[name=q]', 'placeholder', function(result) {
          console.log('search placeholder:', result.value);
        })
        .setValue('input[name=q]', 'nightwatch')
        .setValue('input[name=q]', browser.Keys.ENTER)
        .pause(4000)
        .end();
    }
  };