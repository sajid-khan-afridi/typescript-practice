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

const names = ["alice", "bary", "crist"];
// names.forEach((n) => {
//   console.log(n.toUpperCase());

names.forEach(function (s: string) {
  console.log(s.toUppercase());
});
