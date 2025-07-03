const express = require('express');
const router = express.Router();

// ⛔ Check this line:
const { registerUser, loginUser } = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
