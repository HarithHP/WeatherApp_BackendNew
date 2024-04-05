const Student = require ('../models/student.model')

//add student to database
const addStudent=async(req,res)=>{

    const stdData = req.body;

    //finds the student if already exists on the system
    await Student.findOne({sID:stdData.sID})
        .then(student=>{
            if(student){
                res.status(200).json({
                    message:"student already exists"
                })
            }else{
                const newStudent = new Student(stdData);

                newStudent.save()
                    .then(student=>{
                        res.status(201).json({
                            message:"student successfully added to the system",
                        })
                    }).catch(err=>{
                        res.status(500).json({
                            message:"Error adding student"
                        })
                    })
            }
        }).catch(err=>{
            res.status(500).json({
                message:"Error adding student"
            })
        })
}

//get one student by ID
const getStudentById = async (req,res)=>{

    const stdData=req.body;
    const id=req.params.id;

    await Student.findById(id)
        .then(student=>{
            if (student){
                return res.status(200).json(student);
            }else{
                return res.status(404).json({
                    message:"student Not found"
                })
            }

        }).catch(err=>{
            return res.status(500).json({
                message:"error"
            })
        })
    
}

const getAllStudents = async (req, res) => {

    try {

      const students = await Student.find();

      return res.status(200).json(students);

    } catch (error) {

      return res.status(500).json({ message: error.message });
    }
  };
  



module.exports={
    addStudent,getStudentById,getAllStudents
}