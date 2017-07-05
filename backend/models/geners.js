var mongoose=require('mongoose');

//Schema
var genersSchema = mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	create_date:{
		type:Date,
		default:Date.now
	}
});

var Gener = module.exports = mongoose.model('Gener',genersSchema);

module.exports.getGeners = function (callback,limit) {
	Gener.find(callback).limit(limit);
}

module.exports.addGeners = function (gener,callback) {
	Gener.create(gener,callback);
}

module.exports.updateGeners = function (id,gener,options,callback) {
	var query = {_id:id};
	var update = {
		name: gener.name
	};
	
	Gener.findOneAndUpdate(query,update,options,callback);
}

module.exports.deleteGeners = function (id,callback) {
	var query = {_id:id};
	Gener.remove(query,callback);
}