# CodingExercise-Rhipe

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)

### This is a coding exercise. The framework is developed with Cypress and Cucumber (BDD style).

  - The source code is under cypress directory. Feature file is located under cypress -> integration folder.
  - The step definitions are located under cypress -> support -> step_Definitions folder.
  - The page objects are located under cypress -> page-objects.
  - The artifacts of the run are generated under reports -> cucumber folder.

## Steps to Run the suite

Suite requires git to checkout code repository.
Suite requires [Node.js](https://nodejs.org/) v10 or v12 or above.
Suite also requires chrome v86 or above to be installed on the system where it is run from.

#### Step 1 - Source Code checkout
clone the remote repository to the local environment. 
```sh
$ git clone https://github.com/parth153/CodingExercise-Rhipe.git
```
#### Step 2 - Install dependencies
Install the dependencies
```sh
$ npm install
```
#### Step 3 - Run the test script
The test runs in headless mode with google chrome browser and resolution set as macbook-13 (1280 x 800).
Video of the run can be found under reports -> cucumber in mp4 format. If the test fails 
The screenshot of the failure will be stored under reports -> cucumber -> feature named folder. 
```sh
$ npm run signUp:macbook13:chrome
```
#### Step 4 - Report Generation
Generate Report - The script generates html report 'index.html' under reports -> cucumber.
```sh
$ npm run generate:report
```
