var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
	body: {
		type: String,
		required: true
	},
	created_at: {
		type: Date,
		default: Date.now
	}
})

var postSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		required: true,
		unique: true
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	comments: [ commentSchema ]
});

module.exports = mongoose.model('Post', postSchema);