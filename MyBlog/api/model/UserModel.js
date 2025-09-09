var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String
  },
  image: {
    type: String,
},
  password: String,
  isAdmin: {
      type: Boolean,
      default: false
    }
}, {timestamps: true});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel