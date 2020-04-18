var mongoose = require('mongoose');

var schema = mongoose.Schema;

var quizSchema = new schema({
    question: {
        type: Array,
        required: true
    },

});
module.exports = mongoose.model('Quiz', quizSchema);