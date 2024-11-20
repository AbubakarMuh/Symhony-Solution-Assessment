const Locators = {
    
    url: 'https://www.saucedemo.com/',
    headerLocator: ".login_logo",
    usernameLocator: "input#user-name",
    strUsername: "standard_user",
    passwordLocator: "input#password",
    strPassword: "secret_sauce",
    loginBtnLocator: "input#login-button",
    verifyHomePage: ".app_logo",
    productPage: "[data-test=\"title\"]",
    sortByName: "[data-test=\"product-sort-container\"]",
    AZ: "[value='az']",
    ZAField: ".product_sort_container > option[value='za']"
}

module.exports = Locators