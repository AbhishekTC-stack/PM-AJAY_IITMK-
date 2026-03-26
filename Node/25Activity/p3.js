 //find the sign of the product of three numbers.
 import prompt from "prompt-sync"
 const p=prompt()
 let a=p("Enter first number : ")
 let b=p("Enter second number : ")
 let c=p("Enter third number : ")

    
    let n=a*b*c
    if(n>0){
     console.log("Sign is positive")
        
    }
    else if(n==0)
    {
     console.log("Zero")
        
    }
    else{
     console.log("Sign is negetive")
        
    }
