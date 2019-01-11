# WouldYouRather: An App game of preferences and popularity

This is the second project for the course Udacity React Nanodegree.

This app allows you to choose between two options for user-generated questions and then see what percentage of users has chosen those options. It's fun to see how other people;s choices compare to your own. You can also create your own questions.

All the data for the app is updated solely in the Redux store. 

## App Components

### login.js

Users must log in to use the app. For this project there are three users in the simulated .js database, and you login simply by clicking on a user. The project is about coding React, not building login scripts and databases.

### App.js

The App has three main pages: Home, Leaderboard and Add Question. App.js acts as a router to these pages. 

### Home.js

Here we see all the questions that have been created, in two nav tab categories of 'Answered' and 'Unanswered'. Users can click on any of these questions to either vote on a question or see detailed results.

### ViewQuestion.js

View the details of an answered question.

### VoteQuestion.js

The user can vote for one of the two options of question. 

### Leaderboard.js

This page displays the stats and ranking for all users: how many questions were created and answered for each user.

### AddQuestion.js

A user can create a new question by typing in two options. Then they are redirected to Home.js where they can answer the question.

### NotFound.js

If the user types an incorrect url, we redirect them to Not Found.

### actions / middleware / reducers folders

In these folders we set up all the Redux routing.

### utils folder

Here we have the __DATA.js file which is simulated database, and api.js which is used to access the public methods of the data file.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

Install all project dependencies

```
npm install
```

Start the development server

```
npm start
```
Go to http://localhost to view the /login page.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Built With

* [React](https://github.com/facebook/react)
* [React-redux](https://github.com/reduxjs/react-redux)
* [React Router](https://github.com/ReactTraining/react-router)
* [Redux-thunk](https://github.com/reduxjs/redux-thunk)
* [Node/npm](https://github.com/nodejs/node)

## Author

* **Adam Love**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

