
/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
The input will be a lowercase string with no spaces.
*/

function capitalize(s){
    let noSpaceStr = [];

    for(let i = 0; i < s.length; i++){
        if(s[i] != " "){
            noSpaceStr.push(s[i]);
        }
    }

    let evenArr = [];
    let oddArr = [];

    for(let i = 0; i < noSpaceStr.length; i++){
        if(i == 0 || i % 2 == 0){
            evenArr.push(noSpaceStr[i].toUpperCase());
            oddArr.push(noSpaceStr[i]);
        }
        else {
            oddArr.push(noSpaceStr[i].toUpperCase());
            evenArr.push(noSpaceStr[i]);
        }
    }

    let answer = [];
    answer.push(evenArr.join(""));
    answer.push(oddArr.join(""));

    return answer;
  };