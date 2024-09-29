# PERN Stack To-Do List App

This is a simple to-do list management application built using the PERN (PostgreSQL, Express, React, Node.js) stack.

![todo-icon](https://github.com/user-attachments/assets/875bdf2f-c184-45ef-9afd-a1b8a655c9a7)


## Features

- Create, read, update, and delete to-do items
- Responsive design for desktop and mobile devices

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- PostgreSQL (v12.0 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/pern-todo-app.git
   cd pern-todo-app
   ```

2. Install dependencies for the server:
   ```
   cd server
   npm install
   ```

3. Install dependencies for the client:
   ```
   cd ../client
   npm install
   ```

4. Set up the database:
   - Create a new PostgreSQL database
   - Update the `server/db.js` file with your database credentials


## Running the Application

1. Start the server:
   ```
   cd server
   npm start
   ```

2. In a new terminal, start the client:
   ```
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
pern-todo-app/
├── client/             # React frontend
│   ├── public/
│   ├── src/
│   └── package.json
├── server/             # Express backend
│   ├── db.js
│   ├── index.js
│   └── package.json
└── README.md
```

## API Endpoints

- GET /todos - Retrieve all todos
- POST /todos - Create a new todo
- PUT /todos/:id - Update a todo
- DELETE /todos/:id - Delete a todo

