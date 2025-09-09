
const UserCrtl = require("../controllers/UserController");
const multer = require("multer")
const upload = multer({ dest: "upload/" })
const  express =  require("express");
const checkAuth = require("../middleware/CheckAuth")


const userR = express.Router()


//  User API
userR.post("/login", UserCrtl.login);
userR.post("/signup",upload.single('image'), UserCrtl.signup);
userR.post("/verifytoken", checkAuth, UserCrtl.verifyToken);


module.exports = userR;