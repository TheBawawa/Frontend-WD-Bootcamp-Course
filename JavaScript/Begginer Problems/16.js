
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

function repeatStr (n, s) {
    let answer = [];

    for (let i = 1; i <= n; i++) {
        answer.push(s)
    }
    
    return answer.join('');
}

console.log(repeatStr(4, 'apple'))