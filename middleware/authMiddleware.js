const jwt = require('jsonwebtoken');
const User = require('../models/User')

const SECRET = "mysecretkey";

exports.authMiddleware = async (req, res, next) => {

    const token = req.headers.authorization;
    // console.log(token)
    if (!token) {
        return res.status(401).json({ message: "No token" });
    }

    try {
        const decoded = jwt.verify(token, SECRET);

        req.user = decoded;

        let id = req.user.id
        const ExistUser = await User.findById(id)


        if (!ExistUser) {
            
            res.status(401).json({ message: "Invalid token" });
        }
       
        next();

    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};