var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        required: true
    },
    marks:{
        
            type: Schema.Types.ObjectId,
            ref: 'Marks'
        
    }
});

module.exports = mongoose.model('Student', studentSchema);