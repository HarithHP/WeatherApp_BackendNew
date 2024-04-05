const express = require ('express');
const { addStudent, getStudentById, getAllStudents } = require('../controllers/student.controller');
const {verifyJWT} = require('../middleware/verifyJWT');
const router=express.Router();

//route for add student
router.post('/addstudent',verifyJWT,addStudent)

//route for get one student
router.get('/getstudent/:id',verifyJWT,getStudentById)

//route for get all students
router.get('/getallstudents',verifyJWT,getAllStudents)

module.exports = router