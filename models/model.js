var mongoose = require('mongoose');
var schema = mongoose.Schema;


var ProjectSchema = new  schema({

    name:String,
    days:Number,
    desc:String
}, { collection: 'projectdata' });


var Model  = mongoose.model('Project',ProjectSchema);

module.exports = Model; 