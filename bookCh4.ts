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
// this means typescript strickly follow the type
// type FirstName = {
//   firstName: string;
// };
// type LastName = {
//   lastName: string;
// };
// const FullName = {
//   firstName: "Lucille",
//   lastName: "Clifton",
// };
// let firstName: FirstName = FullName;
// // Ok and allowed: `FullName` contains a `firstName` property of type `string`
// let lastName: LastName = FullName;
// // Ok and allowed: `FullName` contains a `lastName` property of type `string`

// //2.1 Usage Checking
// type Name = { firstName: string; lastName: string };

// let fullName: Name = { lastName: "Ali", firstName: "Imran" };

// //let name: Name = { firstName: "Alexander" };
// //error: Property 'lastName' is missing in type

// //2.2 Excess Property Checking
// // excess property make sure that the is not mention in type which is not allowed

// type Alexander = { age: number; name: string };

// let alexander: Alexander = { age: 21, name: "Alexander" };

// let extraToAlexander: Alexander = {
//   age: 21,
//   name: "Alexander",
//   location: "USA",
// };
// //error due to location:"USA" which is excess property

// //2.3 Nested Object Types
// //2.4 Optional Properties

// type Author = {
//   firstName: string;
//   lastName: string;
// };

// type Book = {
//   author: Author;
//   name: string;
//   pages?: number;
// };

// const book: Book = {
//   author: {
//     firstName: "Niccolo",
//     lastName: "Machiavelli",
//   },
//   name: "The Prince",
//   // pages: 10,
// };

// //3. Unions of Object Types //3.1 Inferred Object-Type Unions
// // only one of object can be selected or mutually exclusive
// //hover over book then you will see the union and the optional properties
// const book =
//   Math.random() > 0.5
//     ? { name: "The Prince", origin: "Italy", pages: 5 }
//     : { name: "The Secrets of the Self", origin: "Pakistan", words: 500 };

// console.log(book.words); //we will be in trouble when we want a value and it gives undefined

// //3.2 Explicit Object-Type Unions
// type PoemWithPages = { name: string; pages: number };
// type PoemWithRhymes = { name: string; rhymes: boolean };

// type Poem = PoemWithPages | PoemWithRhymes;

// const poem: Poem =
//   Math.random() > 0.5
//     ? { name: "The Double Image", pages: 7 }
//     : { name: "Her Kind", rhymes: true };

// poem.name;

// poem.rhymes; //error:Property 'rhymes' does not exist on type 'Poem'
// // at line 98 console.log(book.words); it is allowed because implicit not explicit
// // it is limitation of implicit

// //3.3 Narrowing Object Types
// // solution to Explicit Object-Type Unions
type PoemWithPages = { name: string; pages: number };
type PoemWithRhymes = { name: string; rhymes: boolean };

type Poem = PoemWithPages | PoemWithRhymes;

const poem: Poem =
  Math.random() > 0.5
    ? { name: "The Double Image", pages: 7 }
    : { name: "Her Kind", rhymes: true };

if ("pages" in poem) {
  //narrowing i think
  poem.pages;
} else {
  poem.rhymes;
}

// //3.4 Discriminated Unions
type ImranInPakistan = { name: string; age: number; type: "Pakistan" };
type ImranOverseas = {
  name: string;
  age: number;
  type: "Overseas";
  nickName: string;
};

type Imran = ImranInPakistan | ImranOverseas;

const imran: Imran =
  Math.random() > 0.5
    ? { name: "Imran", age: 30, type: "Pakistan" }
    : {
        name: "Imran",
        age: 18,
        type: "Overseas",
        nickName: "Alexander",
      };

if (imran.type === "Pakistan") {
  //narrowing
  console.log(`He's in Pakistan so we'll call him ${imran.name}.`);
} else {
  console.log(`He's not in Pakistan so we'll call him ${imran.nickName}`);
}
