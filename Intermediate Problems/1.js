
/* 
In this kata you will create a function that takes a list of non-negative integers and strings 
and returns a new list with the strings filtered out.
*/

function filter_list(list) {
    let newList = list.filter(el => typeof el == number);
    return newList;
}