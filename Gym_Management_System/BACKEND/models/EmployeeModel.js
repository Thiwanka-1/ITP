const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    EmpId: {
        type: String,
        required: true,
        unique: true
    },
    empName: {
        type: String,
        required: true
    },
    eAge: {
        type: Number,
        required: true
    },
    eGender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other'] // Ensuring the gender field accepts only specified values
    },
    eHeight: {
        type: Number,
        required: true
    },
    eWeight: {
        type: Number,
        required: true
    },
    eAddress: {
        type: String,
        required: true
    },
    ePhone: {
        type: String,
        required: true,
    },
    empEmail: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Employee', employeeSchema);
