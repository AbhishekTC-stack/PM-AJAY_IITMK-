function square(a){
    return a*a
    
}
export{square}

//cube

function cube(a){
    return a*a*a
    
}
export{cube}

//factorial 

export function factorial(a) {
  if (a < 0) return "Invalid number";
  let fact = 1;
  for (let i = 1; i <= a; i++) {
    fact *= i;
  }
  return fact;
}




//even 

export function Even(a) {
  return a % 2 === 0;
}

export function Odd(a) {
  return a % 2 !== 0;
}


