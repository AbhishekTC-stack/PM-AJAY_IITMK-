let num=356,temp=num

rev=0
while(num>0){
rem=num%10
rev=rev*10+rem
num=parseInt(num/10)
}
console.log(rev)

if(temp==rev){
    console.log("Given number is palindrome")
}
else{
    console.log("Given number is not palindrome")

}