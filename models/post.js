var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		require: true
	},
	slug: {
		type: String,
		required: true,
		unique: true
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Post', postSchema);