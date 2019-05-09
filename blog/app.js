// 导入express框架
let express = require('express');
// 初始化 express
let app = express();

// 处理post请求
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
// 设置模板引擎相关信息
let ejs = require('ejs');

// 设置模板存放目录
// 第一个参数：固定的
// 第二个参数：模板存放的目录
app.set('views','./views');

// 定义使用的模板引擎
// 第一个参数：模板引擎的名称，模板引擎的后缀
// 第二个参数：使用模板引擎的方法
app.engine("html",ejs.__express);

// 在app中注册模板引擎
// 第一个参数：固定
// 第二个参数：与定义的模板引擎的名称有关
app.set('view engine','html');

// 设置静态资源的访问
app.use('/public',express.static(__dirname+"/public"));
// 导入前台的路由文件
let indexRouter = require("./router/index.js");
// 使用前台路由
// 参数一：匹配路由规则
// 参数二：请求路由规则
app.use('/',indexRouter);
// 后台路由
let adminRouter = require('./router/admin.js');
app.use('/admin',adminRouter);
// 完善首页路由
/*app.get('/',function (req,res,next) {
    // req  request对象 保存客户端请求的相关信息
    // res  response对象 服务端输入响应
    // next  执行下一个方法
    //res.send('blog');
    res.render('home/index')

});*/
// 监听服务器
app.listen(3000,function () {
    console.log("服务已启动  在3000 端口");
});