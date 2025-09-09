const express = require("express")
const router = express.Router();
const postCrtl = require("../controllers/Post");
const multer = require("multer");
const checkAuth = require("../middleware/CheckAuth");

const storage = multer.memoryStorage();
const upload = multer ({storage : storage});


// Create New Post
router.post("/createpost", [checkAuth, upload.single('image')], postCrtl.createPost);
// View all post 
router.get("/allpost", postCrtl.allPosts);
//  Get Single Post
router.get("/getbyid/:id",postCrtl.GetMyPosts)

// get posts by category
router.get("/postsbycat/:cat/:limit?", postCrtl.postsByCategory)



module.exports = router;