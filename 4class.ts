// 1. Defining classes

// //1.1 Class declarations
// class Rectangle {
//   height: string;
//   width: string;
//   constructor(height: string, width: string) {
//     this.height = height;
//     this.width = width;
//   }
// }

// //1.2 Class expressions

// //unnamed
// let Rectangle2 = class {
//   height: string;
//   width: string;
//   constructor(height: string, width: string) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(Rectangle.name); // "Rectangle"

// // named
// let Rectangle3 = class Rectangle4 {
//   height: string;
//   width: string;
//   constructor(height: string, width: string) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(Rectangle.name); // "Rectangle2"
// //console.log(Rectangle4.name); // error

// //Miss Faiza Aziz class code practice

//readonly will prevent assignment to the field without the constructor
class Car {
  readonly model: string;
  readonly color: string;
  readonly year: number;
  licence!: string;
  constructor(model_a: string, color: string);
  constructor(model_b: string, color: string, year: number);
  constructor(model_ab: any, color: any, year?: any) {
    this.model = model_ab;
    this.color = color;
    this.year = year;
  }
  displayAll() {
    return `${this.color} ${this.model}`;
  }
  get Licence() {
    return this.licence;
  }
  set Licence(val: string) {
    this.licence = val;
  }
  // set Licence(val) {
  //   //val will infer from get return
  //   this.licence = val;
  // }
}
const civic = new Car("2022", "blue");
const honda = new Car("2000", "black");

console.log(civic.displayAll());
console.log(honda.displayAll());
// civic.color="any value"

// honda.Licence = "str123"; //set is used here
console.log(honda.Licence); //get is used here

honda.licence = "newstr";
console.log(honda.licence);
