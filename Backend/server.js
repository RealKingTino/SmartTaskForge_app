// server.js
const express = require('express');
const connectDB = require('./db/connectdb.js');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes.js');
const boardRoutes = require('./Backend/routes/boardRoutes.js');
const taskRoutes = require('./routes/taskRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // For parsing application/json

// Log environment variable to ensure it's being read correctly
console.log("MONGO_URI:", process.env.MONGO_URI);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/boards', boardRoutes);
app.use('/api/tasks', taskRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
