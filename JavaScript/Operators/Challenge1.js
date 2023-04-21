
// Why does this code not work? Fix it 
/* Original Code:
    const numberVariable = 0;

    numberVariable++;
    numberVariable++;
    numberVariable++;

    console.log(numberVariable);
*/

let numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);

// Did not work because you can't change the value of a const variable. Answer is going to be 3