const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = "mysecretkey";
const User = require('../models/User');
const transporter = require('../config/mail');
require('dotenv').config();


exports.signup = async (req, res) => {

    const { email, password, role } = req.body;

    try {


        if (!email || !password || !role) {

            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // allowed roles
        const allowedRoles = ['admin', 'collector'];

        if (!allowedRoles.includes(role)) {

            return res.status(400).json({
                message: "Invalid role"
            });
        }

        // password validation
        if (password.length < 6) {

            return res.status(400).json({
                message: "Password must be at least 6 characters"
            });
        }

        // check existing user
        const existingUser =
            await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                message: "User already exists"
            });
        }

        // hash password
        const hashedPassword =
            await bcrypt.hash(password, 10);

        // create user
        const newUser = await User.create({

            email,

            password: hashedPassword,

            role

        });

        // response
        res.status(201).json({

            message: "User created successfully",

            user: {
                id: newUser._id,
                email: newUser.email,
                role: newUser.role
            }

        });

    } catch (error) {

        res.status(500).json({

            message: "Something went wrong",

            error: error.message

        });

    }
};

exports.login = async (req, res) => {

    const { email, password } = req.body;

    try {

        // find user
        const user = await User.findOne({ email });

        console.log('userrrrr', user);

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });
        }

        // compare password
        const isMatch =
            await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return res.status(401).json({
                message: "Invalid credentials"
            });
        }

        // access token
        const accessToken = jwt.sign(

            {
                id: user._id,
                role: user.role
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "15m"
            }
        );

        // refresh token
        const refreshToken = jwt.sign(

            {
                id: user._id
            },

            process.env.REFRESH_SECRET,

            {
                expiresIn: "7d"
            }
        );

        // save refresh token in DB
        await User.updateOne(

            { _id: user._id },

            { refreshToken: refreshToken }

        );

        // response
        res.json({
            message: "Login successful",
            accessToken,
            refreshToken
        });

    } catch (error) {

        res.status(500).json({

            message: "Login error",

            error: error.message

        });

    }
};

exports.changePassword = async (req, res) => {

    const { email, newPassword } = req.body;

    try {

        // find user
        const user = await User.findOne({ email });

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });
        }

        // check verified
        if (!user.isVerified) {

            return res.status(400).json({
                message: "OTP verification required"
            });
        }

        // hash new password
        const hashedPassword =
            await bcrypt.hash(newPassword, 10);

        // update password
        user.password = hashedPassword;

        // optional reset verification
        user.isVerified = false;

        // save
        await user.save();

        res.json({
            message: "Password changed successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to change password",
            error: error.message
        });

    }
};

exports.sendOtp = async (req, res) => {

    const { email } = req.body;

    try {

        // generate otp
        const otp =
            Math.floor(100000 + Math.random() * 900000).toString();

        // expiry = current time + 5 min
        const otpExpiry =
            new Date(Date.now() + 5 * 60 * 1000);

        // find user
        let user = await User.findOne({ email });

        // if user not exists create one
        if (!user) {

            user = await User.create({
                email,
                password: "tempPassword"
            });
        }

        // store otp in DB
        user.otp = otp;

        user.otpExpiry = otpExpiry;

        await user.save();

        // send email
        await transporter.sendMail({

            from: process.env.EMAIL_USER,

            to: email,

            subject: "Your OTP",

            text: `Your OTP is ${otp}`

        });

        res.json({
            message: "OTP sent successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Failed to send OTP",
            error: error.message
        });

    }
};

exports.verifyOtp = async (req, res) => {

    const { email, otp } = req.body;

    try {

        // find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({
                message: "User not found"
            });
        }

        // check otp
        if (user.otp !== otp) {

            return res.json({
                message: "Invalid OTP"
            });
        }

        // check expiry
        if (new Date() > user.otpExpiry) {

            return res.json({
                message: "OTP expired"
            });
        }

        // mark verified
        user.isVerified = true;

        // clear otp
        user.otp = null;

        user.otpExpiry = null;

        await user.save();

        res.json({
            message: "OTP verified successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Verification failed",
            error: error.message
        });

    }
};
exports.refreshToken = async (req, res) => {

    const { refreshToken } = req.body;

    if (!refreshToken) {

        return res.status(401).json({
            message: "Refresh token required"
        });
    }

    try {

        // verify refresh token
        const decoded = jwt.verify(

            refreshToken,

            process.env.REFRESH_SECRET
        );

        // generate new access token
        const accessToken = jwt.sign(

            {
                id: decoded.id
            },

            process.env.JWT_SECRET,

            {
                expiresIn: '15m'
            }
        );

        res.json({
            accessToken
        });

    } catch (error) {

        res.status(403).json({
            message: "Invalid refresh token"
        });

    }
};

