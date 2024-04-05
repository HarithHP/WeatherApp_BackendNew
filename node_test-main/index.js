const express = require ('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()
const cors = require ('cors')
const app = express();

const URL = process.env.MONGODB_URL;
const PORT = process.env.PORT||8070;

//create mongoose connection
                                        //npm run dev for server startup

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const connection = mongoose.connection;



app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//define routes 

app.use('/student',require('./routes/student.route'));

app.use('/course',require('./routes/course.route'));


connection.once("open",() =>{
    console.log("MongoDB connection succcessful");
})

app.listen(PORT, ()=>{
    console.log("Server is up and running");
});
