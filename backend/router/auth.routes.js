const express = require('express');
const router = express.Router();
const signup = require('../controllers/signup');
const login = require('../controllers/login');
const getAuth = require('../controllers/getAuth');
const isVerifyAuth = require('../middleware/isVerifyAuth');


router.post('/signup', signup);
router.post('/login', login);
router.get('/getuser', isVerifyAuth, getAuth);

module.exports = router;