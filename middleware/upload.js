const multer = require('multer');

const {
    CloudinaryStorage
} = require('multer-storage-cloudinary');

const cloudinary =
    require('../config/cloudinary');


// -------------------
// CLOUDINARY STORAGE
// -------------------

const imageStorage =
    new CloudinaryStorage({

        cloudinary,

        params: {

            folder: 'backend_uploads',

            allowed_formats: [
                'jpg',
                'png',
                'jpeg'
            ]

        }

    });


// image upload middleware
const imageUpload =
    multer({

        storage: imageStorage

    });


// -------------------
// CSV/XLSX STORAGE
// -------------------

const fileStorage =
    multer.diskStorage({

        destination: (req, file, cb) => {

            cb(null, 'uploads/');
        },

        filename: (req, file, cb) => {

            cb(
                null,

                Date.now() + '-' +
                file.originalname
            );
        }

    });


// csv/xlsx upload middleware
const fileUpload =
    multer({

        storage: fileStorage
    });
console.log("FILE UPLOAD =>", fileUpload);


// exports
module.exports = {

    imageUpload,

    fileUpload

};