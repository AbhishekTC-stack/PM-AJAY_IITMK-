 //print multiplication table for a given number
 import prompt from "prompt-sync"
 const p=prompt()
 let n=p("Enter the Number : ")
        
        for(let i=1;i<=10;i++){
            console.log(`${i} x ${n} = `,n*i)

        }