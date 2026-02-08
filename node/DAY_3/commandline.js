const args=process.argv.slice(2)
console.log (args);
console.log("sum is;",Number(args[0])+Number(args[1]))
 if(Number(args[0])>args[1])
    console.log (`The largest element is ${args[0]}`)
else console.log(`The largest element is ${args[1]}`)