const router = require("express").Router()
const tecController = require("../api/teacher/teacherController")
const stuController = require("../api/student/studentController")
const userController = require("../api/user/userController")

router.post("/addtec" , tecController.addtec)
router.post("/addstu" , stuController.addstu)
router.post("/login" , userController.login)


module.exports = router