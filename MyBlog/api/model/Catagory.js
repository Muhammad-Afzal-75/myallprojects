const mongoose = require("mongoose");

const schema = new mongoose.Schema({
title:String,
image:String


})
const Catagory = mongoose.model('Catagory', schema);

module.exports = Catagory;