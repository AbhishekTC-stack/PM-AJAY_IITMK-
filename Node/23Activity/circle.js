import prompt from "prompt-sync"
import { PI } from "./constant.js"
const p=prompt()
let r=p("Enter the radius : ")
let a=PI*r*r
console.log("Area of the circle = ",a);
