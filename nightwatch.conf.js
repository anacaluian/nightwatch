module.exports = (
  function (settings) {
   console.log(settings["test_settings"]["firefox"]["username"])
   if (process.env.LT_USERNAME) {
     settings["test_settings"]["firefox"]["username"] = process.env.LT_USERNAME;
   }
   if (process.env.LT_ACCESS_KEY) {
     settings["test_settings"]["firefox"]["access_key"] = process.env.LT_ACCESS_KEY;
   }
   if (process.env.SELENIUM_HOST) {
     settings.selenium.host = process.env.SELENIUM_HOST;
   }
   if (process.env.SELENIUM_PORT) {
     settings.selenium.host = process.env.SELENIUM_PORT;
   }
   return settings;
 }(require('./nightwatch.json')))