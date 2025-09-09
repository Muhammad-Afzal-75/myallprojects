
const mongoose =  require('mongoose');

// Define Schema

const postSchema = new mongoose.Schema({
    company:{
        type:String,
        // required:true
    },
    imageUrl:{
        type:String,
        // required:ture
    },
    // authId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'User', //refer to User model
    //     required: true

    // },
    price:{
        type:String,
        default:"0",
    },
    ram:{
        type:String,
        required:true
    },
    storage:{
        type:String,
        required:true
    },
    condition:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    detail:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:['Car','Bike','Mobile','Bike','House','Video','Tablets','Land & Plots'],  //add more options if needed
        required:true
    }
},{timestamps:true})

// Create post model

const Post = mongoose.model('Post',postSchema)

module.exports = Post;