/**
 * Created by SamithaHeanthenna-PC on 6/29/2017.
 */

var mongoose=require('mongoose');

//this contains prescriptions model
var patientsSchema = mongoose.Schema({
    patientnic:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    bloodgroup:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },

    contactnumber:{
        type:Number,
        required:true
    },

    email:{
        type:String,
    },
    url:{
        type:String,
    },
    patientdate:{
        type:Date,
        default:Date.now
    }
});

var Patient = module.exports = mongoose.model('Patient',patientsSchema);

//get all patients
module.exports.getPatients = function (callback,limit) {
    Patient.find(callback).limit(limit);
}

//get Patients by id
module.exports.getPatientByID = function (id,callback) {
    Patient.findById(id, callback);
}


module.exports.pidn=function(meal,callback){
    Patient.find({'patientnic':meal},callback);
}