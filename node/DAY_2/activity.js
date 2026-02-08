import prompt from "prompt-sync";
const p=prompt();
let num=p("Enter the Number : ")
function checkMultiple(num) {
  if (num % 3 === 0 && num % 7 === 0) {
    console.log(num + " is a multiple of both 3 and 7");
  } else if (num % 3 === 0) {
    console.log(num + " is a multiple of 3");
  } else if (num % 7 === 0) {
    console.log(num + " is a multiple of 7");
  } else {
    console.log(num + " is not a multiple of 3 or 7");
  }
}
checkMultiple(num)

//cgpa


const c=prompt() ;  
let cgpa=c("Enter the value :")        

        if(cgpa==8){console.log(`You got 8 CGPA`)}
        else if(cgpa==10){console.log(`You got 10 CGPA`)}
        else if(cgpa==7){console.log(`You got 7 CGPA`)}
        else{`Enter a valid number`}