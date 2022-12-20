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
let teacher: { name: string; age: number } = { name: "alex", age: 33 };
// aliased object type
type teacher1 = {
  name: string;
  age: number;
};
let Teacher1: teacher1 = { name: "alex", age: 33 };
//interface
interface Teacher2
