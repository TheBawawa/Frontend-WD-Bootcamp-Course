
// Given an array of integers, return a new array with each value doubled

function maps(arr){
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }
    return newArr;
}

console.log(maps([1, 2, 3]))