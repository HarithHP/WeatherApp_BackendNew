const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const districtSchema = new Schema({
    districtId: {
        type: String
    },

    name: {
        type: String
    },

    province: {
        type: String
    }
});

const District = mongoose.model("District", districtSchema);
module.exports = District;
