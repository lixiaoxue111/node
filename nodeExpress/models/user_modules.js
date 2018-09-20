var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'me',
    password : 'secret',
    database : 'my_db'
});

exports.sel_data=function(callback){
    connection.connect();

    connection.query('select * from user', function (error, results, fields) {
        if (error) throw error;
        //console.log('The solution is: ', results[0].solution);
        //console.log(results);
        callback(results);
        connection.end();
    });
}