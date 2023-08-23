## Project Title: Train N Track - Personal Trainer Workout Management Application

## Project Description: 

Train N Track is a workout application designed for personal trainers to effortlessly manage and track their clients' fitness journeys. This application will assist in providing a personalized fitness experience for each client. Personal trainers can keep their clients' workout plans updated and organized. Users can add, edit, or remove workout entries easily. Personal trainers can measure client performance over time by recording their goals. Trainers are also able to provide insight and make each workout personal by adding notes and comments to each entry. This application is designed to take the hassle out of managing client information so trainers can focus on providing an exceptional fitness experience.

## Getting Started:
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Prerequisites:
What you need to install the software and how to install them:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`


## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Built With:

Node.js - The server-side runtime environment.
Express - The web framework for building APIs.
React with Hooks, Redux, Sagas - Frontend libraries for building interactive user interfaces.
PostgreSQL - Relational database management system.
Heroku - Cloud platform for deploying, managing, and scaling applications.
CSS - Styling for the user interface.


## Authors:

Halima Omar - Initial work

