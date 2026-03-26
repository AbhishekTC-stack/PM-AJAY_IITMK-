import array from "lodash"
import {sum} from "./sum.js"
import {sub} from "./sum.js"

// import sum from "./sum.js"
let name="aswani Vijoy"
const a=[1,2,3,4,5]
console.log(a)
// console.log("Reverse of array is",a.reverse());
console.log("Reverse of array is",array.reverse(a));
console.log("Sum = ",array.sum(a));
console.log("Name = ",array.capitalize(name));


console.log("Sum=",sum(5,5))
console.log("Difference=",sub(5,10))



