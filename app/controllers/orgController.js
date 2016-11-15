var orgModel = require('../models/organization');
var orgDetails =  {
						id: '1',
				        type : "restaurant",
				        name : "thalapakatti",
				        identifiername : "thalapakatti",
				        password : "1234",
				        email_id : "techtrio@gmail.com",
				        phonenumber : "1234567890",
				        orglogo : "<file path>",
				        welcome_text : "Default Org welcome text",
				        branches: [
				        	"bid1",
				        	"bid2",
				        	"bid3",
				        	"bid4"
				        ],
				        questions:[
				        	"qid1",
				        	"qid2",
				        	"qid3",
				        	"qid4",
				        	"qid5",
				        	"qid6",
				        	"qid7"
				        ]
				    }
module.exports = function () {
	var get = function(req, res, next){
		orgModel.find({id:req.params.id}, function(err, data){
			if(err){
				console.log("error at get ", err);
				return;
			}
			console.log("data at get ", data);
			res.send(data);
		});
	};

	var insert = function(req, res, next){
		
		var orgData = new orgModel(orgDetails);
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
		getById : get,
		add: insert
	}
}