// step04_unions_literals
let newAge = Math.random() > 0.6 ? "Khan" : 60;

//newAge.toLowerCase();//Error: Transpiler cannot narrow

if (newAge === "Khan") {
  // Type of newAge: string
  newAge.toUpperCase(); // Can be called
}

if (typeof newAge === "string") {
  // Type of newAge: string
  newAge.toUpperCase(); // Can be called
}

typeof newAge === "string"
  ? newAge.toUpperCase() // Ok: string
  : newAge.toFixed(); // Ok: number

let age: number | "died" | "unknown";

age = 90; //OK
age = "died"; //OK
age = "unknown"; //OK
//age = "living";//Error

let zia: "zia";

zia = "zia";
//zia = "khan";//Error

let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;

if (yourName) {
  yourName.toUpperCase(); // Ok: string
}

//yourName.toUpperCase();//Error: Object is possibly 'undefined'.

yourName?.toUpperCase(); //OK

// You can also define a type alias
type RawData = boolean | number | string | null | undefined;

let data: RawData;

// You can even combine them

type Id = number | string;

type IdMaybe = Id | undefined | null;
