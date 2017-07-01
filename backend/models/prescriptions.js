/**
 * Created by SamithaHeanthenna-PC on 6/28/2017.
 */

var mongoose=require('mongoose');

//this contains prescriptions model
var prescriptionsSchema = mongoose.Schema({
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
    date:{
        type:Date,
        default:Date.now
    },
    doctorid:{
        type:String

    },
    doctorname:{
        type:String
    },
    hospitalid:{
        type:String
    },
    drug1:{
        type:String
    },
    drug2:{
        type:String
    },
    drug3:{
        type:String
    },
    drug4:{
        type:String
    },
    drug5:{
        type:String
    },
    drug6:{
        type:String
    },
    drug7:{
        type:String
    },
    drug8:{
        type:String
    },
    drug9:{
        type:String
    },
    drug10:{
        type:String
    },
    detail:{
        type:String
    },
    isissued:{
        type:String,
        default:'notissued'
    }
});

var Prescription = module.exports = mongoose.model('Prescription',prescriptionsSchema);

//get all prescriptions
module.exports.getPrescriptions = function (callback,limit) {
    Prescription.find(callback).limit(limit);
}

//get prescriptions by id
module.exports.getPrescriptionByID = function (id,callback) {
    Prescription.findById(id, callback);
}

//post prescriptions
module.exports.addPrescriptions = function (prescription,callback) {
    Prescription.create(prescription,callback);
}

//put/update prescriptions status
module.exports.updatePrescription = function (id,prescription,options,callback) {
    var query = {_id:id};
    var update = {
        isissued: 'isissued'
    };
    Prescription.findOneAndUpdate(query,update,options,callback);
}

//get not Issued prescriptions
module.exports.getNotIssuedPrescriptions = function (callback,limit) {
    Prescription.find({'isissued':'notissued'},callback).limit(limit);
}

module.exports.updateDrugQty1 = function (name,prescription,options,callback) {

    var query = {name:name};
    var update = {
        quentity: $scope.leftQty
    };
    Prescription.update(query,update,options,callback);
}
