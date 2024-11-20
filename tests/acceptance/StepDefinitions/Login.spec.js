const { Given, Before, Then, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require("playwright");
const swagLabsLogin = require('../../pages/swagLabsLogin.js');
const swagLabObj = require('../../pages/swagLabObj.js');
const Locators = require('../../pages/locators.spec.js')
setDefaultTimeout(60000);

let page;
let loginPage;
let productPage;

Before(async function () {
  global.browser = await chromium.launch({
      headless: false,
      slowMo: 1000,
      browserContextOptions: {
          viewport: null,
      },
  });
  const context = await browser.newContext();
  page = await context.newPage();
  loginPage = new swagLabsLogin(page);
  productPage = new swagLabObj(page);

});

After(async function () {
  await global.browser.close();
});


Given('I am able to login successfully', async function () {
   await loginPage.LaunchUrl();
   await loginPage.inputUsername();  
   await loginPage.inputPassword();  
   await loginPage.clickLoginBtn();
   await loginPage.verifyHomePage();
});

Then('I am able to navigate to product page', async function () {
  await loginPage.verifyProductPage()
});

Then('I Verify that the items are sorted by Name A to Z', async function () {
   await loginPage.NameZA();
   //await loginPage.AZField();
});

Then('I change the sorting to Name Z to A and I verify that items are sorted correctly', async function () {
   //await loginPage.NameZA();
   await loginPage.ZAField()
});
