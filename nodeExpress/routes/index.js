var express = require('express');
var router = express.Router();
//
var User=require('../controllers/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }); // res.render 渲染页面
});


router.get('/xx',function (req,res,next) {

   /* res.writeHead(200,{'content-type':'text/plain'});
    res.end('to codeing')*/  //原生写法

    res.send('coding----');
});

router.get('/reg',User.reg);
router.post('/reg',User.do_reg);

router.post('/checkname',User.checkname);

router.get('/login',User.login);


module.exports = router;
