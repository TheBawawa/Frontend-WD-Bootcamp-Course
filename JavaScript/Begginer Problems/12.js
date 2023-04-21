
// Return the average of the given array rounded down to its nearest integer. The array will never be empty.

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let length = marks.length;
    let sum = 0;
    
    for (let i = 0; i < length; i++) {
        sum += marks[i]
    }

    let average = Math.floor(sum / length);
    return average;
}