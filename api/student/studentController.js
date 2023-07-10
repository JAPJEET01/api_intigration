const student =  require("./STUDENTScherma")
const USER =  require("../user/userScherma")

exports.addstu = (req,res)=>{
    USER.findOne({email:req.body.email})
    .then(data=>{
        if(data == null){
            let stuobj =  new student()
            stuobj.name =  req.body.name,
            stuobj.email =  req.body.email,
            stuobj.phone =  req.body.phone,
            stuobj.age =  req.body.age
            stuobj.save()
            .then(data=>{
                let uobj =  new USER()
                uobj.email = req.body.email,
                uobj.password = req.body.password,
                uobj.student_id = data._id,
                uobj.usertype =  2 
                uobj.save()
                .then(udata=>{
                    res.json({
                        status:200,
                        success :true,
                        message: "STUDENT ADDED SUCESSFULLY ",
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
                message: "STUDENT ALREADY EXIST ",
            
            
            })

        }
    })
} 