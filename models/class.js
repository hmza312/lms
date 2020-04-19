var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var classSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: 'Teacher'
    },
    students: {
        type: [{
            sid: {
                type: mongoose.Types.ObjectId,
                ref: 'Student'
            },
            marks:{
                type: mongoose.Types.ObjectId,
                ref: 'Marks'
            }
            
        }]
    }
});

module.exports = mongoose.model('Class', classSchema);