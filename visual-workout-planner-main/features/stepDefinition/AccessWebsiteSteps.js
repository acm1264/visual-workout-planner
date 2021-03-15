var {Given, When, Then} = require('cucumber');  
const assert = require('assert');
const { Builder, By, until } = require('selenium-webdriver');
 
Given('user has the link to the website "visual-workout-planner.netlify.app"', function () {  
    return console.log('Given - user has the link to the website "visual-workout-planner.netlify.app"');  
  });  

When('user click on the link', async function () {
    this.driver = new Builder()
        .forBrowser('chrome')
        .build();
 
    this.driver.wait(until.elementLocated(By.tagName('h1')));
 
    await this.driver.get('http://visual-workout-planner.netlify.app');
    return console.log('When - user click on the link');  

    
});
 
Then('user should see the main page with the muscle structures', function () {
    return console.log('Then - user sees the main page with muscle structures');  
});

