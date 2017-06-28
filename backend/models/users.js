var mongoose=require('mongoose');

//User Schema
var userSchema = mongoose.Schema({
    username:{
        username:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    usertype:{
        type:String,
        required:true
    },
    create_date:{
        type:Date,
        default:Date.now
    }
});

var User = module.exports = mongoose.model('User',userSchema);

module.exports.getUsers = function (callback,limit) {
    User.find(callback).limit(limit);
}
module.exports.getUserByID = function (id,callback) {
    User.findById(id, callback);
}

