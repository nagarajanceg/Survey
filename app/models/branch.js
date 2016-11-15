var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var branchSchema = new Schema({
	id: {
		type: String
	},
	name: {
		type: String
	},
	welcome_text: {
		type: String
	},
	branch_logo: {
		type: String
	},
	email_id: {
		type: String
	},
	phonenumber:{
		type: String
	},
	user_id: {
		type: String
	},
	password: {
		type: String
	},
	surveys: [String]
});

var branch = mongoose.model('branch', branchSchema);
module.exports = branch;