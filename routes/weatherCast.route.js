const express = require ('express');
const { addWeatherRecord,deleteWeatherRecord,getExpiredWeatherForecasts,getNonExpiredWeatherForecasts,deleteAllWeather } = require('../controllers/weatherCast.controller');
const {verifyJWT} = require('../middleware/verifyJWT');
const {verifyAuthKey}= require('../middleware/verifyAuthKey');
const router=express.Router();

//add weatehr route
router.post('/addrecord',verifyAuthKey,addWeatherRecord);

//deleteweather route
router.delete('/delete/:id',verifyJWT,deleteWeatherRecord);

//delete alll
router.delete('/delete',verifyAuthKey,deleteAllWeather);

//get expired weather forecast
router.get('/getexpired',verifyJWT,getExpiredWeatherForecasts);

//get non expired weather forecast
router.get('/getnonExpired',verifyJWT,getNonExpiredWeatherForecasts);

//delete should upon isactive false.
//delete, weatherdata add, key

//

module.exports = router;