
/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.
*/

function persistence(num) {
    let strNum = num.toString();
    let arrNum = strNum.split("");
    let newArr = [];
    arrNum.forEach(number => newArr.push(parseInt(number)))
    //console.log(newArr);

    let persistence = null;
    let multiply = null;
    do {
        for (let i = 0; i < newArr.length; i++){
            multiply *= newArr[i];
        }
    } while (newArr.length > 1);

    return persistence;
 }

 console.log(persistence(123))