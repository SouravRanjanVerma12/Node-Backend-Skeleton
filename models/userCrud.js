const mongoose = require('mongoose');

const userCrudSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,

        enum: ["active", "inactive"],
        default: "active"
    },
    sortBy: {
        type: String,
        enum: ["asc", "desc"],

    }



}, { timestamps: true });

module.exports = mongoose.model('UserCrud', userCrudSchema);