let a=[17,20,3,5,15]
let first=-Infinity
let second=-Infinity
for(let i of a){
    if(i>first){
        second=first
        first=i
    }
    else if(i>second && i!==first){
        second=i
    }
}
console.log("Second Largest Element is ",second);
