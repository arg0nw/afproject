var mongoose=require('mongoose');

var emailsSchema = mongoose.Schema({
	
	from:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    emaildate:{
        type:Date,
        default:Date.now
    }


});

var Email = module.exports = mongoose.model('Email',emailsSchema);

module.exports.addEmails = function (email,callback) {
    
    Email.create(email,callback);
}

module.exports.getEmails = function (callback,limit) {
    Email.find(callback).limit(limit);
}
