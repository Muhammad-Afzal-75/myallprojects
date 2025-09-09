const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    postid: {
        type: String,
   
    },
    autherid: {
        type: String,
       
    },
    image: {
        type: String,
    },
    category: {
        type: String,
        enum: { values: ['AI', 'Adroid','Robotics'], 
        message: '{VALUE} is not supported' }
       
    },
    title:{
        type:String
    },
    body:{
        type:String
    },
    status:{
        type:String,
        enum: { values: ['published','draft'], 
        message: '{VALUE} is not supported' }
    }
})


const Post = mongoose.model('Post', schema);

module.exports = Post;