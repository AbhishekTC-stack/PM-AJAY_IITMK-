import prompt from "prompt-sync"
import {isEven,isOdd} from "./number.js"
const p=prompt()
let num=p("Enter the Number : ")
isEven(num);
isOdd(num);

