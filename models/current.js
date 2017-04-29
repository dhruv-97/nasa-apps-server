// grab the things we need
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;
var currentSchema = new Schema({
	price:{
		type: Number,
		default: 120
	}
}, {
    timestamps: true
});
currentSchema.plugin(autoIncrement.plugin, 'current');
var currents = mongoose.model('current', currentSchema);


// make this available to our Node applications
module.exports = currents;