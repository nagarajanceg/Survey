module.exports = function () {
var OrgModel = require('../models/organization');
console.log( "org",OrgModel);

	var get = function(req, res, next){
		OrgModel.find({}, function(err, data){
			if(err){
				console.log("error at get ", err);
				return;
			}
			console.log("data at get ", data);
			res.send(data);
		});
	};

	var insert = function(req, res, next){
		var orgDetails =  {
					        type : "restaurant",
					        name : "thalapakatti",
					        identifiername : "thalapakatti",
					        password : "1234",
					        emailid : "techtrio@gmail.com",
					        phonenumber : "1234567890",
					        orglogo : "<file path>",
					        welcome_text : "Default Org welcome text",
					        branches: [
					        	"Ad1",
					        	"Sa1"
					        ],
					        questions:[
					        	"Food Taste",
							     "Food Variety",
							     "Ambience",
							     "Food Served hot and fresh"
					        ]
					    }
		var orgData = new OrgModel(orgDetails);
		orgData.save(function(err){
			if(err){
				console.log("error at saving");
				res.send("error in saving",err);
			}else{
					res.send("success in insert");			
			}
			
		});
	};
	return {
		getAll : get,
		add: insert
	}
}