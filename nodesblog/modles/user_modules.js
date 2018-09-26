var db=require('./db.js');
exports.reg_data=function(name,pass,callback){
    var sql="insert into t_users(USER_ID,ACCOUNT,PASSWORD) values(null,?,?)";
    db.query(sql,[name,pass],callback);
};
exports.sel_data=function (name,pass,callback) {
    var sql="select * from t_users where ACCOUNT=? and PASSWORD=?";
    db.query(sql,[name,pass],callback);
};



/*
insert
insert into 表名(列名,列名,列名) values(值,值,值)

delete
    delete from 表名 where uid=1

update
update 表明 set 列名=值,列名=值 where uid=1

select
select * from 表名
select * from 表名 where

*/