import read from "readline"
const rl=read.createInterface({input:process.stdin,output:process.stdout});
rl.question("Enter the name: ", (name) => {
  console.log("Name is", name);

  
  rl.question("Enter the first number: ", (number1) => {
    console.log("First Number is", number1);

    
    rl.question("Enter the second number: ", (number2) => {
      console.log("Second Number is", number2);

      
      const sum = Number(number1) + Number(number2);
      console.log("Sum of first and second number is", sum);

      
      rl.close();
    });
  });
});

