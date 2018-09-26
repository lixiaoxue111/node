var Blog_modules=require('../modles/blog_modules.js');

exports.index=function (req,res,next) {
    Blog_modules.sel_blog(function (err,data) {
        //console.log(data);
        res.render('index_logined',{
            'sess':req.session,
            'blogs':data,
        });
    })
};
exports.updata=function (req,res,next) {
    var bid=req.query.id;
    console.log(bid);
};