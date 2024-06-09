// server.js
require('dotenv').config();
console.log('Environment Variables:', process.env);

const express = require('express');
const connectDB = require('./db/connectdb');

const userRoutes = require('./routes/userRoutes');
const boardRoutes = require('./routes/boardRoutes');
const taskRoutes = require('./routes/taskRoutes');
const labelRoutes = require('./routes/labelRoutes');
const listRoutes = require('./routes/listRoutes');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

// Middleware
app.use(express.json()); // For parsing application/json

// Log environment variable to ensure it's being read correctly
console.log("MONGO_URI:", process.env.MONGO_URI);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/boards', boardRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/labels', labelRoutes);
app.use('/api/lists', listRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
