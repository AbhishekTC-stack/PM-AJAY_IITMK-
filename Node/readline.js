import read from "readline"
const rl=read.createInterface({input:process.stdin,output:process.stdout});
rl.question("Enter the Name : ",(name)=>{
    console.log("Name is ",name);
    rl.question("Enter first number : ",(num1)=>{
        console.log("First number is ",num1);
        rl.question("Enter second number : ",(num2)=>{
        console.log("Second number is ",num2);
        let sum=Number(num1)+Number(num2)
        console.log("Sum = ",sum);
        rl.close();
        
        
    })
        
    })
    
})