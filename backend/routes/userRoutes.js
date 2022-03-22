const express = require('express');
const router = express.Router();
const {
  getUser,
  registerUser,
  loginUser,
  logoutUser,
} = require('../controllers/userController');

const { protect } = require('../middleware/authMiddleware');

router.get('/me', protect, getUser);
router.post('/', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router;