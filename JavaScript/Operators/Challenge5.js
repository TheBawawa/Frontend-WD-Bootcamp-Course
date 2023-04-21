
// What does 'result' evaluate?

const myObj = {
    nestedObject1: {
        price: 100,
        quantity: 5
    },
    nestedObject2: {
        price: 150,
        quantity: 2
    }
};

const myArray = [myObj.nestedObject1, myObj.nestedObject2];

const result = (myArray[0].price * myArray[0].quantity) > (myArray[1].price * myArray[1].quantity);

/* 
It is comparing that the price of the index 0 that is the nestedObject1 times the quantity of the  same index 0 that is the nestedObject1
                                        IS BIGGER THAN 
the price of the index 1 that is the nestedObject2 times the quantity of the  same index 1 that is the nestedObject2
*/
