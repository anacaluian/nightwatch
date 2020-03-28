const {Builder, By, Key, until} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();

    try {
        // Navigate to Url
        await driver.get('https://www.youtube.com/');
        await driver.sleep(2000);

        await driver.manage().window().maximize();

        await driver.wait(until.elementLocated(By.css('input')), 10000).sendKeys('the weeknd',Key.ENTER);
        await driver.sleep(5000);

        await driver.wait(until.elementLocated(By.id('thumbnail')), 10000).click();
        await driver.sleep(3000);


        await driver.findElement(By.className('more-button style-scope ytd-video-secondary-info-renderer')).click();
        await driver.sleep(3000);


        await driver.executeScript("window.history.go(-1)");
        await driver.sleep(2000);

        await driver.findElement(By.className('style-scope ytd-button-renderer style-suggestive size-small')).click();
        await driver.sleep(3000);

        await driver.findElement(By.name('identifier')).sendKeys('ana.caluian26@gmail.com');
        await driver.sleep(2000);
        await driver.findElement(By.className('RveJvd snByac')).click();
        await driver.sleep(2000);

     
    }catch(err){
        console.log(err.message);
    }
    finally{
        driver.quit();
    }
})();