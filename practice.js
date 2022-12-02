"use strict";
//// step04_unions_literals
// let value = Math.random() > 0.5 ? "hello" : undefined;
// if (value) value.toUpperCase();
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
sphere = ball;
ball = sphere;
let tube = { diameter: 12, length: 3 };
// tube = ball;//Error
ball = tube;
console.log(ball);
