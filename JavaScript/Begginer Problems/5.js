
// Given the array of sheeps, count the present ones (true)

let sheeps = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
  
  function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let counter = 0;

    for (let i = 0; i < arrayOfSheep.length; i++){
      if (arrayOfSheep[i] === true){
        counter++;
      }
    }
    return counter;
}

console.log(countSheeps(sheeps));