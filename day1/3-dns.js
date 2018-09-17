
/* node 进行域名简析*/
//www.baidu.com -->203.19.0.8    IPV4 IPV6

var dns=require('dns');
dns.resolve('www.baidu.com','A',function (err,addresses) {
    if (err){
        console.log(err);
    } else{
        console.log(addresses);
    }

});