const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    
    firstName : {
        type: String,
        require : true
    },
    lastName : {
        type : String,
        require : true
    },
    place : {
        type : String,
        require : true
    }
});

module.exports = mongoose.model('Student', studentSchema);