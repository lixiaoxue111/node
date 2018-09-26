var User_modules=require('../modles/user_modules.js');

exports.reg=function (req,res,next) {
    res.render('reg');
};
exports.do_reg=function (req,res,next) {
    var name=req.body.email;  // email页面相应标签的name属性
    var pass=req.body.pwd;
    User_modules.reg_data(name,pass,function (error,data) {
        if(data.affectedRows==1){
            res.redirect('/login');
        }
    })
};


exports.login=function (req,res,next) {
    //res.send('kkk');
    res.render('login');
};
exports.do_login=function (req,res,next) {
   var name=req.body.email;
   var pass=req.body.pwd;
   User_modules.sel_data(name,pass,function (err,data) {
       if(data.length>0){
           //console.log(data);
           req.session=data[0];
           res.redirect('/index');
       }
   })
};