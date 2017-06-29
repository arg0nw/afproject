var mongoose=require('mongoose');

var emailsSchema = mongoose.Schema({
	
	drugname:{
		type:String,
		required:true
	},
	drugcategory:{
		type:String,
		required:true
	},
	quentity:{
    	type:String,
    	required:true
    },
    unitprice:{
    	type:Number,
    	required:true
    	},
    supliername:{
        type:String,
        required:true
    },
    supplieremail:{
    	type:String
    },
    status:{
        type:String,
        required:true  //the drug is active or not
    },
    minorder:{
        type:Number,
        required:true
    }
   /* drugcreateddate:{
        type:Date,
        default:Date.now
    }*/


});

var Email = module.exports = mongoose.model('Drug',drugsSchema);