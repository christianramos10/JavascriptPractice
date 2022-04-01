'use strict'
//Let vs Var
//Variable range - main difference

//Var range
var number = 40;
console.log(number); //Value = 40

if(true){
  var number = 50;
  console.log(number); //Value = 50
}

console.log(number); //Value = 50, because we change the value inside the method

//Let range
let number2 = 10;
console.log(number2);

if(true){
  let number2 = 5;
  console.log(number2);
}
console.log(number2)

//How to use them both?
var person = "Christian";
console.log(person);

if(true){
  let person = "Fonsi"; //It will change person inside the method only
  console.log(person);
}

console.log(person);
