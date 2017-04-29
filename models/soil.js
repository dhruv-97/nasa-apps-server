// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var soilSchema = new Schema({
	value:{
		type: Number,
		default:0
	},
	light:{
		type: Number,
		default: 4
	},
	motor:{
		type: Boolean,
		default: false
	}
}, {
    timestamps: true
});
var soils = mongoose.model('soil', soilSchema);


// make this available to our Node applications
module.exports = soils;