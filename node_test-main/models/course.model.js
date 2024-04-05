const mongoose = require ('mongoose')
const Schema=mongoose.Schema

const courseSchema= new Schema({
    cID:{
        type: String
    },

    department:{
        type: String
    },

    course:{
        type: String
    },

    fees:{
        type:Number
    },

    maxStudentCount:{
        type: Number
    }

});

const Course = mongoose.model("course",courseSchema)
module.exports=Course;