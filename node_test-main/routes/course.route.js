const express = require ('express');
const { addCourse, getAllCourse } = require('../controllers/course.controller');
const {verifyJWT} = require('../middleware/verifyJWT');

const router=express.Router();

//route for add course
router.post('/addcourse',addCourse)

//route for get all course
router.get('/getallcourse',getAllCourse)

module.exports = router