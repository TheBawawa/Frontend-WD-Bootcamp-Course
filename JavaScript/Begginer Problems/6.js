
// Return the number (count) of vowels in the given string. The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let arrayStr = str.split('');
    let counter = 0;

    for (let i = 0; i < arrayStr.length; i++){
        if (arrayStr[i] === 'a' || arrayStr[i] === 'e' || arrayStr[i] === 'i' || arrayStr[i] === 'o' || arrayStr[i] === 'u'){
            counter++;
        }
    }
    return counter;
  }

  console.log(getCount('airplane'));