var mongoose=require('mongoose');

var drugsSchema = mongoose.Schema({
	
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

var Drug = module.exports = mongoose.model('Drug',drugsSchema);

module.exports.getDrugs = function (callback,limit) {
	Drug.find(callback).limit(limit);
}

module.exports.getDrug = function (id,callback) {
    Drug.findById(id, callback);
}
module.exports.addDrugs = function (drug,callback) {
	Drug.create(drug,callback);
}

module.exports.getCategory = function (callback) {
    Drug.distinct("drugcategory",callback);
}