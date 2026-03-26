        import prompt from "prompt-sync"
        const p=prompt()
        let num=p("Enter the range : ")
        let a = 0
        let b = 1
        console.log(a, " ");
        console.log(b, " ");
        
        let i = 0,fib
        while (i < num-2) {
            fib = a + b
            console.log(fib, " ")
            a = b
            b = fib
            i++

        }