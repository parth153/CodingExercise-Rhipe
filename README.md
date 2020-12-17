# CodingExercise-Rhipe

### This is a coding exercise. The framework is developed with Cypress and Cucumber (BDD style).
### The source code is under cypress directory. Feature file is located under cypress -> integration folder.
### The step definitions are located under cypress -> support -> step_Definitions folder.
### The page objects are located under cypress -> page-objects. 
### The artifacts of the run are generated under reports -> cucumber folder.

## Steps to Run the suite
### Prerequisuites - node version 12 and chrome version 86 or above....

### Step 1 - Install dependencies
####    with command - npm install. (Make sure there are no errors while installation)
### Step 2 - Run the test script 
####    'signUp:macbook13:chrome' with command - npm run signUp:macbook13:chrome. The test runs
####    in headless mode with google chrome browser and resolution set as macbook-13 (1280 x 800).
####    video of the run can be found under reports -> cucumber in mp4 format. If the test fails 
####    then the screenshot of the failure will be stored under reports -> cucumber -> feature named folder. 

### Step 3 - Run the Report Generator script
####    'generate:report' with command - npm run generate:report. The script generates html report 'index.html' under
####    reports -> cucumber.