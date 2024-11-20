const { expect } = require('@playwright/test');
const Locators = require('./locators.spec.js')

class swagLabsLogin {
    constructor(page) {
        this.page = page;
    }

    async LaunchUrl() {
        await this.page.goto(Locators.url);
        // const headerLocator = await this.page.locator(this.headerLocator);
        // await expect(headerLocator).toBeVisible();
    }

    async inputUsername() {
        await this.page.fill(Locators.usernameLocator, Locators.strUsername);
    }

    async inputPassword() {
        await this.page.fill(Locators.passwordLocator, Locators.strPassword);
    }

    async clickLoginBtn() {
        await this.page.click(Locators.loginBtnLocator);
    }

    async verifyHomePage() {
        const locator = this.page.locator(Locators.verifyHomePage);
        await expect(locator).toBeVisible();
    }

    async verifyProductPage() {
        const pageHeader = await this.page.textContent(Locators.productPage)
        expect(pageHeader).toContain('Products')
    }

    async NameZA() {
        await this.page.click(Locators.sortByName);
        const sortName = await this.page.textContent(Locators.AZ)
        expect(sortName).toContain('Name (A to Z)')
    }

    async AZField() {
        const locators = await this.page.locators(this.AZ);
        await expect(locators).toBeVisible();
        await locators.click();
        await this.page.dbclick(Locators.AZ);
    }

    async ZAField() {
        // Locate the dropdown element
        const dropdown = this.page.locator(Locators.sortByName);
    
        // Ensure the dropdown is visible
        await expect(dropdown).toBeVisible();
    
        // Select the "ZA" option by value
        await dropdown.selectOption('za');
    
        // Verify that the dropdown value is correctly updated
        const selectedValue = await dropdown.inputValue();
        expect(selectedValue).toBe('za');
    }

}

module.exports = swagLabsLogin;
