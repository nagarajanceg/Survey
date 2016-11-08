var express = require('express');
var router = express.Router();
var orgController = require('../app/controllers/orgController')();

router.route('/add').post(orgController.add);
/* GET users listing. */
router.route('/org/get').get(orgController.getAll);
router.route('*').get(function(req, res, next){

	res.send("Not a Valid request");
});

module.exports = router;
