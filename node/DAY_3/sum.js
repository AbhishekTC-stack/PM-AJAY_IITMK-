import prompt from "prompt-sync";
const p = prompt();

const num1 = Number(p("Enter first number: "));
const num2 = Number(p("Enter second number: "));
console.log("First number is:", num1);
console.log("Second number is:", num2);
const sum = num1 + num2;
console.log("Sum is:", sum);


//differnce
const num3 = Number(p("Enter the first number:"));
const num4 = Number(p("Enter the second number:"));
console.log("First number is",num3);
console.log("First number is",num4);
const Difference =num3 - num4;
console.log("Difference Between these two numbers is",Difference);

