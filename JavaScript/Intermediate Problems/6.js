
/*
Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.
Make sure that your function does not return a false positive by only checking the day.
*/

function isToday(date) {
    let checkDay = date.getDate();
    let checkMonth = date.getMonth();
    let checkYear = date.getFullYear();
  
    let today = new Date();
  
    let todayDay = today.getDate();
    let todayMonth = today.getMonth();
    let todayYear = today.getFullYear();

    return checkDay === todayDay && checkMonth === todayMonth && checkYear === todayYear;
  }