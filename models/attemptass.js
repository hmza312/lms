var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var attemptassSchema = new Schema({
  
    // Answer:[  
    //     [String,
    //     ]
    // ],
    Answer: {
        type: Array,
        required: true
    },
  
    question: {
       
        type: mongoose.Types.ObjectId,
        ref: 'Assignment'
    }
});

module.exports = mongoose.model('AttemptAssignment', attemptassSchema);