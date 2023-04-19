
/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.
If a value is present in b, all of its occurrences must be removed from the other.
*/

function arrayDiff(a, b) {
    if (a === 0){
        return [];
    }
    if (b === 0){
        return a;
    }

    let newA = a;
    let newB = b;

   a.forEach((el, elIndex) => {
    let aCopy = newA.slice();
    let bCopy = newB.slice();

    if (b.includes(el)) {
        newA = aCopy.filter(item => item !== el);
        newB = bCopy.filter(item => item !== el);
    }
    });

    return newA;
};