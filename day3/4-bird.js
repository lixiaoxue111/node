var Animal=require('./2-animal.js');
var util=require('util');
function Bird() {
    Animal.call(this);
    util.inherits(Bird,Animal);
    this.say=function () {
        console.log('ji...ji')
    }
}

module.exports=Bird;
// 动态类  直接把类公布给外部
