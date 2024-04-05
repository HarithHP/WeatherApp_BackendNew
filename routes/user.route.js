const express = require ('express');
const { login,signup } = require('../controllers/user.controller');
const {verifyJWT} = require('../middleware/verifyJWT');
const router=express.Router();

//signup route
router.post('/signup',signup);

//login route
router.post('/login',login);

module.exports = router;