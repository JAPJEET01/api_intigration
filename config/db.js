const mongoose  =  require("mongoose")
mongoose.connect("mongodb://localhost:27017/yoyo")
.then(
    console.log("DB CONNECTED")
)