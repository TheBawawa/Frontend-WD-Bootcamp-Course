
// What does 'expression5' evaluate? How would you write this in a single line of code?

const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;

console.log(expression5);

// 'expression5' is trying to change the value of 'espression4' to its oppossite
// In a single line it would look like:

const expression = !(((100 % 5) < (100 / 50)) && 300 + 5 === 305)
console.log(expression);