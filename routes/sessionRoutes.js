const express = require('express');
const router = express.Router();
const { bookSession } = require('../controllers/sessionController');

router.post('/', bookSession);

module.exports = router;
