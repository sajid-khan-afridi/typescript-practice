"use strict";
function buildName(firstName, ...restOfName) {
    //Named function with Rest parameters
    console.log(restOfName);
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
// console.log("sajid", "sdf", "bb", "hh", "ee");
