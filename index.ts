// console.log("hello");

// let Mathemetician = Math.random() > 0.5 ? undefined : "hello";
// console.log(Mathemetician);

// let thinker: string | null = null;
// if (Math.random() > 0.5) {
//   thinker = "khan";
// }

// let physicist = Math.random() > 0.5 ? "Marie Curie" : 84;
// physicist.toUpperCase();

// // Narrowing
// let admiral: string | number;
// admiral = "Hopper";
// admiral.toUpperCase();

// // // Typeof Checks
// let scientist = Math.random() > 0.5 ? "Rosalind" : 51;
// // if (typeof scientist == "string") {
// //   scientist.toUpperCase();
// // } else {
// //   scientist.toFixed();
// // }
// let result =
//   typeof scientist === "string" ? scientist.toUpperCase() : scientist.toFixed();
// console.log(result);

// // Literal Types

// const philopher = "Hypatia";
// philopher = "hello";

// let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
// obj.foo();
// obj();
// obj.bar = 100;
// console.log("obj= ", obj);
// obj = "hello";
// const n: number = obj;
// console.log("n= ", n);
// console.log("n= ", typeof n);

// let obj: any;
// obj = "hello";
// let n: number = obj;

// const names = ["alice", "bary", "crist"];
// // names.forEach((n) => {
// //   console.log(n.toUpperCase());

// names.forEach(function (s) {
//   console.log(s.toUpperCase());
// });

// //Optional Properties
// obj: {
//   first: string,
//   last?: string | undefined,
// }
// function printName(obj: { first: string; last?: string }) {
//   // Error - might crash if 'obj.last' wasn't provided!
//   console.log(obj.last.toUpperCase());
//   //Object is possibly 'undefined'.
//   if (obj.last !== undefined) {
//     // OK
//     console.log(obj.last.toUpperCase());
//   }

//   // A safe alternative using modern JavaScript syntax:
//   console.log(obj.last?.toUpperCase());
// }
// // Both OK
// printName({ first: "Bob" });
// printName({ first: "Alice", last: "Alisson" });

// // //Union Types
// function printID(id: number | string) {
//   //console.log(id);
//   // console.log(id.toUpperCase());

//   // type annotations 'Narrowing occurs'
//   if (typeof id === "string") {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id);
//   }
// }
// printID(12);
// printID("hello");
function welcomePeople(x: string | string[]) {
  if (Array.isArray(x)) {
    console.log(`hello ${x.join(" and ")}`);
  } else {
    console.log(`hello ${x}`);
  }
}
welcomePeople("Alex");
welcomePeople(["Alex", "Briden"]);
