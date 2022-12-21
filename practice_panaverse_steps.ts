export {};
// //step00a_json_objects

// // //step00d_assignability_error
// let message = "Hello World";
// message = 6;
// console.log(message);

// // step04_unions_literals
// let age: number | "1" | "2";
// age = "1";
// age = "2";
// age = 22;
// age = "saj";

// //step05a_objects
// let student: {
//   name: string;
//   age: number;
// };
// student = {
//   name: "sajid",
//   age: 40,
// };

// console.log(student.age);
// console.log(student["age"]);

// //               step05b_object_aliased
// let teacher: { name: string; age: number } = { name: "alex", age: 33 };
// console.log(teacher);
// // aliased object type
// type teacher1 = {
//   name: string;
//   age: number;
// };
// let Teacher1: teacher1 = { name: "alex", age: 33 };
// // step05c_structural_typing_object_literals
// // fresh and stale
// // case#1
// // fresh
// let obj1 ={id:1,name:"sajid"};
// obj1={name:"khanwali",id:2}
// // stale
// let obj2={id:3, name:"ahsan"};
// obj1=obj2;
// // // case#2a renaming existing property
// // obj1={id:5,names:"kashif"};
// // //case#2b

// //case#3 adding excessive property
// // fresh here we can not add excessive property
// obj1={id:1,name:"khanwali",age:25};
// //stale we can add excessive property
// let obj3={id:1,name:"khanwali",age:25};
// obj2=obj3;

// var x: { foo: number };
// x = { foo: 1, baz: 2 };  // Error, excess property `baz`

// var y: { foo: number, bar?: number };
// y = { foo: 1, baz: 2 };  // Error, excess or misspelled property `baz`

// var a: { foo: number };
// var a1 = { foo: 1, baz: 2 };
// a = a1;//No Error

// var z: { foo: number, bar?: number };
// var z1 = { foo: 1, baz: 2 };
// z = z1;//No Error

//                    step05d_nested_objects
// type Author = {
//   fname: string;
//   lname: string;
// };
// type Book = {
//   author: Author;
//   name: string;
// };
// interface Author {
//   fname: string;
//   lname: string;
// }
// type Book = {
//   author: Author;
//   name: string;
// };
// let book: Book = {
//   author: {
//     fname: "Sajid",
//     lname: "afridi",
//   },
//   name: "intro to javascript",
// };

// // //                     step05e_intersection_types
// interface name {
//   name: string;
// }
// interface lname {
//   lname: string;
// }
// type fname = name & lname;
// let Fullname: fname = {
//   name: "Sajid",
//   lname: "afridi",
// };

// // //                       step05f_any__unknown_never_types
// let val1: any;
// let val2: unknown;
// val1 = val2;

// let val3: number = val2;

// function error(message: string): never {
//   throw new Error(message);
// }
// function fun1() {
//   return error("message");
// }
// function infinit(): never {
//   while (true) {}
// }

// //                            step06_explict_casting
// let myname: unknown = "Zia";
// console.log((myname as string).toUpperCase());
// console.log((<string>myname).toLowerCase());

// //                             step07a_enum
// const enum color {
//   red = 3,
//   green,
//   blue,
// }
// let index: number = color.blue;
// index = color["green"];

// // let value = color[3];

// //                               step08_arrays
// let arr: number[] = [1, 2, 3, 4, 5, 6, 7];
// let arr2: Array<number> = [8, 9, 10];

// //                               step09a_functions

type fn = (x: number, y: number) => number;

let add: fn = function (x, y) {
  return x + y;
};

let sub: (x: number, y: number) => number = function (x, y) {
  return x - y;
};

// //     callback example1
let mul = (x: number, y: number) => x * y;
let mulcallback = function (x: number, y: number, callback: fn) {
  callback(x, y);
};
mulcallback(2, 4, mul);

// //     callback example2
type fn2 = (x: string) => void;
function display(x: string) {
  console.log(x);
}
let fun = (msg: string, callback: fn2) => {
  callback(msg);
};
fun("hello", display);
