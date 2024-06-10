# SmartTaskForge API Documentation

## Overview
This documentation provides an overview of the API endpoints for the SmartTaskForge application. Each route is protected by authentication middleware.

## API Endpoints

### Board Routes
- **Create a new board**
  - **URL:** `/api/boards`
  - **Method:** `POST`
  - **Headers:** 
    - `Authorization: Bearer <token>`
  - **Body Parameters:**
    - `name` (string): Name of the board
    - `bgcolor` (string): Background color of the board
  - **Responses:**
    - `201 Created`: Board created successfully
    - `401 Unauthorized`: Authentication required

- **Get all boards**
  - **URL:** `/api/boards`
  - **Method:** `GET`
  - **Headers:** 
    - `Authorization: Bearer <token>`
  - **Responses:**
    - `200 OK`: List of boards
    - `401 Unauthorized`: Authentication required

- **Get a specific board by ID**
  - **URL:** `/api/boards/:id`
  - **Method:** `GET`
  - **Headers:** 
    - `Authorization: Bearer <token>`
  - **Responses:**
    - `200 OK`: Board details
    - `401 Unauthorized`: Authentication required
    - `404 Not Found`: Board not found

### Label Routes
- **Create a new label**
  - **URL:** `/api/labels`
  - **Method:** `POST`
  - **Headers:** 
    - `Authorization: Bearer <token>`
  - **Body Parameters:**
    - `name` (string): Name of the label
    - `color` (string): Color of the label
  - **Responses:**
    - `201 Created`: Label created successfully
    - `401 Unauthorized`: Authentication required

- **Get all labels**
  - **URL:** `/api/labels`
  - **Method:** `GET`
  - **Headers:** 
    - `Authorization: Bearer <token>`
  - **Responses:**
    - `200 OK`: List of labels
    - `401 Unauthorized`: Authentication required

- **Get a specific label by ID**
  - **URL:** `/api/labels/:id`
  - **Method:** `GET`
  - **Headers:** 
    - `Authorization: Bearer <token>`
  - **Responses:**
    - `200 OK`: Label details
    - `401 Unauthorized`: Authentication required
    - `404 Not Found`: Label not found

### List Routes
- **Create a new list**
  - **URL:** `/api/lists`
  - **Method:** `POST`
  - **Headers:** 
    - `Authorization: Bearer <token>`
  - **Body Parameters:**
    - `title` (string): Title of the list
    - `boardId` (string): ID of the board the list belongs to
  - **Responses:**
    - `201 Created`: List created successfully
    - `401 Unauthorized`: Authentication required

- **Get all lists**
  - **URL:** `/api/lists`
  - **Method:** `GET`
  - **Headers:** 
    - `Authorization: Bearer <token>`
  - **Responses:**
    - `200 OK`: List of lists
    - `401 Unauthorized`: Authentication required

- **Get a specific list by ID**
  - **URL:** `/api/lists/:id`
  - **Method:** `GET`
  - **Headers:** 
    - `Authorization: Bearer <token>`
  - **Responses:**
    - `200 OK`: List details
    - `401 Unauthorized`: Authentication required
    - `404 Not Found`: List not found

### Task Routes
- **Create a new task**
  - **URL:** `/api/tasks`
  - **Method:** `POST`
  - **Headers:** 
    - `Authorization: Bearer <token>`
  - **Body Parameters:**
    - `title` (string): Title of the task
    - `listId` (string): ID of the list the task belongs to
  - **Responses:**
    - `201 Created`: Task created successfully
    - `401 Unauthorized`: Authentication required

- **Get all tasks**
  - **URL:** `/api/tasks`
  - **Method:** `GET`
  - **Headers:** 
    - `Authorization: Bearer <token>`
  - **Responses:**
    - `200 OK`: List of tasks
    - `401 Unauthorized`: Authentication required

- **Get a specific task by ID**
  - **URL:** `/api/tasks/:id`
  - **Method:** `GET`
  - **Headers:** 
    - `Authorization: Bearer <token>`
  - **Responses:**
    - `200 OK`: Task details
    - `401 Unauthorized`: Authentication required
    - `404 Not Found`: Task not found

### User Routes
- **Register a new user**
  - **URL:** `/api/users/register`
  - **Method:** `POST`
  - **Body Parameters:**
    - `name` (string): Name of the user
    - `email` (string): Email of the user
    - `password` (string): Password of the user
  - **Responses:**
    - `201 Created`: User registered successfully
    - `400 Bad Request`: Validation error

- **Login a user**
  - **URL:** `/api/users/login`
  - **Method:** `POST`
  - **Body Parameters:**
    - `email` (string): Email of the user
    - `password` (string): Password of the user
  - **Responses:**
    - `200 OK`: Login successful, returns JWT token
    - `400 Bad Request`: Invalid credentials

- **Get user profile**
  - **URL:** `/api/users/profile`
  - **Method:** `GET`
  - **Headers:** 
    - `Authorization: Bearer <token>`
  - **Responses:**
    - `200 OK`: User profile details
    - `401 Unauthorized`: Authentication required
