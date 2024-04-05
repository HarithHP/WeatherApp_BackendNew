const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weatherCastSchema = new Schema({
    districtId: {
        type: String
    },

    districtName: {
        type: String
    },

    temperature: {
        type: Number
    },

    humidity: {
        type: Number
    },

    airPressure: {
        type: Number
    },

    dateTime: {
        type: String
    },

    isExpired: {
        type: Boolean,
        default: false
    }
});

const WeatherCast = mongoose.model("WeatherCast", weatherCastSchema);
module.exports = WeatherCast;
