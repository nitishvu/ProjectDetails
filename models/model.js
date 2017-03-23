var mongoose = require('mongoose');
var schema = mongoose.Schema;


var HumanSchema = new  schema({

    name:String,
    days:Number,
    desc:String
}, { collection: 'human' });


var Model  = mongoose.model('Human',HumanSchema);

module.exports = Model; 