
var num = 7;
var num1 = 12;

var operation = num + num1;
var operation2 = num1%num;

//Operators
alert("Result: " + operation); //Sum
alert("Result " + operation2); //Remainder


//Data types
var num = 1; //int
var text = "This is a text"; //string
var bool = true; //boolean

var falseNumber = "33";

Number(falseNumber); //Converts string to Number, similar to parseInt();

//To detect a data type, use typeof varName
console.log("Variable num is a " + typeof String(num));
