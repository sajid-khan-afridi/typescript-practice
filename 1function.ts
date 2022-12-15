//1.Named function
//named function can be typed like the below
function add(x: number, y: number): number {
  return x + y;
}

//2. function expression

//method1
type fn = (x: number, y: number) => number;
let addnum2: fn = function (a, b) {
  return a + b;
};

// method2
let addnum: (x: number, y: number) => number = function (a, b) {
  return a + b;
};

//3. callback function

// method1
type fn2 = (a: string) => void;

function fun1(callback: fn2) {
  callback("hello");
}

// method2
function myCallBack(text: string) {
  console.log("inside myCallback " + text);
}

function callingFunction(
  initialText: string,
  callback: (text: string) => void
) {
  callback(initialText);
}

callingFunction("myText", myCallBack);
