var express = require('express');
var router = express.Router();
var org = require('../app/controllers/orgController')();
var branch = require('../app/controllers/branchController')();

/*default home page url*/
router.route('/').get( function(req, res, next){
	res.send("This is a survey rest services api");
});

/* organizations */
router.route('/add').post(org.add);
router.route('/org/:id').get(org.getById);

/* branch */
router.route('/branch/add').post(branch.add);
router.route('/branch/:id').get(branch.getById);



router.route('*').get(function(req, res, next){
	res.send("Not a Valid request");
});

module.exports = router;
