
// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str){
    let counter = 0;
    let re = (/[a-z]/g);

    for(let i = 0; i < str.length; i++){
        if(str[i].match(re)){
            counter++;
        }
    }

    return counter;
}
