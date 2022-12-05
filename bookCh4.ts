// // Chapter 4. Objects
export {};

// //1. Object Types
// //1.1 Declaring Object Types
// let poetLater: {
//   born: number;
//   name: string;
// };
// // Ok
// poetLater = {
//   born: 1935,
//   name: "Mary Oliver",
// };

// //1.2 Aliased Object Types
type Poet = {
  born: number;
  name: string;
};
let poetLater: Poet;
// Ok
poetLater = {
  born: 1935,
  name: "Sara Teasdale",
};

// //2. Structural Typing
type WithFirstName = {
  firstName: string;
};
type WithLastName = {
  lastName: string;
};
const hasBoth = {
  firstName: "Lucille",
  lastName: "Clifton",
};
// Ok: `hasBoth` contains a `firstName` property of type `string`
let withFirstName: WithFirstName = hasBoth;
// Ok: `hasBoth` contains a `lastName` property of type `string`
let withLastName: WithLastName = hasBoth;
