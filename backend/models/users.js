var mongoose=require('mongoose');

//User Schema
var userSchema = mongoose.Schema({
    username:{
        type:String,
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

module.exports.addUser=function(user,callback){
	User.create(user,callback);
}


