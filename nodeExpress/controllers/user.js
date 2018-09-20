var crypto=require('crypto'); // 加密
var User_modules=require('../models/user_modules.js');

exports.reg=function (req,res,next) {
    console.log('reg----');
    res.render('reg'); // 渲染reg页面
};

exports.do_reg=function (req,res,next) {
    var name=req.body.username;
    var pass=req.body.pass;
    //console.log(name);
    //console.log(pass);

    var mpass=xmd5(pass);
    console.log(mpass);

    User_modules.sel_data(function (data) {
        console.log(data);
    })
};

function xmd5(str) {  // 加密
    var hash=crypto.createHash('md5');
    hash.update(str);
    var md5dtr=hash.digest('hex');
    return md5dtr;
}

exports.checkname=function (req,res,next) {
    var name=req.body.username;
    if (name=='11'){
        //res.send('success');
        var str='{"id":1,"name":xiaoming"}';
        res.send(str);
    } else {
        res.send('error');
    }
};




