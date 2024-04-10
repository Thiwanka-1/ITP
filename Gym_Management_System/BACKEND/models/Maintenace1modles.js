const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const maintenanceSchema = new Schema({
    equipmentname :{
        type : String,
        required : true
    },

    taskname :{
        type :String,
        required : true
    },

    description: {
        type : String,
        required :true
    },

    scheduledate: {
        type : String,
        required :true
    },
    completionstatus: {
        type : String,
        required :true
    }
})
const maintenance = mongoose.model("Task", maintenanceSchema);

module.exports = maintenance;