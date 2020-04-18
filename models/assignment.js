var mongoose = require('mongoose');

var schema = mongoose.Schema;

var AssSchema = new schema({
    question: {
        type: [{
            String,
      
    }]
}
});
module.exports = mongoose.model('Assignment', AssSchema);