const express = require ('express');
const { addWeatherRecord,deleteWeatherRecord,getExpiredWeatherForecasts,getNonExpiredWeatherForecasts,deleteAllWeather } = require('../controllers/weatherCast.controller');
const {verifyJWT} = require('../middleware/verifyJWT');
const {verifyAuthKey}= require('../middleware/verifyAuthKey');
const { nanoid } = require("nanoid");

// To this:
import("nanoid/non-secure").then(({ nanoid }) => {
    // Now you can use nanoid here
}).catch(error => {
    // Handle any potential errors with the dynamic import
    console.error("Error importing nanoid:", error);
});

const router=express.Router();

// Add weather record route
/**
 * @swagger
 * /addrecord:
 *   post:
 *     summary: Add a new weather record
 *     description: Add a new weather record to the database
 *     tags: [Weather]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               temperature:
 *                 type: number
 *               humidity:
 *                 type: number
 *               airPressure:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Successfully added weather record
 *       '400':
 *         description: Bad request. Missing or invalid parameters
 *       '401':
 *         description: Unauthorized. Missing or invalid authentication
 */
router.post('/addrecord', verifyAuthKey, addWeatherRecord);

// Delete weather record route
/**
 * @swagger
 * /delete/{id}:
 *   delete:
 *     summary: Delete a weather record
 *     description: Delete a weather record by its ID
 *     tags: [Weather]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the weather record to delete
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successfully deleted weather record
 *       '401':
 *         description: Unauthorized. Missing or invalid authentication
 *       '404':
 *         description: Weather record not found
 */
router.delete('/delete/:id', verifyJWT, deleteWeatherRecord);

// Delete all weather records route
/**
 * @swagger
 * /delete:
 *   delete:
 *     summary: Delete all weather records
 *     description: Delete all weather records from the database
 *     tags: [Weather]
 *     responses:
 *       '200':
 *         description: Successfully deleted all weather records
 *       '401':
 *         description: Unauthorized. Missing or invalid authentication
 */
router.delete('/delete', verifyAuthKey, deleteAllWeather);

// Get expired weather forecasts route
/**
 * @swagger
 * /getexpired:
 *   get:
 *     summary: Get expired weather forecasts
 *     description: Retrieve expired weather forecasts from the database
 *     tags: [Weather]
 *     responses:
 *       '200':
 *         description: Successfully retrieved expired weather forecasts
 *       '401':
 *         description: Unauthorized. Missing or invalid authentication
 */
router.get('/getexpired', verifyJWT, getExpiredWeatherForecasts);

// Get non-expired weather forecasts route
/**
 * @swagger
 * /getnonExpired:
 *   get:
 *     summary: Retrieve Non-Expired Weather Forecasts
 *     description: Get weather forecasts that are not expired from the database
 *     tags:
 *       - Weather
 *     parameters:
 *       - in: header
 *         name: Authorization
 *         schema:
 *           type: string
 *         required: true
 *         description: JWT token for authorization.
 *     responses:
 *       '200':
 *         description: Successfully retrieved non-expired weather forecasts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 temperature:
 *                   type: number
 *                   description: The temperature in Celsius
 *                   example: 28
 *                 humidity:
 *                   type: number
 *                   description: The humidity percentage
 *                   example: 75
 *                 airPressure:
 *                   type: number
 *                   description: The air pressure in millibars
 *                   example: 1013
 *                 dateTime:
 *                   type: string
 *                   description: The date and time of the forecast
 *                   example: "2024-04-05T15:45:00Z"
 *                 isExpired:
 *                   type: boolean
 *                   description: Indicates if the forecast is expired
 *                   example: false
 *       '401':
 *         description: Unauthorized. Missing or invalid authentication
 */
router.get('/getnonExpired', verifyJWT, getNonExpiredWeatherForecasts);



module.exports = router;