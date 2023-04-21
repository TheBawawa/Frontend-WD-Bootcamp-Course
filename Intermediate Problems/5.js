
/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
*/

function validatePIN (pin) {
  
    let fourDigitsRegex = /(^[0-9]{4}$)/;
    let sixDigitsRegex = /(^[0-9]{6}$)/;
    
    let result1 = pin.match(fourDigitsRegex);
    let result2 = pin.match(sixDigitsRegex);
    
    if (result1 === null && result2 === null){
      return false;
    }
    else {
      return true;
    }
  }