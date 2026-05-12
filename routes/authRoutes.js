const express = require('express');
const router = express.Router();
const app = express();
const { authMiddleware } = require('../middleware/authMiddleware')
const { otpLimiter } = require('../middleware/rateLimiter');

const { signup, login, verifyOtp, sendOtp, changePassword , refreshToken} = require('../controllers/authController');

// const { authMiddleware } = require('../middleware/authMiddleware');
// app.use('/login',authMiddleware )

router.post('/signup', signup);
router.post('/login', login , otpLimiter);
router.post('/send-otp', authMiddleware, otpLimiter , sendOtp);
router.post('/refresh-Token', otpLimiter , refreshToken);
router.post('/verify-otp', authMiddleware, verifyOtp);
router.post('/change-password', authMiddleware, changePassword);

module.exports = router;