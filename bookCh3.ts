// //Chapter 3. Unions and Literals
export {};

// //1.Union Types
//where we don't know what the type of the value the variable is contained.

let mathematician = Math.random() > 0.5 ? 70 : "Mark Goldberg";
let name: string | null = null;
// mathematician.toLowerCase(); //error

// //2. Narrowing
//The above situation need to treat more specific way called narrowing
// The logic is used to implement the narrowing called type guard

// let physician = Math.random() > 0.5 ? 70 : "Mark";
// if (typeof physician === "string") {
//   physician.toLocaleLowerCase();
// } else {
//   physician.toFixed();
// }

// //3. Literal Types
// //Literal Types is gone more specific to primitive type.
//// hover over the below names.

// let firstName = "Asif";
// const lastName = "Ahmad";
// // Here the TypeScript will infer the variable to be that the literal value i.e. "Ahmad" as a type.

//// Primitive type is the set of all possible literal value of that type other than the boolean, undefined and null type.

// //4.Strict Null Checking

//const firstName: string = null;
////In TypeScript, strictNullChecks(tsconfig.json) is by defualt false

// //4.1 Truthiness Narrowing
//// All values are truthy but except 0,null,undefined and NaN.

// let geneticist = Math.random() > 0.5 ? "Barbara McClintock" : undefined;
// if (geneticist) {
//   geneticist.toUpperCase(); // Ok: string
// }
// geneticist.toUpperCase(); // Error: Object is possibly 'undefined'.

// geneticist && geneticist.toUpperCase(); // Ok: string | undefined
// geneticist?.toUpperCase(); // Ok: string | undefined
// // logica "&&" and optional "?." can perform truthiness check as well.

//truthiness does not that much intelligent whether the string is undefined or an empty string
let biologist = Math.random() > 0.5 && "Rachel Carson";
if (biologist) {
  biologist; // Type: string
} else {
  biologist; // Type: false | string
}

// //4.2 Variables Without Initial Values
// // TypeScript is smart enough to understand that the variable is undefined until a value is assigned
let mathematician: string;
mathematician?.length;
// // Error: Variable 'mathematician' is used before being assigned.
