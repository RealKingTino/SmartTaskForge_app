const User = require('../models/User');
const bcrypt = require('bcrypt'); // Assuming you're using bcrypt for hashing

const { MongoClient } = require('mongodb'); // Assuming you're using the official MongoDB driver

const connectDB = require('./db/connectdb')
require('dotenv').config()

class UsersController {
  static async postNew(req, res) {
    const { email } = req.body;
    const { password } = req.body;

    if (!email) {
      res.status(400).json({ error: 'Missing email' });
      return;
    }
    if (!password) {
      res.status(400).json({ error: 'Missing password' });
      return;
    }

    const client = await MongoClient.connect(MONGO_URI);
    const db = client.db();
    const usersCollection = db.collection('users');

    try {
      const existingUser = await usersCollection.findOne({ email });
      if (existingUser) {
        res.status(400).json({ error: 'Already exists' });
        return;
      }

      // Consider using a secure hashing algorithm like bcrypt instead of sha1
      const hashedPwd = await bcrypt.hash(password, 10); // Assuming you've installed bcrypt

      const newUser = {
        email,
        password: hashedPwd,
      };

      const result = await usersCollection.insertOne(newUser);
      res.status(201).json({ id: result.insertedId, email });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    } finally {
      await client.close(); // Close the MongoDB connection
    }
  }

  static async getMe(req, res) {
    // Since there's no authentication, you can't retrieve user information
    // Consider making this endpoint require authentication in a real application
    res.status(401).json({ error: 'Unauthorized (Authentication not implemented)' });
  }
}

module.exports = UsersController;

