var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

app.use(bodyParser.json());
app.use(express.static(__dirname+'/../client'));
var Gener= require('./models/geners.js');
var Book= require('./models/books.js');
mongoose.connect('mongodb://samitha071:asd123pharmdeus-shard-00-00-qmi26.mongodb.net:27017,pharmdeus-shard-00-01-qmi26.mongodb.net:27017,pharmdeus-shard-00-02-qmi26.mongodb.net:27017/pharmdeus?ssl=true&replicaSet=pharmdeus-shard-0&authSource=admin');
var db = mongoose.connection;

app.get('/',function (req,res) {
	res.send('Helloooo');
});

console.log(__dirname);
app.get('/api/geners', function(req,res){
	Gener.getGeners(function(err,geners){
		if(err)
		{
			throw err;
		}
		res.json(geners);
	})
});
app.post('/api/geners', function(req,res){
	var gener=req.body;
	Gener.addGeners(gener, function(err,gener){
		if(err)
		{
			throw err;
		}
		res.json(gener);
	})
});
app.put('/api/geners/:_id', function(req,res){
	var id=req.params._id;
	var gener=req.body;
	Gener.updateGeners(id,gener,{}, function(err,gener){
		if(err)
		{
			throw err;
		}
		res.json(gener);
	})
});
app.delete('/api/geners/:_id', function(req,res){
	var id=req.params._id;
	Gener.deleteGeners(id, function(err,gener){
		if(err)
		{
			throw err;
		}
		res.json(gener);
	})
});
app.get('/api/books', function(req,res){
	Book.getBooks(function(err,books){
		if(err)
		{
			throw err;
		}
		res.json(books);
	})
});
app.get('/api/books/:_id', function(req,res){
	Book.getBookByID(req.params._id,function(err,book){
		if(err)
		{
			throw err;
		}
		res.json(book);
	})
});
app.post('/api/books', function(req,res){
	var book=req.body;
	Book.addBooks(book, function(err,book){
		if(err)
		{
			throw err;
		}
		res.json(book);
	})
});
app.put('/api/books/:_id', function(req,res){
	var id=req.params._id;
	var book=req.body;
	Book.updateBooks(id,book,{}, function(err,book){
		if(err)
		{
			throw err;
		}
		res.json(book);
	})
});
app.delete('/api/books/:_id', function(req,res){
	var id=req.params._id;
	Book.deleteBooks(id, function(err,book){
		if(err)
		{
			throw err;
		}
		res.json(book);
	})
});
app.listen(3000);
console.log("Listing to port 3000");