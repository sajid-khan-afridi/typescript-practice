"use strict";
//1.Named function
//named function can be typed like the below
function add(x, y) {
    return x + y;
}
let addnum2 = function (a, b) {
    return a + b;
};
// method2
let addnum = function (a, b) {
    return a + b;
};
function fun1(callback) {
    callback("hello");
}
// method2
function myCallBack(text) {
    console.log("inside myCallback " + text);
}
function callingFunction(initialText, callback) {
    callback(initialText);
}
callingFunction("myText", myCallBack);
