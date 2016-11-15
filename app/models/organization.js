var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var orgSchema = new Schema({
	id: {
		type: Number
	},
	type: {
		type : String
	},
	name: {
		type : String
	},
	identifierName: {
		type : String
	},
	password: {
		type: String,
		required: true
	},
	email_id: {
		type : String,
		required : true
	},
	phonenumber: {
		type: String
	},
	orglogo: {
		type: String
	},
	welcome_text: {
		type: String
	},
	branches: [String],
	questions: [String]
});

var org = mongoose.model('organization', orgSchema);
module.exports = org;
