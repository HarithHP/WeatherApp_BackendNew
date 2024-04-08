const express = require ('express');
const { addDistrict,getAllDistricts,deleteDistrict} = require('../controllers/district.controller');
const {verifyJWT} = require('../middleware/verifyJWT');
const { nanoid } = require("nanoid");

// To this:
import("nanoid/non-secure").then(({ nanoid }) => {
    // Now you can use nanoid here
}).catch(error => {
    // Handle any potential errors with the dynamic import
    console.error("Error importing nanoid:", error);
});

const router=express.Router();

//add district route
router.post('/addDistrict',verifyJWT,addDistrict);

//get all districts route
router.get('/getDistricts',getAllDistricts);

//deleteDistrict route
router.delete('/delete/:id',verifyJWT,deleteDistrict);



module.exports = router;