
// Why is this code invalid? Fix it

/* Original Code:
    const objectVariable = {
        property1: 'i am property 1';
        property2: 'i am property 2';
        property3: [20, 30, 40];
    };

    console.log(objectVariable.property3[2]);
*/

const objectVariable = {
    property1: 'i am property 1',
    property2: 'i am property 2',
    property3: [20, 30, 40]
};

console.log(objectVariable.property3[2])

// It didn't work before because the punctuation wasn't commas