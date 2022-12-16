// 1. Defining classes

//1.1 Class declarations
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

  //1.2 Class expressions
  
  //unnamed
  let Rectangle2 = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  console.log(Rectangle.name); // "Rectangle"

  // named
// let Rectangle3 = class Rectangle4 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };
// console.log(Rectangle.name); // "Rectangle2"
// console.log(Rectangle4.name); // error
