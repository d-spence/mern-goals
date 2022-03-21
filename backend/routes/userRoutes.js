const express = require('express');
const router = express.Router();
const {
  getUser,
  registerUser,
  loginUser,
  logoutUser,
} = require('../controllers/userController');

router.post('/me', getUser);
router.post('/', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router;