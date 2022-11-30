"use strict";
// console.log("hello");
function objFunction(pt) {
    console.log(pt.x);
    console.log(pt.y);
}
objFunction({ x: 100, y: 200 });
// Differences Between Type Aliases and Interfaces
/*the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.*/
//// Type Assertions
