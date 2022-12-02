// step04_unions_literals
let value = Math.random() > 0.5 ? "hello" : undefined;
if (value) value.toUpperCase();

value?.toUpperCase();

type dataTypes = boolean | string | number;

let valu2: dataTypes;

type dataTypesMayBe = dataTypes | undefined;

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

// //Interfaces
interface Manager {
  name: string;
  subOrdinate?: number;
}

let storeManager: Manager = {
  name: "Brad",
  // subOrdinate: 3,
};
