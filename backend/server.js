var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var nodemailer = require('nodemailer');

app.use(bodyParser.json());
app.use(express.static(__dirname+'/../client'));
var Gener= require('./models/geners.js');
var Book= require('./models/books.js');
var Drug= require('./models/drugs.js');
var Prescription= require('./models/prescriptions.js');
var Email= require('./models/emails.js');
var Patient = require('./models/patients.js');
var User = require('./models/users.js')


//Connection
// mongoose.connect("mongodb://localhost:27017/test", function (err, db) {
//     if (!err) {
//         console.log("we are connected to mongo");
//     }
// })

mongoose.connect('mongodb://danika:qwerty@ds139242.mlab.com:39242/pharmdeus')
//mongoose.connect('mongodb://samitha071:asd123pharmdeus-shard-00-00-qmi26.mongodb.net:27017,pharmdeus-shard-00-01-qmi26.mongodb.net:27017,pharmdeus-shard-00-02-qmi26.mongodb.net:27017/pharmdeus?ssl=true&replicaSet=pharmdeus-shard-0&authSource=admin');
var db = mongoose.connection;


app.get('/',function (req,res) {
	res.send('Helloooo');
});

var transporter = nodemailer.createTransport({
	service:'gmail',
	secure:false,
	port:25,
	auth:{
		user:'chiefpharmacist01@gmail.com',
		pass:'adminuser$'
	},
	tls:{
		rejectUnauthorized:false
	}
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

app.get('/api/drugs',function(req,res){
    Drug.getDrugs(function(err,drugs)
    {
        if(err)
        {
            throw err;
        }

        res.json(drugs)    
    });
});
app.get('/api/drugs/:_id', function(req,res){
	Drug.getDrug(req.params._id,function(err,drug){
		if(err)
		{
			throw err;
		}
		res.json(drug);
	})
});

app.get('/api/prescriptions', function(req,res){
    Prescription.getPrescriptions(function(err,prescriptions){
        if(err)
        {
            throw err;
        }
        res.json(prescriptions);
    })
});

app.get('/api/prescriptions/:_id', function(req,res){
    Prescription.getPrescriptionByID(req.params._id,function(err,prescriptions){
        if(err)
        {
            throw err;
        }
        res.json(prescriptions);
    })
});

app.post('/api/addprescriptions', function(req,res){
    var prescription=req.body;
    Prescription.addPrescriptions(prescription, function(err,prescriptions){
        if(err)
        {
            throw err;
        }
        res.json(prescriptions);
    })
});

app.post('/api/mail' ,function (req,res) {
	var mail=req.body;
	transporter.sendMail(mail, function(error, info){
    if (error) {
        return console.log(error);
    }
    Email.addEmails(mail,function (err,mail) {
    	if(err)
    		throw err;
    	res.json(mail);
    })
    
});
})

app.get('/api/mail', function(req,res){
    Email.getEmails(function(err,mails){
        if(err)
        {
            throw err;
        }
        res.json(mails);
    })
});

app.get('/api/mail/:_id', function(req,res){
    Email.getEmail(req.params._id, function(err,mail){
        if(err)
        {
            throw err;
        }
        res.json(mail);
    })
});

app.get('/api/patients', function(req,res){
    Patient.getPatients(function(err,patients){
        if(err)
        {
            throw err;
        }
        res.json(patients);
    })
});

app.get('/api/patients/:_id', function(req,res){
    Patient.getPatientByID(req.params._id, function(err,patient){
        if(err)
        {
            throw err;
        }
        res.json(patient);
    })
});

app.get('/api/notIssuedPrescriptions', function(req,res){
    Prescription.getNotIssuedPrescriptions(function(err,notIssuedPrescriptions){
        if(err)
        {
            throw err;
        }
        res.json(notIssuedPrescriptions);
    })
});

app.get('/api/drugs/category', function(req,res){
    Drug.getCategory(function(err,drugs){
        if(err)
        {
            throw err;
        }
        res.json(drugs);
    })
});

app.get('/api/drug/:name', function(req,res){
	
    Drug.getUnitPrice(req.params.name, function(err,d){
        if(err)
        {
            throw err;
        }
        console.log(d);
        if (d.length==0)
        	res.send('true');
        else
        	res.send('fail');
    })

});

app.post('/api/drugs', function(req,res){
    var drug=req.body;
    Drug.addNewDrug(drug, function(err,drug){
        if(err)
        {
            throw err;
        }
        res.json(drug);
    })
});

app.get('/api/pid/:name', function(req,res){
    
    Patient.pidn(req.params.name, function(err,drugs){
        if(err)
        {
            throw err;
        }
        console.log(drugs);
        res.json(drugs);
    })

});
app.put('/api/drugs/:_id',function(req,res){
    var id=req.params._id;
    var book=req.body;
    Drug.updateBook(id,book,{},function(err,book)
    {
        if (err) {
            throw err;
        }
        res.json(book);
    });
});

app.post('/api/user',function(req,res){
	var user=req.body;
	User.addUser(user,function(err,user)
	{
		if (err) {
			throw err;
		}
		res.json(user);
	});
});

app.get('/api/user',function(req,res){
	User.getUsers(function(err,user)
	{
		if (err) {
			throw err;
		}
		res.json(user);
	});
});

app.get('/api/drugQty/:name', function(req,res){

    Drug.getUnitPrice(req.params.name, function(err,drugs){
        if(err)
        {
            throw err;
        }
        console.log(drugs);
        res.json(drugs);
    })

});


app.listen(3000);
console.log("Listing to port 3000");