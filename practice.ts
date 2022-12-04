//// step04_unions_literals
// let value = Math.random() > 0.5 ? "hello" : undefined;
// if (value) value.toUpperCase();

// value?.toUpperCase();

// type dataTypes = boolean | string | number;

// let valu2: dataTypes;

// type dataTypesMayBe = dataTypes | undefined;

// step05a_objects

// type student = {
//   name: string;
//   age: number;
// };
// let student = {
//   name: "Alex",
//   age: 40,
// };

//// step05b_object_aliased
// student: student;
// student={
//   name:3;

// }

// // //Interfaces
// interface Manager {
//   name: string;
//   subOrdinate?: number;
// }

// let storeManager: Manager = {
//   name: "Brad",
//   // subOrdinate: 3,
// };

// //step05c

interface Sphere {
  diameter: number;
}
interface Ball {
  diameter: number;
}
let ball: Ball = { diameter: 10 };
let sphere: Sphere = { diameter: 20 };

sphere = ball;
ball = sphere;

// If we add in a type which structurally contains all of
// the members of Ball and Sphere, then it also can be
// set to be a ball or sphere.

interface Tube {
  diameter: number;
  length: number;
}

let tube: Tube = { diameter: 12, length: 3 };

// tube = ball;//Error
ball = tube;
console.log(ball);
