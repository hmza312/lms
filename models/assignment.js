var mongoose = require('mongoose');

var schema = mongoose.Schema;

var AssSchema = new schema({
    question: [  
        [String,
        ]
    ],
});
module.exports = mongoose.model('Assignment', AssSchema);