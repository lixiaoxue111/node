var http=require('http');
urls=['www.baidu.com','www.qq.com','www.souhu.com'];
function getPage(url) {
    var start=new Date();
    http.get({'host':url},function (res) {
        console.log('Got respone from :'+url);
        console.log('request took:',(new Date()-start),'ms');
    })
}
for(var i=0;i<urls.length;i++){
    getPage(urls[i]);
}