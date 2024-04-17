const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const maintenanceSchema = new Schema({

    EmpId :{
        type :String,
        required : true
    },
    Type0fEquipment :{
        type :String,
        required : true
    },

   Date : {
        type : String,
        required :true
    },

    Description : {
        type : String,
        required :true
    },

    
    

})
const maintenance = mongoose.model("maintenance", maintenanceSchema);

module.exports = maintenance;