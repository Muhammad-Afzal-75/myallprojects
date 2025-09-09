const mongoose = require("mongoose");

const schema = new mongoose.Schema({
postid:String,
Userid:String,
Comment:String,
status:{

    type:String,
    enum:["approved","pending"],
    

}

    
})

const Comments = mongoose.model('Comment', schema);

module.exports = Comments;