var person=require('./6-person.js');
var util=require('util');

function Student() {
    person.call(this);
    util.inherits(Student,person);
    this.study=function () {
        console.log('I am studing');
    }
}

module.exports=Student;