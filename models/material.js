
var mongoose = require('mongoose');

var schema = mongoose.Schema;

var materialSchema = new schema({
    file: { 
        type: String }
});
module.exports = mongoose.model('Material', materialSchema);
