# Task Management API

A simple Node.js/Express API for task management.

## Setup Instructions
1. Clone the repo: `git clone https://github.com/Zubayer03Mahmud/task_management`
2. Install dependencies: `npm install`,`npm install express`
3. Run the server: `npm start`
4. Access at http://localhost:3000

## API Endpoints
- GET / : Returns "Task Management API is running!"
- GET /tasks : Returns list of all tasks
- GET /task/:id : Returns a single task by ID (or 404/400 errors)
- GET /health : Returns health status and uptime