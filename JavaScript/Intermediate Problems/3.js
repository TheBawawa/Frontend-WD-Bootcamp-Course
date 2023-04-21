
/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
which is the number of times you must multiply the digits in num until you reach a single digit.
*/

function persistence(num) {

    let result = 0;
    //let persistence = null;

    while(num > 9){
        let multiply = 1;
        let strNum = num.toString();
        let arrNum = strNum.split("");
        let newArr = [];
        arrNum.forEach(number => newArr.push(parseInt(number)))
        console.log(arrNum)
        for (let i = 0; i < newArr.length; i++){
            multiply *= newArr[i];
        }
        num = multiply;
        result++;
    }

    return result;
 }

 console.log(persistence(7587793))