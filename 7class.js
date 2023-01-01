//                      //class
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    return Student;
}());
var obj = new Student("Ahmad");
console.log(obj.getName());
//                      //readonly
// class Greeter {
//   readonly name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
//   err() {
//     this.name = "not ok";
//     // Cannot assign to 'name' because it is a read-only property.
//   }
// }
// const obj = new Greeter("another value");
// console.log(obj.name);
// g.name = "also not ok";
//                            //Super Calls
// class Base {
//   k = 4;
//   constructor(kValue: number) {
//     this.k = kValue;
//   }
// }
// class Derived extends Base {
//   constructor() {
//     // Prints a wrong value in ES5; throws exception in ES6
//     super(5);
//     console.log(this.k);
//     // 'super' must be called before accessing 'this' in the constructor of a derived class.
//   }
// }
// export {};
