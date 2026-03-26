import prompt from "prompt-sync"
import {square,cube} from "./squarecube.js"
const p=prompt()
let num=p("Enter the Number : ")
function fact(num){
 let factorial=1
    for(let i=num;i>0;i--){
        factorial=factorial*i
    }
    console.log("Factorial= ",factorial)
}
    fact(num)    
    console.log("Square of the number = ",square(num))
    console.log("Cube of the number = ",cube(num))


