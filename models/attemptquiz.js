var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var attemptSchema = new Schema({
  
    Answer:[  
        [String,
        ]
    ],
    
    question: {
        type: [{
            qid: {
                type: mongoose.Types.ObjectId,
                ref: 'Quiz'
            }
        }]
    }
});

module.exports = mongoose.model('AttemptQuiz', attemptSchema);