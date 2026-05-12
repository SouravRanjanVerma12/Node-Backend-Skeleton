const multer = require('multer');

const {
    CloudinaryStorage
} = require('multer-storage-cloudinary');

const cloudinary = require('../config/cloudinary');


// cloudinary storage config
const storage = new CloudinaryStorage({

    cloudinary,

    params: {

        folder: 'backend_uploads',

        allowed_formats: ['jpg', 'png', 'jpeg']

    }

});


// multer setup
const upload = multer({ storage });

module.exports = upload;