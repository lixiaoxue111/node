var http=require('http');
var url=require('url');
var fs=require('fs');
http.createServer(function (req,res) {
    /*if ('/favicon.ico'==pathname){
        return ;
    } */
    /*console.log(req.url);
    console.log(req.method);
    console.log(req.headers);*/

    //console.log(url.parse(req.url).pathname);
    var pathname=url.parse(req.url).pathname; // 获取响应地址
    switch (pathname) {
        case '/' :
            resIndex(res); // 加载页面的函数
            break;
        case '/img' :
            resImg(res);
            break;
    }

}).listen(3000);
console.log('start server');

function resIndex(res) {
    var indexPage=__dirname+'/module/'+url.parse('index.html').pathname;
    var indexData=fs.readFileSync(indexPage,'utf-8');
    res.writeHead(200,{'content-type':'text/html'});
    res.end(indexData);
}

function resImg(res) {
    var imgPage=__dirname+'/module/'+url.parse('1.png').pathname;
    var imgData=fs.readFileSync(imgPage);
    res.writeHead(200,{'content-type':'image/jpeg'});
    res.end(imgData);
}