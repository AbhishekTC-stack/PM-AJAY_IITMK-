 //reverse of a number
 import prompt from "prompt-sync"
  const p=prompt()
  let num=p("Enter the Number : ")
  let rev=0,rem
        while(num>0){
            rem=num%10
            rev=rev*10+rem
            num=num/10|0
        }
        console.log("<br><br>Reverse = ",rev)