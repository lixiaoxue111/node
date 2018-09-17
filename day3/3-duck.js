var Animal=require('./2-animal.js');
var util=require('util');
function Duck() {
    Animal.call(this);
    util.inherits(Duck,Animal);
    this.say=function () {
        console.log('ga...ga');
    }
}

var duck=new Duck();
exports.say=duck.say; //静态类（直接输出对象）  对象可以直接调用方法