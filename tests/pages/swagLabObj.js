const { expect } = require('@playwright/test')
const locators = require('./locators.spec.js')

class swagLabObj {
    constructor(page) {
        this.page = page;
        // this.sortByName = "[data-test=\"product-sort-container\"]";
        // this.AZ = "Name (A to Z)"
        // this.ZA = "Name (Z to A)"
    }
}

module.exports = swagLabObj;