
// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(word){
    let arrWord = word.split("");
    let newWord = []

    for (let i = 0; i < arrWord.length; i++) {
        if (arrWord[i] !== ' ') {
            newWord.push(arrWord[i]);
        }
    }

    return newWord.join("");
}