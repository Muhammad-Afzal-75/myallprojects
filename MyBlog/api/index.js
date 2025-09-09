const express = require('express')
const app = express()
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt   = require("jsonwebtoken");
const cors = require("cors");
const secretKey="khhjdhlsajD;KJ;a"
const UserModel= require("./model/UserModel")
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const path = require("path");
const fs= require('fs')
const Post=require("./model/Post")
const Comment=require("./model/Comment")
const Catagory=require("./model/Catagory")


// middlewares
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "uploads")));

app.get("/", async( req, res) => {
    res.send("working...")
})

// get all post
app.get("/post", async (req, res) => {
    try {
        const products = await Post.find({});
        return res.status(200).json({
            status: true,
            products: products
        })
    } catch (error) {
        return res.status(404).json({
            status: false,
            message: error.message
        })
    }
})

// get post by id

app.get("/post/:id", async (req, res) => {

    const id = req.params.id;
    try {
        const post = await Post.findById(id);
        return res.status(200).json({
            status: true,
            post: post
        })
    } catch (error) {
        return res.status(404).json({
            status: false,
            message: "Post not found"
        })
    }
})



// create post
app.post("/post", upload.single('image'), async (req, res) => {

    try {
        const extension = req.file.mimetype.split("/")[1];
        if (extension == "png" || extension == "jpg" || extension == "jpeg") {
            const fileNmae = req.file.filename + "." + extension;

            // new key in body object
            req.body.image = fileNmae;

            fs.rename(req.file.path, `uploads/${fileNmae}`, () => {
                console.log("\nFile Renamed!\n");
            });
        } else {
            fs.unlink(req.file.path, () => console.log("file deleted"))
            return res.json({
                message: "only images are accepted"
            })
        }

        const newProduct = await Post.create(req.body);
        res.status(201).json({
            status: true,
            newProduct: newProduct,
            message: "product created"
        })
    } catch (error) {
        if (error.name === 'ValidationError') {
            // Mongoose validation error
            const errors = {};
            for (const field in error.errors) {
                errors[field] = error.errors[field].message;
            }
            res.status(200).json({
                status: false,
                errors: errors
            });
        } else {
            // Other types of errors
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

// comments

app.post("/comment", async(req,res)=>{
try{
    const comments = await Comment.create(req.body);
    res.status(201).json({
        status: true,
        comments:comments,
        message: "comment ok"
    })
}catch(error){

    if (error.name === 'ValidationError') {
        // Mongoose validation error
        const errors = {};
        for (const field in error.errors) {
            errors[field] = error.errors[field].message;
        }
        res.status(200).json({
            status: false,
            errors: errors
        });
    } else {
        // Other types of errors
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


})
// get commet
app.get("/comment", async (req, res) => {
    try {
        const comment = await Comment.find({});
        return res.status(200).json({
            status: true,
            comment: comment
        })
    } catch (error) {
        return res.status(404).json({
            status: false,
            message: error.message
        })
    }
})


// catagory
app.post("/catagory", upload.single('image'), async (req, res) => {

    try {
        const extension = req.file.mimetype.split("/")[1];
        if (extension == "png" || extension == "jpg" || extension == "jpeg") {
            const fileNmae = req.file.filename + "." + extension;

            // new key in body object
            req.body.image = fileNmae;

            fs.rename(req.file.path, `uploads/${fileNmae}`, () => {
                console.log("\nFile Renamed!\n");
            });
        } else {
            fs.unlink(req.file.path, () => console.log("file deleted"))
            return res.json({
                message: "only images are accepted"
            })
        }

        const newCatagory = await Catagory.create(req.body);
        res.status(201).json({
            status: true,
            newCatagory: newCatagory,
            message: "ok"
        })
    } catch (error) {
        if (error.name === 'ValidationError') {
            // Mongoose validation error
            const errors = {};
            for (const field in error.errors) {
                errors[field] = error.errors[field].message;
            }
            res.status(200).json({
                status: false,
                errors: errors
            });
        } else {
            // Other types of errors
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

app.post("/uploading", upload.single('image'), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    try {
        const extension = req.file.mimetype.split("/")[1];
        if (extension == "png" || extension == "jpg" || extension == "jpeg") {
            const fileNmae = req.file.filename + "." + extension;
            console.log(fileNmae);

            fs.rename(req.file.path, `uploads/${fileNmae}`, () => {
                console.log("\nFile Renamed!\n");
            });
            return res.json({
                message: "uploaded"
            })
        } else {

            fs.unlink(req.file.path, () => console.log("file deleted"))
            return res.json({
                message: "only images are accepted"
            })
        }

        
    } catch (error) {

    }
});







// user registration
app.post("/signup", upload.single('image'), async (req, res) => {
    const {name, email, password} = req.body;
    
    try {

        const extension = req.file.mimetype.split("/")[1];
        if (extension == "png" || extension == "jpg" || extension == "jpeg") {
            const fileNmae = req.file.filename + "." + extension;
            req.body.image=fileNmae;
            console.log(fileNmae);

            fs.rename(req.file.path, `uploads/${fileNmae}`, () => {
                console.log("\nFile Renamed!\n");
            });
            // return res.json({
            //     message: "uploaded"
            // })
        } else {

            fs.unlink(req.file.path, () => console.log("file deleted"))
            //  res.json({
            //     message: "only images are accepted"
            // })
        }

        
        // check is user already registered 
        const alreadyUser = await UserModel.findOne({ email: email});
        if(alreadyUser !== null) {
            return res.status(200).json({
                status: "failed",
                message: "Email already registered"
            });
        }

        // password hashed
        const hashed = await bcrypt.hash(password, 10);

        // create user
        const newUser = await UserModel.create({
            name: name, email: email, password: hashed, image:  req.body.image
        })

        // generate token?
        const token = jwt.sign( {id: newUser._id}, secretKey );

        // return response
        res.status(201).json({
            status: "success",
            message: "Registered successfully",
            token: token
        })

    } catch (error) {
        
    }
})


// user login
app.post("/login", async (req, res) => {
    const {email, password } = req.body;
    
    try {
        
        // confirm the user is registered or not with email
            const userExist = await UserModel.findOne({email: email});
            if(userExist === null) {
                return res.json({
                    status: "failed",
                    message: "Authentication failed"
                })
            }

        // confirm password
            const confirmPass = await bcrypt.compare(password, userExist.password);
            if(confirmPass === false) {
                return res.json({
                    status: "failed",
                    message: "Authentication failed"
                })
            }

        // generate token
        const token = jwt.sign( {id: userExist._id}, secretKey );

        // return response
        res.status(201).json({
            status: "success",
            message: "Logged in successfully",
             token: token
        })

    } catch (error) {
        
    }
})








// server & DB connection
mongoose.connect("mongodb://127.0.0.1:27017/firstblog").then(() => {
    app.listen(4001, () => {
        console.log("db connected and server is up now");
    })
})