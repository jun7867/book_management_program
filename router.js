var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
	res.send('GET /');
});

router.post('/', function(req,res,next) {
        res.send('POST /');
});
router.put('/', function(req,res,next) {
        res.send('PUT /');
});
router.delete('/', function(req,res,next) {
        res.send('DELETE /');
});
module.exports = router;
