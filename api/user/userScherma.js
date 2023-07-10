const  mongoose =  require("mongoose") 
const Uschera  =   new  mongoose.Schema({
    email: {type:String ,  default : "" }, 
    password: {type:String ,  default : "" }, 
    usertype: {type:Number ,  default : 1 }, // 1= teacher  , 2 =  student  ,  0 = admin 
    teacher_id: {type:mongoose.Types.ObjectId ,  default : null ,  ref: "teacher" }, 
    student_id: {type:mongoose.Types.ObjectId ,  default : null ,  ref:   'student' }, 
    created_at: {type:Date ,  default :Date.now()}, 
    status: {type:Boolean ,  default : true }, 
})

module.exports =  new mongoose.model('user' , Uschera)