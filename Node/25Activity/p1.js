  import prompt from "prompt-sync"   
  const p=prompt()
  let num=p("Enter the number : ")
        let sum = 0,digit
        
        while (num > 0) {
            digit = num % 10
            sum = sum + digit
            num = num / 10 | 0
        }
        console.log("Sum of digits = ", sum);