const user  =  require("./userScherma")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.login =  (req,res)=>{
    user.findOne({email:req.body.email})
    .then(data=>{
        if(data ==  null){
            res.json({
                status:404,
                success:true,
                messsage : "USER DOES NOT EXIST :",
            })
        }
        else{
            if (bcrypt.compareSync(req.body.password ,  data.password)) {
                let payload = {
                    name:data.name,
                    email:data.email,
                    usertype:data.usertype,
                    student_id:data.student_id,
                    teacher_id:data.teacher_id
                }  
                token = jwt.sign(payload,"japjeet" , ({expiresIn:60*60*24*365}))
                res.json({
                    status:200,
                    success:true,
                    messsage : "login successful",
                    token : token  
                })
                
                
            }
            else{
                res.json({
                    status:404,
                    success:true,
                    messsage : "INCORRECT USERNAME OR PASSWORD :",
                })
                
            }
            
        }
    })
}