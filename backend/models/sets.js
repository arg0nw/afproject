var mongoose=require('mongoose');

//Schema
var setsSchema = mongoose.Schema({
	batchName:{
		type:String,
		required:true
	},
	qty:{
		type:Number,
		required:true
	},
	drugname:{
		type:String
	},
	expireDate:{
		type:Date
		
	},
	manufacDate:{
		type:Date
	}
});

var Set = module.exports = mongoose.model('Set',setsSchema);

module.exports.addBatch=function(batch,callback){
	Set.create(batch,callback);
}

