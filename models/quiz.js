var mongoose = require('mongoose');

var schema = mongoose.Schema;

var quizSchema = new schema({
    question: [  
            [String,
            ]
        ],

});
module.exports = mongoose.model('Quiz', quizSchema);