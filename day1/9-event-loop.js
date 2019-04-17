setImmediate(function A() {
    console.log(1);
    setImmediate(function B(){
        console.log(2);
        process.nextTick(function () {
            console.log('nextTick');
        });
        setTimeout(function t1() {
            console.log('t1');
        })
    });
});
setTimeout(function t2() {
    console.log('t2');
    setTimeout(function t3() {
        console.log('t3');
    });
    setTimeout(function t4() {
        console.log('t4');
    });
}, 0);

/*
t2    1    t3     t4     2     nextTick      t1
*/