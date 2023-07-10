const user  =  require("./userScherma")
const bcrypt = require("bcrypt")
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
                res.json({
                    status:200,
                    success:true,
                    messsage : "login successful",
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