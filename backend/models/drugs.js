var mongoose=require('mongoose');

var drugsSchema = mongoose.Schema({
	
	drugname:{
		type:String,
		required:true
	},
	drugcategory:{
		type:String,
		required:true
	},
	quentity:{
    	type:Number,
    	required:true
    },
    unitprice:{
    	type:Number,
    	required:true
    	},
    supliername:{
        type:String,
        required:true
    },
    supplieremail:{
    	type:String
    },
    status:{
        type:String,
        required:true  //the drug is active or not
    },
    minorder:{
        type:Number,
        required:true
    },
    drugcreateddate:{
        type:Date,
        default:Date.now
    }


});

var Drug = module.exports = mongoose.model('Drug',drugsSchema);

module.exports.getDrugs = function (callback,limit) {
	Drug.find(callback).limit(limit);
}

module.exports.getDrug = function (id,callback) {
    Drug.findById(id, callback);
}
module.exports.addDrugs = function (drug,callback) {
	Drug.create(drug,callback);
}

module.exports.getCategory = function (callback) {
    Drug.distinct("drugcategory",callback);
}

module.exports.getDrugByName=function(drugname,callback){
    Drug.find({'drugname':drugname},callback);
}


module.exports.addNewDrug=function(drug,callback){
    Drug.create(drug,callback);
}

module.exports.updateDrug=function(id,book,options,callback){
    var query={_id:id};
    var update={
        drugname:book.drugname,
        drugcategory:book.drugcategory,
        quentity:book.quentity,
        unitprice:book.unitprice,
        supliername:book.supliername,
        supplieremail:book.supplieremail,
        minorder:book.minorder
    };

    Drug.findOneAndUpdate(query,update,options,callback);
}

module.exports.updateQty=function(id,qty,options,callback){
    var query={_id:id};
    var update={
        drugname:qty.drugname,
        drugcategory:qty.drugcategory,
        quentity:qty.quentity,
        unitprice:qty.unitprice,
        supliername:qty.supliername,
        supplieremail:qty.supplieremail,
        minorder:qty.minorder
    };

    Drug.findOneAndUpdate(query,update,options,callback);
}

module.exports.deleteDrug=function(id,callback)
{
    var query={_id:id};
    Drug.remove(query,callback);
}