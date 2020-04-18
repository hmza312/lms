var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var attemptassSchema = new Schema({
  
    Answer:[  
        [String,
        ]
    ],
    question: {
        type: [{
            qid: {
                type: mongoose.Types.ObjectId,
                ref: 'Assignment'
            }
        }]
    }
});

module.exports = mongoose.model('AttemptAssignment', attemptassSchema);