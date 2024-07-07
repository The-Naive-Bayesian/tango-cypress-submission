# Project Setup
## Prerequisites
This project assumes you have a relatively recent version of Node.js with `NPM` installed on your computer,
as well as `git`, and an internet connection.

This project can be cloned from github using `git clone git@github.com:The-Naive-Bayesian/tango-cypress-submission.git`,
assuming you have SSH enabled for GitHub.

## Installing Dependencies
To use this project, you will need to run  `npm install` to install the necessary dependencies.
This must be done before any subsequent steps.

## Setting Environmental Variables
Some tests in this suite use environmental variables for sensitive or configurable values.
These tests will fail if these values are not set.

To set these values, copy the `cypress/EXAMPLE.env.json` file, then change the values provided to fit your data.
For example, `accountEmail` should be updated with the email address of a test account set up for
email-based authentication, while `accountPassword` should be updated with that account's password.

# How To Run Tests
To run the tests in this project, use the `npx cypress open` command,
select `E2E Testing`, select the browser of your choice (this project was written with Chrome in mind),
and click the `Start E2E Testing` button. 

From there you will see a list of the tests written for this project and can run any of them by clicking
their name from the left navigation menu.
