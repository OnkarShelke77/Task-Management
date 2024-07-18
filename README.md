## Task Management Application##

1. Prerequisites
Node.js
NPM
Git
Heroku CLI
Netlify CLI

2. Project Setup

Backend Setup:

cd backend
Update config/config.json with your database credentials.
Create Express Application.
Set Up Server.
Create Task Controller and Routes.

Frontend Setup:
cd frontend
Create React Components:

Run Backend and Frontend:

# Backend
cd backend
node src/server.js

# Frontend
cd frontend
npm start

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

