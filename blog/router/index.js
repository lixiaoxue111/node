//导入express框架
let express = require('express');
// 实例化路由类
let router = express.Router();
//前台首页
router.get('/',function (req,res,next) {
    res.send('首页')
});
// 前台分类页
router.get('/list',function (req,res,next) {
    res.send('分类页')
});

// 前台新闻详情页
router.get('/news',function (req,res,next) {
    res.send('新闻详情页')
});

// 前台登陆页
router.get('/login',function (req,res,next) {
    res.send('登陆')
});
//前台注册页面
router.get('/reg',function (req,res,next) {
    res.send('注册')
});

module.exports = router;