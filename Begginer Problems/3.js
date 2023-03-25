
// Complete the code so it reverses the string that is passed into

function solution(str){
    let arrayStr = str.split('');
    let reversedArray = [];

    for(let i = (arrayStr.length - 1); i >= 0; i--){
        reversedArray.push(arrayStr[i]);
    }

    let reversedWord = reversedArray.join('');

    return reversedWord;
}

console.log(solution('apple'));