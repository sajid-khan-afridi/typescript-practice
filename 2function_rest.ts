function buildName(firstName: string, ...restOfName: string[]) {
  //Named function with Rest parameters
  return firstName + " " + restOfName.join(" ");
}

var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

console.log(employeeName);
// console.log("sajid", "sdf", "bb", "hh", "ee");
