//导入express框架
let express = require('express');
// 实例化路由类
let router = express.Router();

router.get('/',function (req,res,next) {
   res.render('admin/index');
});
router.get('/welcome',function (req,res,next) {
   res.render('admin/welcome');
});
// 管理员管理
let adminRouter = require('./admin/admin.js');
router.use('/admin',adminRouter);
// 会员管理
let useRouter = require('./admin/user.js');
router.use('/user',useRouter);

// 栏目管理

// 轮播图管理

// 新闻分类管理

// 新闻管理

// 评论管理

// 系统管理

module.exports = router;