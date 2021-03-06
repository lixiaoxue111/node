var express = require('express');
var router = express.Router();

var User=require('../controllers/user.js');
var Blog=require('../controllers/blog.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/reg',User.reg);
router.post('/reg',User.do_reg);

router.get('/login',User.login);
router.post('/login',User.do_login);

router.get('/index',Blog.index);

//router.get('/updata/:name',Blog.updata);
router.get('/updata',Blog.updata);

module.exports = router;

