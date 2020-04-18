var mongoose = require('mongoose');

var schema = mongoose.Schema;

var AssSchema = new schema({
    question: {
        type: Array,
        required: true
    },
});
module.exports = mongoose.model('Assignment', AssSchema);