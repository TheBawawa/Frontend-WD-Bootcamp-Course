
// You are given a number and have to make it negative. If number is negative already, no change is required and Zero (0) is not checked for any specific sign. 

function makeNegative(num) {
    if (num == 0){
        return 0;
    }
    else if (num > 0){
        return num*-1;
    }
    else {
        return num;
    }
  }

  console.log(makeNegative(5))
  console.log(makeNegative(0))
  console.log(makeNegative(-2))