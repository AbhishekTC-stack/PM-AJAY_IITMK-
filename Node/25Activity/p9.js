  //JS program to check whether the given string is palindrome
        import prompt from "prompt-sync"
        const p=prompt()
        let str=p("Enter the String to be Reveresed : ")
        let j = ""
        for (let i = str.length - 1; i >= 0; i--) {
            j += str[i]

        }
        console.log("The reverse string is ", j)
        if (str == j) {
            console.log("Palindrome")

        }
        else {
            console.log("Not Palindrome")

        }