var mongoose=require('mongoose');

//Schema
var booksSchema = mongoose.Schema({
	title:{
		type:String,
		required:true
	},
	geners:{
		type:String,
		required:true
	},
	descriptions:{
		type:String
	},
	author:{
		type:String
		
	},
	pages:{
		type:String
	},
	publisher:{
		type:String
	},
	create_date:{
		type:Date,
		default:Date.now
	}
});

var Book = module.exports = mongoose.model('Book',booksSchema);

module.exports.getBooks = function (callback,limit) {
	Book.find(callback).limit(limit);
}
module.exports.getBookByID = function (id,callback) {
	Book.findById(id, callback);
}

module.exports.addBooks = function (book,callback) {
	Book.create(book,callback);
}

module.exports.updateBooks = function (id,book,options,callback) {
	var query = {_id:id};
	var update = {
		title: book.title,
		geners: book.geners,
		descriptions: book.descriptions,
		author: book.author,
		pages:book.pages,
		publisher:book.publisher

	};
	Book.findOneAndUpdate(query,update,options,callback);
}

module.exports.deleteBooks = function (id,callback) {
	var query = {_id:id};
	Book.remove(query,callback);
}