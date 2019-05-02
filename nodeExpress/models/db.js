var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'db'
});

exports.query=function(sql,params,callback){
    pool.getConnection(function(err, connection) {
        if (err) throw err; // not connected!

        // Use the connection
        connection.query(sql,params,function (error, results, fields) {
            // When done with the connection, release it.
            connection.release();

            // Handle error after the release.
            if (error) throw error;
            callback(error,results);
            // Don't use the connection here, it has been returned to the pool.
        });
    });
};
