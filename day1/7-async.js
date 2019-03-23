async function firstReq(){
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        },2000)
    })
}

async function asyncPrint() {
    console.log("开始");
    await firstReq();
    console.log('第一个请求完成');
}

asyncPrint(); // 开始  （两秒后）第一个请求完成