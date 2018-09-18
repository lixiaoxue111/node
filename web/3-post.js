var http=require('http');
var url=require('url');
var querystring=require('querystring');
var fs=require('fs');

http.createServer(function (req,res) {
    var pathname=url.parse(req.url).pathname;
    switch (pathname) {
        case '/':
            resIndex(res);
            break;
        case '/add':
            resAdd(res,req);
            break;
        default:
            resDefault(res);
            break;
    }
}).listen(3000);

function resDefault(res) {
    res.writeHead(404,{'content-type':'text/plain'});
    res.end('no page');
}
function resIndex(res) {
    var indexPage=__dirname+'/module/'+url.parse('index.html').pathname;
    var indexData=fs.readFileSync(indexPage,'utf-8');
    res.writeHead(200,{'content-type':'text/html'});
    res.end(indexData);
}

// *****
function resAdd(res,req) {
    var postData='';
    req.setEncoding('utf8'); // 设置编码 不能写为utf-8
    req.addListener('data',function (postChunkdata) {
        postData+=postChunkdata;
    });
    req.addListener('end',function () {
        var pram=querystring.parse(postData);
        console.log(pram);
    })
}