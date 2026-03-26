 //calculate the root of a quadratic equation.
 import prompt from "prompt-sync"
 const p=prompt()
 let a=p("Enter first number : ")
 let b=p("Enter second number : ")
 let c=p("Enter third number : ")
    
    let D = b * b - 4 * a * c;   

if (D === 0) {
    let root = -b / (2 * a);
    console.log("Root =", root);
}
else if (D > 0) {
    let sqrtD = Math.sqrt(D);
    let root1 = (-b + sqrtD) / (2 * a);
    let root2 = (-b - sqrtD) / (2 * a);
    console.log("Root1 =", root1);
    console.log("Root2 =", root2);
}
else {
    let realPart = -b / (2 * a);
    let imaginaryPart = Math.sqrt(-D) / (2 * a);
    console.log(`Root = ${realPart} + ${imaginaryPart}i`);
    console.log(`Root = ${realPart} - ${imaginaryPart}i`);
}