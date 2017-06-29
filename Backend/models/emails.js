var mongoose=require('mongoose');

var emailsSchema = mongoose.Schema({
	
	emailto:{
        type:String,
        required:true
    },
    emailfrom:{
        type:String,
        required:true
    },
    emailsubject:{
        type:String,
        required:true
    },
    emailbody:{
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