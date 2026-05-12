const rateLimit = require('express-rate-limit');


// OTP limiter
exports.otpLimiter = rateLimit({

    windowMs: 1 * 60 * 1000,

    max: 3,

    message: {
        message: "Too many OTP requests. Try again later."
    }

});