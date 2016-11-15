var branchModel = require('../models/branch');
var branchDetails = {
	id:"bid1",
	name: "OMR",
	welcome_text: "Thalapakatti welcomes you",
	branch_logo:"<file path",
	email_id:"techtrio@gmail.com",
	phonenumber:"122345454",
	user_id:"user",
	password: "123" ,
	surveys:[
		"sid1",
		"sid2",
		"sid3"
	]
}
module.exports = function(){
	var get = function(req, res, next){
		branchModel.find({id:req.params.id}, function(err, data){
			if(err){
				console.log("error at get ", err);
				return;
			}
			console.log("data at branch get ", data);
			res.send(data);
		});
	};
	var insert = function(req, res, next){
		var branchData = new branchModel(branchDetails);
		branchData.save(function(err){
			if(err){
				res.send("error at saving branch info",err);
			}else{
				res.send("success in branch insert");
			}
		});
	};

	return{
		getById: get,
		add: insert
	}
}