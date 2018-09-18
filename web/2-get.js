var http=require('http');
var url=require('url');
var querystring=require('querystring');
http.createServer(function (req,res) {
    //console.log(url.parse(req.url));
    var query=url.parse(req.url).query;
    var qobj=querystring.parse(query);
    console.log(qobj);
}).listen(3000);