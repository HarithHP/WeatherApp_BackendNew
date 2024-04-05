const express = require ('express');
const { addDistrict,getAllDistricts,deleteDistrict} = require('../controllers/district.controller');
const {verifyJWT} = require('../middleware/verifyJWT');
const router=express.Router();

//add district route
router.post('/addDistrict',verifyJWT,addDistrict);

//get all districts route
router.get('/getDistricts',getAllDistricts);

//deleteDistrict route
router.delete('/delete/:id',verifyJWT,deleteDistrict);



module.exports = router;