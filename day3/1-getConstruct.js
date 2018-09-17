
//继承：获取构造函数
//Mystream  继承 events  （emit,on）
var events=require('events');
var util=require('util');

function Mystream() {
    events.EventEmitter.call(this);//把events.EventEmitter内存空间 拷贝给Mystream
}

util.inherits(Mystream,events.EventEmitter); // 继承  子父类建立关联    参数一：子类构造函数  参数二：

 Mystream.prototype.write=function (data) {  // prototype原型链
     this.emit('data',data);
 };

 var stream=new Mystream();
// console.log(stream instanceof events.EventEmitter); //true 说明继承有效
// console.log(Mystream.super_ === events.EventEmitter); // true

 stream.on('data',function (data) {
    console.log('recieve data: '+data);
 });
 stream.write('nononono');