

//方法一
function Person() {
    this.eat=function () {
        console.log('I am eating');
    };
    this.sleep=function () {
        console.log('I am sleeping');
    }
}
module.exports=Person;

/*
//方法二
module.exports=function () {
    this.eat=function () {
        console.log('I am eating');
    };
    this.sleep=function () {
        console.log('I am sleeping');
    }
};*/
