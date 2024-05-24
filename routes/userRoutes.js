// routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController.js');
const authMiddleware = require('../middleware/auth.js');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser); // Ensure loginUser is properly imported
router.get('/profile', authMiddleware, getUserProfile); // Ensure getUserProfile is properly imported and authMiddleware is in place

module.exports = router;