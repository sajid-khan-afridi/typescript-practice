"use strict";
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
class Car {
    constructor(model, color) {
        this.model = model;
        this.color = color;
    }
    displayAll() {
        return `${this.color} ${this.model}`;
    }
    get Licence() {
        return this.licence;
    }
    set Licence(val) {
        this.licence = val;
    }
}
const civic = new Car("2022", "blue");
const honda = new Car("2000", "black");
console.log(civic.displayAll());
console.log(honda.displayAll());
honda.Licence = "str123"; //set is used here
console.log(honda.Licence); //get is used here
honda.licence = "newstr";
console.log(honda.licence);
