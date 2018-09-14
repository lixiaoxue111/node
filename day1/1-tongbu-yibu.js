/*
    js本身为异步

    同步：从上到下执行
    异步：谁快先执行谁  由回调函数和触发条件决定
    如果当前线程不退出  不能从消息循环中取回事件  除非有特殊触发事件产生


*/
/*for (var i=1;i<=3;i++){
    setTimeout(function () {
        console.log(i);   // 4  4   4  当前作用域没有i 向上级作用域寻找
    },0)
}*/


/*
var start=new Date();
setTimeout(function () {
    var end=new Date();
    console.log('Time elapsed :',(end-start),'ms')
},500);
while (new Date-start<1000) {}*/


function Person() {
    this.think=function (callback) {
        console.log('thing');
        setTimeout(function () {
            callback();
        },5000);
    };
    this.answer=function () {
        console.log("answer other");
    }
}
var person=new Person();
person.think(function () {
    console.log('I am thinking 5 m answer right');
});
person.answer();



