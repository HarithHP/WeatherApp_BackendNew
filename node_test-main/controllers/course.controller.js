const Course = require ('../models/course.model')

//add course to the system
const addCourse=async(req,res)=>{

    const courseData = req.body;

    //find the course if already on the system
    await Course.findOne({cID:courseData.cID})
        .then(course=>{
            if(course){
                res.status(200).json({
                    message:"course already exists"
                })
            }else{
                const newCourse = new Course(courseData);

                newCourse.save()
                    .then(course=>{
                        res.status(201).json({
                            message:"course successfully added to the system",
                        })
                    }).catch(err=>{
                        res.status(500).json({
                            message:"Error adding course"
                        })
                    })
            }
        }).catch(err=>{
            res.status(500).json({
                message:"Error adding course"
            })
        })
}

//get all the course details

const getAllCourse = async (req, res) => {

    try {

      const course = await Course.find();

      return res.status(200).json(course);

    } catch (error) {
        
      return res.status(500).json({ message: error.message });
    }
  };
  



module.exports={
    addCourse, getAllCourse
}