/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'db'
});

exports.sel_data=function(callback){
    /!*connection.connect();

    connection.query('select * from user', function (error, results, fields) {
        if (error) throw error;
        //console.log('The solution is: ', results[0].solution);
        //console.log(results);
        callback(results);
        connection.end();
    });*!/
    var sql="select * from user "
};*/
var db=require('./db.js');

exports.reg_data=function (name,pass,callback) {
    var sql="insert into t_users(USER_ID,ACCOUNT,PASSWORD)";
    db.query(sql,[name,pass],callback);
};

exports.sel_data=function (name,pass,callback) {
   // var sql="insert into user(uid,name,pass) values(null,?,?)";
    //var sql="select * from t_users where ACCOUNT=? and PASSWORD=?";
    var sql="select * from t_user";
    db.query(sql,[name,pass],callback);
};

exports.c_name=function (name,callback) {
    var sql="select * from user where name=? pass=?";
    db.query(sql,[name,pass],callback);
    
};
