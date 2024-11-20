# Automation Assessment

This repository contains the automation scripts for the SauceDemo App using Playwright, JavaScript, and Page Object Model, BDD and Cucumber

## Project Structure

The project is organized as follows:

SAUCEDEMO ASSESSMENT/
├── test
|----acceptance
    |__feature/Login.feature
    |__StepDefinations/ Login.spec.js
|---Pages
    |___locators.spec.js
    |___swagLabObj.js
    |___swagLabsLogin.js
|
├── package.json
├── cucumber.js
├── playwright.config.js
├── package-lock.json
├── README.md
└── node_modules/

## Dependencies

The project relies on the following dependencies:

- `javascript`: JavaScript language support

## Setup Instructions

1. **Install Dependencies**:

   `npm install`

3. **Run Tests**:

   - Open playwright Test Runner:
     `npm run test:e2e`

4. **Generate Reports**:
   - Merge Mochawesome JSON reports:
     `npm run merge`
   - Generate the HTML report:
     `npm run report`

### Steps for Pushing Code

1. **Create a Working Branch**:

   git checkout -b feature/your-feature-name

2. **Commit Your Changes**:

   `git add .`
   `git commit -m "Description of your changes"`

3. **Push to `dev` Branch**:

   git push origin feature/your-feature-name
   git checkout dev
   git merge feature/your-feature-name
   git push origin dev

4. **Merge `dev` to `main`**:

   Create a pull request on GitHub to merge `dev` into `main`.
   Review and merge the pull request.

5. **Delete the Feature Branch**:

   `git branch -d feature/your-feature-name`
   `git push origin --delete feature/your-feature-name`

## Reporting

Mochawesome is used for generating HTML reports from the test results. The steps to generate and view the reports are mentioned in the "Generate Reports" section above.

## Contributing

Feel free to open issues or submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project was Developed By `Abubakar Omolaja` - QA Automation Engineer from Nigeria.
