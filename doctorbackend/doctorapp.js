/**
 * Created by SamithaHeanthenna-PC on 6/28/2017.
 */

//This contains the backend services for the doctors to add prescriptions.

var express=require('express');
var app= express();
var bodyParser=require('body-parser');
var mongoose=require('mongoose');

app.use(bodyParser.json());


//Connect to mongoose
mongoose.connect('mongodb://localhost/cinemapanic');
var db=mongoose.connection;

//Initial Home Get
app.get('/',function (req, res) {
    res.send('Welcome to Cinema Panic');
});

app.listen(4353);
console.log('doctorBackend Running on port 4353');
