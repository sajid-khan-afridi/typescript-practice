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
