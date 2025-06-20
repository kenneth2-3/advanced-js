// Vanilla Javascript Function

// function addTwoNumbers(a, b) {
//     // code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

function addTwoLetters(c, d) {
    return c + d;
}
let add = addTwoLetters(9, 10);
console.log(add);

// Arrow Function With Parameters (ES6)

const addTwoNumbers = (a, b) => {
    // code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

const addTwoFigures = (e, f) => {
    return e + f;
}
let plus = addTwoFigures(2, 4);
console.log(plus);

// Single Line Arrow Function With Parameters

// const addTwoNumbers2 = (a, b) => (a + b); also a valid way to write it
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(6,4);
console.log(sum2);

const addNum = (g, h) => g + h;
let num = addNum(1, 2);
console.log(num);

// Implicit Returns

const saySomething = message => console.log(message);
saySomething('Hello there!!'); 

const sayHello = () => console.log('hello');  // for when you have more than one message to pass
sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
    `<p>
      This is a multiline string!
    </p>`
)
console.log(returnMultipleLines())