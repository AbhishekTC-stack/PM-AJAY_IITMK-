//JS program to print prime numbers between 10 and 30
        
        for (let num = 10; num <= 30; num++) {

            let flag = 0;

            for (let i = 2; i < num; i++) {
                if (num % i == 0) {
                    flag = 1;
                    break;
                }
            }

            if (flag == 0 ) {
                console.log(num , " ");
            }
        }