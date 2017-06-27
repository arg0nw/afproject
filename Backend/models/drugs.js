var mongoose=require('mongoose');

var drugsSchema = mongoose.Schema({
	drugName:{
		type:String
	},
	drugCategory:{
		type:String
	},
	qty:{
		type:Number
	},
	unitPrice:{
		type:Number
	},
	supplierName:{
		type:String
	},
	supplierEmail:{
		type:String
	},
	minimumQty:{
		type:Number
	},
	createDate:{
		type:Date,
		default:Date.now
	}

});

var Drug = module.exports = mongoose.model('Drug',booksSchema);

module.exports.getDrugs = function (callback,limit) {
	Drug.find(callback).limit(limit);
}

module.exports.addDrugs = function (drug,callback) {
	Drug.create(drug,callback);
}