
var mongoose = require('mongoose');

var schema = mongoose.Schema;

var materialSchema = new schema({
    file: { data: Buffer, 
        contentType: String }
});
module.exports = mongoose.model('Material', materialSchema);
