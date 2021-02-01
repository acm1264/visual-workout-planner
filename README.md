# Visual Workout Planner
##### Table of Contents
* [About](#about)
* [Setup](#setup)
* [App Functionality](#app-functionality)
* [File Organization](#file-organization)
* [React Testing](#react-testing)
## About
The visual workout planner is a single-page React web application made by Andrew Maurice, Tram Doan, Chad Bealer, Jeremy Choyce, and Caitlin Burke. This app is the team's 2021 Senior Capstone project.

This web application, hosted at https://visual-workout-planner.netlify.app/, is designed to organize exercises based on muscle categories for anyone, novice or expert, to use when planning their workouts. The app features two SVG models of the human body muscular structure, where each muscle can be clicked to show/hide exercises using that muscle.

The exercise details are stored in a custom database our team designed using (TO BE DETERMINED). 

**NOTE**: This project was made for educational purposes only. As our team was learning to use React while making this app, the amount of detail in some sections of the Readme may be extra thorough and specific (such as describing how to install the project with each npm command) and, in some cases, more related to tips on using React. This project was made based off of the create-react-app learning template, which handles some of the base foundations to allow for us to focus on learning how to use React and make the content for the app.

## Setup
1. To run the React web app locally, npm will be required, which can be downloaded from [here](https://www.npmjs.com/get-npm).
2. With npm installed, run the command `npm install` to setup any necessary dependencies (this only needs to be done the first time the code is pulled from Github to setup certain files). 
3. Run `npm start` to setup a locally running build at any time. While working on code, you can run this command and leave it running in the terminal. With it running, every time you save a file, it will automatically update the running version in your browser.
4. To setup new changes for being deployed for visibility to anyone looking at the website, run `npm run build` to create a build of the current project.

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