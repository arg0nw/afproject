/**
 * Created by Blindsight3D on 6/28/2017.
 */
var mongoose=require('mongoose');

//Doctor Schema
var doctorSchema = mongoose.Schema({
    doctorname:{
        type:String,
        required:true
    },
    doctoridhospital:{
        type:String,
        required:true
    },
    speciality:{
        type:String,
        default:true
    },
    doctorid:{
        type:String,
        default:true
    },
    doctordate:{
        type:Date,
        default:Date.now
    }
});

var Doctor = module.exports = mongoose.model('Doctor',doctorSchema);

module.exports.getDoctors = function (callback,limit) {
    Doctor.find(callback).limit(limit);
}
module.exports.getDoctorByID = function (id,callback) {
    Doctor.findById(id, callback);
}

