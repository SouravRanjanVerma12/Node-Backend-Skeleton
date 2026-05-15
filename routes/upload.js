const express = require('express');

const router = express.Router();

const { imageUpload, fileUpload } = require('../middleware/upload');

const { uploadCSV, uploadXLSX } = require('../controllers/fileController');


// ---------------- IMAGE UPLOAD ----------------

router.post(

    '/upload',

    imageUpload.single('image'),

    (req, res) => {

        res.json({

            message: "Image uploaded successfully",

            imageUrl: req.file.path

        });

    }
);


// ---------------- CSV UPLOAD ----------------

router.post(

    '/upload-csv',

    fileUpload.single('file'),

    uploadCSV
);


// ---------------- XLSX UPLOAD ----------------

router.post(

    '/upload-xlsx',

    fileUpload.single('file'),

    uploadXLSX
);


module.exports = router;