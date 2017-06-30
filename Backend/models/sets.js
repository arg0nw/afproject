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

module.exports.updateQty=function(id,book,options,callback){
	var query={_id:id};
	var update={
		title:book.title,
		geners:book.geners,
		descriptions:book.descriptions,
		publisher:book.publisher,
		author:book.author,
		pages:book.pages
	}

	Set.findOneAndUpdate(query,update,options,callback);
}