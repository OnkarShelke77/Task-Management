Task Management Application

Summary
This project is a basic Task Management Application built using Node.js with Express for the backend and React for the frontend. The backend uses Sequelize as the ORM for database operations, and the frontend includes various components to handle task creation, display, update, and deletion. The application is deployed using Heroku for the backend and Netlify for the frontend.

Assumptions:

Database: The project assumes the use of a MySQL database, and the database credentials need to be configured accordingly.

Environment: The development environment includes Node.js, NPM, Git, Heroku CLI, and Netlify CLI.

Deployment: The backend and frontend are deployed on separate platforms.

API Integration: The frontend communicates with the backend via a proxy setup to handle API requests.

Prerequisites:
Node.js
NPM
Git
Heroku CLI
Netlify CLI

2. Project Setup

Backend Setup:

1.Navigate to the backend directory: cd backend

2.Update config/config.json with your database credentials.

3.Create Express Application:
Set up the server in src/server.js
Create Task controller in src/controllers/taskController.js
Create Task routes in src/routes/taskRoutes.js

4.Run the backend server:
node src/server.js


Frontend Setup:
1.Navigate to the frontend directory:

2.Create React Components:
TaskForm: src/components/TaskForm.js
TaskItem: src/components/TaskItem.js
TaskList: src/components/TaskList.js

3.Start the frontend development server:

4.Run the backend server: npm start

##Project Structure##

task-management-app/
├── backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── taskController.js
│   │   ├── models/
│   │   │   └── task.js
│   │   ├── routes/
│   │   │   └── taskRoutes.js
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
└── frontend/
    ├── node_modules/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── TaskForm.js
    │   │   ├── TaskItem.js
    │   │   └── TaskList.js
    │   ├── App.js
    │   ├── index.js
    │   └── App.css
    ├── .env
    ├── package.json
    ├── package-lock.json
    └── README.md


Conclusion:

This Task Management Application provides a simple yet effective solution for managing tasks. The combination of a Node.js backend and a React frontend, along with deployments on Heroku and Netlify, demonstrates a full-stack approach to web application development.


