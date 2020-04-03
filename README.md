# xbank

## Installation

First you need to fork this repo, then Clone your own forked repo and install all dependencies.

- `git clone https://github.com/<YOUR GITHUB NAME >/xbank.git`
- `cd client` then `npm install` to install all dependencies for the client (React)
- `npm run start` to start React scripts
- `cd ..` to go back to root directory
- then `npm install` to install dependencies for the server
- `npm start` to start the server

# ENV SETUP INSTRUCTION

- You must setup environment variable to run the app, to do that, create a new file `.env`  
  Copy the content of `.env_example` into `.env`. Please don't rename, copy instead.
  Edit the content to suit your needs

## CODING INSTRUCTION

- Understanding the folder structure.
  `server`: All codes must be written inside this sub folder depending on the task as explained below
  `route`: Contains all your route.
  `models`: Contain all the database schema/models
  `controller`: Contains functions that calls the route
  `config`: Contains all the configs functions

* All database schema/models should be inside the models (`server/models`)

* Create and Use different branch for working on different feature/task.

* Send PR (Pull Request) to the `develop` branch.

* Branch Flow:
  `master`: Contain the clean working code.
  `develop`: New feature_branch must be created from this branch
  `feature_branch`: You must create a new branch when starting a new feature from the develop branch
  git branch develop
  git checkout -b login_feature

* No adjustment should be made to the `app.js` in the root directory or any other files in the root directory.
  All changes should be done inside the `server` folder.

* Environment variables should be entered into the .env file instead.
  The environment variable set can be access in your node app using process.env.VARABLE_NAME
  Please dont rename the `.env_example` to `.env`, copy instead
