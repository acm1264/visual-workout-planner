# Visual Workout Planner
##### Table of Contents
* [About](#about)
* [Setup](#setup)
* [App Functionality](#app-functionality)
* [File Organization](#file-organization)
* [React Testing](#react-testing)
* [Working with Netlify and FaudaDB Database](#working-with-netlify-and-faudadb-database)
## About
The visual workout planner is a single-page React web application made by Andrew Maurice, Tram Doan, Chad Bealer, Jeremy Choyce, and Caitlin Burke. This app is the team's 2021 Senior Capstone project.

This web application, hosted at https://visual-workout-planner.netlify.app/, is designed to organize exercises based on muscle categories for anyone, novice or expert, to use when planning their workouts. The app features two SVG models of the human body muscular structure, where each muscle can be clicked to show/hide exercises using that muscle.

The exercise details are stored in a custom database our team designed using (TO BE DETERMINED). 

**NOTE**: This project was made for educational purposes only. As our team was learning to use React while making this app, the amount of detail in some sections of the Readme may be extra thorough and specific (such as describing how to install the project with each npm command) and, in some cases, more related to tips on using React. This project was made based off of the create-react-app learning template, which handles some of the base foundations to allow for us to focus on learning how to use React and make the content for the app.

## Setup
1. To run the React web app locally, npm will be required, which can be downloaded from [here](https://www.npmjs.com/get-npm).
2. With npm installed, run the command `npm install` to setup any necessary dependencies (this only needs to be done the first time the code is pulled from Github to setup certain files). 
3. To run the react app locally WITHOUT database, use `npm start`, else `netlify dev`* to establish FaunaDB connection.While working on code, you can run this command and leave it running in the terminal. With it running, every time you save a file, it will automatically update the running version in your browser. NOTE: some files, like package.json, require the command to be re-run for changes to apply properly
4. To setup new changes for being deployed for visibility to anyone looking at the website, run `npm run build` to create a build of the current project.

*The netilfy command requires additional setup to get access to the DB. Because access requires password info, it will not be listed on here. The following commands will need to be run in order to get everything setup if you have the account info:
```
npm i -g netlify-cli
netlify login

npm i -g fauna-shell
fauna cloud-login

netlify init
```
When running `netlify init`, request it to use the site hosted at the repo in order to establish the connection properly.

## App Functionality
PLACEHOLDER

## File Organization
Types of files are organized into folders as described:

### public
This directory is the root of the project. It contains information about the favicon (including size options as .png files and where to use these icons specified in `manifest.json`).

The root of the application is `index.html`. React will build the page into this file, but this file specifies where React should insert certain pieces of content (HTML). 

### src
This directory contains the React components for the project. Naming should be kept consistent per React component, where the .css, .js, .test.js, and any other files for a React component should all have the same name. 

Categories of files:
- **index**: This category manages the conversion of content from other src files to be displayed in the /public/index.html when the React app is running.
- **App**:
- **MuscleStructure**:
- **ExerciseDisplay**:


## React Testing
Testing is setup using Jest where any files with the extension `.spec.js` or `test.js` can contain unit tests. Unit tests for the entire system can be run with the command `npm test`.
- Currently, only a default test is setup under `App.test.js` as an example.

## Behavior Testing with Cucumber
- Set up:
Use 'npm install cucumber' to install the cucumber modules.
Use 'npm install selenium-webdriver' to install selenium for browser automation.
Check that chromedriver.exe is in directory of files and is the current version.
- File Locations:
Feature Files written in Gherkin are located under the features folder.
Step Definitions for each feature file is located in the stepDefinition folder. 
- To run tests:
Use '.\node_modules\.bin\cucumber-js .\features' to run all tests in terminal.
Use '.\node_modules\.bin\cucumber-js .\features\Filename.feature' to run one specific test in terminal.

## Working with Netlify and FaudaDB Database
Below are some means of working in react code with the Database hosted on FaunaDB.
### Add Function
To add a function to the code, run `netlify functions:create name` where "name" is the name of the function. This will prompt you with beign able to make the file form a template. You can then find the file to edit in the "functions" directory. The follow import lines of code MUST be at the top of the file:
```
const faunadb = require('faunadb');
const faunaClient = new faunadb.Client({ secret: process.env.FAUNADB_SERVER_SECRET });
const q = faunadb.query;
```
