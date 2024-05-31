# Smart Task Forge Backend

This repository contains the backend code for Smart Task Forge, a cutting-edge task management system designed to revolutionize the way teams collaborate and accomplish their goals.

## Project Structure

.
├── db
│ └── connectdb.js
├── models
│ └── user.js
├── controllers
│ └── userController.js
├── routes
│ └── userRoutes.js
├── server.js
├── .env
└── README.md


## Overview

### Database Connection

The `connectdb.js` file in the `db` directory is responsible for connecting to the MongoDB database using Mongoose. It logs the connection status and exits the process if the connection fails.

### Models

The `models` directory contains the `user.js` file which defines the User schema using Mongoose.

### Controllers

The `controllers` directory contains the `userController.js` file which includes functions for handling user-related operations such as creating a user and retrieving all users.

### Routes

The `routes` directory contains the `userRoutes.js` file which defines the routes for user-related API endpoints.

### Server

The `server.js` file initializes the Express application, connects to the MongoDB database, sets up middleware, and defines the routes for the application.

## Setup and Installation

### Prerequisites

- Node.js installed on your machine
- MongoDB Atlas account for a cloud-based MongoDB instance or a local MongoDB server

### Steps

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/smart-task-forge.git
    cd smart-task-forge
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root directory and add your MongoDB URI:

    ```env
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
    ```

4. **Run the server**:

    ```bash
    node server.js
    ```

    You should see the following output if everything is set up correctly:

    ```bash
    MONGO_URI: mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
    Connecting to MongoDB with URI: mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
    MongoDB connected successfully
    Server is listening on port 3000...
    ```

## API Endpoints

- **Create a User**: `POST /api/users`
- **Get All Users**: `GET /api/users`

### Example Usage

#### Create a User

```bash
curl -X POST http://localhost:3000/api/users -H "Content-Type: application/json" -d '{"username": "john_doe", "email": "john@example.com", "password": "password123"}'

# Get All Users
curl http://localhost:3000/api/users

# Troubleshooting

If you encounter issues with connecting to MongoDB, ensure that your MongoDB URI is correct and that your MongoDB server is running.
