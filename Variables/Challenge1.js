
// 1
let myBoolean = true;

// 2
let myString = "hello world";

// 3
let firstNumber = 20;

//4
let secondNumber = 40;

//5
secondNumber = 80;

//6
let myArray = [myBoolean, myString]

//7
let myObject = {
    firstProperty: myArray,
    sumProperty : firstNumber + secondNumber,
}

//8
console.log(myObject)

//9
console.log(myObject.sumProperty)

//10
console.log(myObject.firstProperty[1])