var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var attemptSchema = new Schema({
  
    Answer: {
        type: Array,
        required: true
    },
    
    question: {
       
                type: mongoose.Types.ObjectId,
                ref: 'Quiz'
            }
     
    
});

module.exports = mongoose.model('AttemptQuiz', attemptSchema);