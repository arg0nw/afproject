/**
 * Created by Blindsight3D on 6/29/2017.
 */

var mongoose=require('mongoose');

//this contains prescriptions model
var issuedPrescriptionsSchema = mongoose.Schema({
    patientnic:{
        type:String,
        required:true
    },
    name:{
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
    drugQty1:{
        type:String
    },
    drugQty2:{
        type:String
    },
    drugQty3:{
        type:String
    },
    drugQty4:{
        type:String
    },
    drugQty5:{
        type:String
    },
    drugQty6:{
        type:String
    },
    drugQty7:{
        type:String
    },
    drugQty8:{
        type:String
    },
    drugQty9:{
        type:String
    },
    drugQty10:{
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

var IssuedPrescription = module.exports = mongoose.model('IssuedPrescription',issuedPrescriptionsSchema);

module.exports.addIssuedPrescription = function (issuedPrescription,callback) {
    IssuedPrescription.create(issuedPrescription,callback);
}

