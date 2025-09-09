const Post = require("../models/Post");
const cloudinary = require('cloudinary');
const dotenv = require('dotenv');
dotenv.config();

// setup cloudinary
cloudinary.config({
    cloud_name: 'ddcwpznkg',
    api_key: '674857914249998',
    api_secret: '2VrO4iQKPwaR93TLnZGqXI0W8zM'
});


const createPost = async (req, res) => {
    try {
        // converting buffer into base64
        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
        const photoObject = await cloudinary.v2.uploader.upload(dataURI);

        // create post
        const newPost = await Post.create({ company: req.body.company, price: req.body.price, ram: req.body.ram, storage: req.body.storage, condition: req.body.condition, address: req.body.address, contact: req.body.contact, detail: req.body.detail,category:req.body.category,imageUrl: photoObject.url });

        return res.status(201).json({
            status: 'success',
            message: "successfully created"
        })
    } catch (error) {
        console.log(error.message);
    }
}

const GetMyPosts = async (req,res) => {

   
    const id = req.params.id;
    console.log("id",id);

    try {
        const mypost = await Post.findById(id);

        return res.json({
            status: 'success',
            posts: mypost
        })
    } catch (error) {
        console.log(error.message);
    }
}

const allPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        return res.status(200).json({
            status: "success",
            posts: posts
        })
    } catch (error) {
        return res.status(404).json({
            status: "failed",
            message: error.message

        })


    }
}


const postsByCategory = async (req, res) => {
    const category = req.params.cat;
    const limit  = req.params.limit;

    // console.log(category, limit);
    // return;
    try {
        let query = {};
        let posts = [];
        //let postLimit = 0;

        if(category) {
            query.category = category;
        }

        // if(limit){
        //     postLimit = limit;
        // }

        posts = await Post.find(query).limit(limit);

        return res.status(200).json({
            status: "success",
            posts: posts
        })
    } catch (error) {
        return res.status(404).json({
            status: "failed",
            message: error.message

        })


    }
}


module.exports = {
    createPost,
    allPosts,
    GetMyPosts,
    postsByCategory
}