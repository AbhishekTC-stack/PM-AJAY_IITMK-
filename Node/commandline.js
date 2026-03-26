const args=process.argv
console.log("Sum = ",Number(args[2])+Number(args[3]));
if(args[2]>args[3]){
    console.log(args[2] ,"is greater");   

}
else{
    console.log(args[3] ,"is greater");   

}