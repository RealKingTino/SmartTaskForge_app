const express = require('express')
const connectDB = require('./db/connectdb')

require('dotenv').config()

const port = 3000;

const app = express();

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();