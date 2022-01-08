
/*
------------------------------------------------------
Add Function
*/

function add(a, b) {
    return a + b 
}
console.log(add(6, 8))

/*
------------------------------------------------------
Multiply Function
*/
 
function multiply(arg1, arg2) {
    let total = 0
    for (let i = 0; i < arg1; i++) {
        total = add(total, arg2)
    }
    return total
} 
console.log(multiply(6, 8)) 


/*
------------------------------------------------------
Power/Exponentiation Function
*/

function power( x, n ) { 
    let result = 1
    for (let i = 0; i < n; i++) {
        result = multiply(x, result)
    }
    return result
}
console.log(power(6, 8)) 

// Unit Testing Start!!

console.assert(power(2, 0) == 1, JSON.stringify({
  message: "This should always be false..."
}));

// Unit Testing end

/*
------------------------------------------------------
Factorial Function
*/

function factorial(argument) {
  let total = argument
  for (let i = argument - 1; i >= 1; i--) { 
    total = multiply(total, i)
  }
  return total
}
console.log(factorial(5))


/*
------------------------------------------------------
Bonus - Fibonacci Function
*/

// Your Code Here.


// Patterson and Cesar Ramos helped