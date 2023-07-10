const  mongoose =  require("mongoose") 
const tecschera  =   new  mongoose.Schema({
    name: {type:String ,  default : "" }, 
    email: {type:String ,  default : "" }, 
    age: {type:Number ,  default : null ,   }, 
    phone: {type:Number ,  default : null ,  }, 
    created_at: {type:Date ,  default :Date.now()}, 
    status: {type:Boolean ,  default : true }, 
})

module.exports =  new mongoose.model('teacher' , tecschera)