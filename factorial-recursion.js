//6! = 6*5*4*3*2*1
/*
normal way 
let factorial = 1;
for (let i = 6; i >= 1; i--) {
    factorial = factorial * i;
}
console.log(factorial)
*/
// recursive way
function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return factorial(i - 1) * i;
}
console.log(factorial(6));