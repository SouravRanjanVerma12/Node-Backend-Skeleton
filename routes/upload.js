const express = require('express');

const router = express.Router();

const upload = require('../middleware/upload');


// upload image
router.post(
    '/upload',
    upload.single('image'),

    (req, res) => {

        res.json({

            message: "Image uploaded successfully",

            imageUrl: req.file.path

        });

    }
);



module.exports = router;