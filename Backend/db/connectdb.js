const mongoose = require('mongoose');

const connectDB = async (url) => {
  try {
    console.log("Connecting to MongoDB with URI:", url);
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;