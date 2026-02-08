rev=0
let num=121
rem=0
palindrome=121
while(num!=0){
    rem=num%10
    rev=rev*10+rem;

    num=parseInt(num/10);
}
    
if(rev==palindrome){
    console.log("The given number is palindrome")
}else console.log("The given number is not a palindrome");