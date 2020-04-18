var mongoose = require('mongoose');

var schema = mongoose.Schema;

var quizSchema = new schema({
    question: {
        type: [ 
            {String,
       }]
    }
});
module.exports = mongoose.model('Quiz', quizSchema);