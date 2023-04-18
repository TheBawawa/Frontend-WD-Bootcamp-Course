
/*
The goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str){
    let strArr = str.split("");
    let newArr = [];

    for (let i = 1; i < strArr.length - 1; i++) {
        newArr.push(strArr[i]);
    }

   return newArr.join("");
};

console.log(removeChar('apple'))