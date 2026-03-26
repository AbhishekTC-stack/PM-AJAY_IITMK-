import prompt from "prompt-sync"
const p=prompt()
// const name=p("Enter your name:")
// console.log("Name is ",name);

const num1=p("Enter first number : ")
const num2=p("Enter second number : ")
// console.log("First Number is ",num1);
// console.log("Seecond Number is ",num2);
let sum=Number(num1)+Number(num2)
// console.log("Sum = ",sum);

console.log(`Sum of ${num1} and ${num2} is ${sum}`);

