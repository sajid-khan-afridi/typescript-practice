"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let poetLater;
// Ok
poetLater = {
    born: 1935,
    name: "Sara Teasdale",
};
const poem = Math.random() > 0.5
    ? { name: "The Double Image", pages: 7 }
    : { name: "Her Kind", rhymes: true };
if ("pages" in poem) {
    //narrowing i think
    poem.pages;
}
else {
    poem.rhymes;
}
const imran = Math.random() > 0.5
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
}
else {
    console.log(`He's not in Pakistan so we'll call him ${imran.nickName}`);
}
