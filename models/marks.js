var mongoose = require('mongoose');

var schema = mongoose.Schema;

var markSchema = new schema({
  
    number: {
        type: String,
        required: true,
    }

});
module.exports = mongoose.model('Marks', markSchema);