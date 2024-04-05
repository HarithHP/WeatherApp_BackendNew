const mongoose = require ('mongoose')
const Schema=mongoose.Schema

const studentSchema= new Schema({
    sID:{
        type: String
    },

    firstName:{
        type: String
    },

    lastName:{
        type: String
    },

    birthday:{
        type: Date
    },

    address:{
        type: String
    },

    contactNumber:{
        type: String
    },

    department:{
        type: String
    },

    course:{
        type: String
    },

});

const Student = mongoose.model("Student",studentSchema)
module.exports=Student;