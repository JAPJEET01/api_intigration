const teacher =  require("./teacherScherma")
const USER =  require("../user/userScherma")
const bcrypt =  require("bcrypt")

exports.addtec = (req,res)=>{
    USER.findOne({email:req.body.email})
    .then(data=>{
        if(data == null){
            let tecobj =  new teacher()
            tecobj.name =  req.body.name,
            tecobj.email =  req.body.email,
            tecobj.phone =  req.body.phone,
            tecobj.age =  req.body.age
            tecobj.save()
            .then(data=>{
                let uobj =  new USER()
                uobj.email = req.body.email,
                uobj.password =bcrypt.hashSync( req.body.password, 10) ,
                uobj.teacher_id = data._id,
                uobj.usertype =  1 
                uobj.save()
                .then(udata=>{
                    res.json({
                        status:200,
                        success :true,
                        message: "TEACHER ADDED SUCESSFULLY ",
                        data :data , 
                        userdata :  udata
                    
                    })

                })

            })
            
        }
        else{
            res.json({
                status:400,
                success : false,
                message: "TEACHER ALREADY EXIST ",
            
            
            })

        }
    })
} 