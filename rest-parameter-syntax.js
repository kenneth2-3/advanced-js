// Regular Function Call
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log("Sum:", sum);

// Extra Arguments are Ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6);
console.log("Sum2:", sum2);

//Function Using ...rest
const sumReset = (a, b, c, ...rest) => {
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }
    return sum;
}
let sum3 = sumReset(1, 2, 3, 4, 5, 6);
console.log("Sum3:", sum3);