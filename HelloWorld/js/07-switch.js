//Switch

var age = 10;
var print = "";
switch(age){
  case 18:
    print = "You are an adult in some countries";
  break;
  case 25:
    print = "You are in your twenties";
  break;
  case 70:
    print = "You are an old man";
  break;
  case 10:
    print = "You are a minor";
  break;
  default:
    print = "Your age is neutral";
}

console.log(print);
