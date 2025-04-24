# Task Manager API

## Overview
This is a Node.js-based REST API for a task manager application. It allows users to:
- Register and log in
- Add, view, and delete tasks (user-specific)
- Use simple token-based authentication for securing API endpoints

This project utilizes in-memory data storage but can be extended to use file-based storage for persistent data.

## Features
- **User Registration:** `/api/register` (POST)
- **User Login:** `/api/login` (POST)
- **Task Management:**  
  - Add Task: `/api/tasks` (POST)  
  - View Tasks: `/api/tasks` (GET)  
  - Delete Task: `/api/tasks/:id` (DELETE)
- **Token-Based Authentication:**  
  - Token is returned on successful login  
  - Use token in the `Authorization` header for protected routes.

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
