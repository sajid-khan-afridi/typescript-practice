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

// //step05b_object_aliased
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

// step05d_nested_objects
type Author={
  fname:string;
  lname:string;
};
<<<<<<< HEAD
let Teacher1: teacher1 = { name: "alex", age: 33 };
//interface
interface Teacher2
=======
type Book={
  author:Author
  name:string;
  };
let book:Book={

}
>>>>>>> 492074a72255fa576cdabe363c042562c2d9cbb4
