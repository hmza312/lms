var mongoose = require('mongoose');

var schema = mongoose.Schema;

var markSchema = new schema({
    class: {
        type: mongoose.Types.ObjectId,
        ref: 'Class'
    },
    quiz: {
        type: mongoose.Types.ObjectId,
        ref: 'AttemptQuiz'
    },
    assignment: {
        type: mongoose.Types.ObjectId,
        ref: 'Assignment'
    },
    number: {
        type: String,
        required: true,
    }

});
module.exports = mongoose.model('Marks', markSchema);