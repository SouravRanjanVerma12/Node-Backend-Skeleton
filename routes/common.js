const express = require('express');
const router = express.Router();
const app = express();

const { addUser ,UpdateUser ,DeleteUser,GetUsers  } = require('../controllers/commonController');

// const { authMiddleware } = require('../middleware/authMiddleware');
// app.use('/login',authMiddleware )


router.post('/create', addUser);

router.put('/create', UpdateUser);
router.delete('/create', DeleteUser);
router.get('/create', GetUsers);


module.exports = router;