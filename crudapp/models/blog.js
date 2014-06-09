var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema ({
	title: String,
	content: String,
});

module.exports = mongoose.model('Post', postSchema)