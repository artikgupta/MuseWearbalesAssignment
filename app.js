const { performance } = require("perf_hooks");
/*
The below code created an array of fixed length and inserts incremental values
it then checks if a random number generated in the data range is present in the array or not
and prints the result
total time elapsed is also printed
*/
const begin = performance.now();
const FIXED_LENGTH = 50000000;
const START_NUMBER = 1000;
// anything below this line can be changed. New imports can also be added
// changes can be made to anything including the data structure of variables and
// also the search algorithms
let i = START_NUMBER;
let count = 0;
let searchList = [];
while (count < FIXED_LENGTH) {
  if (Math.random() < 0.5) {
    searchList.push(i);
    count++;
  }
  i++;
}
// Dont change the below assignment line, this is applicable to the block below anything
// can be changed
let NUMBER_TO_FIND = START_NUMBER + Math.floor(Math.random() * FIXED_LENGTH);
//////////////////////////////////////
let numberFound = "Number not present";

let m = 0;
let n = searchList.length - 1;
while (m <= n) {
  let k = (n + m) >> 1;
  const cmp = NUMBER_TO_FIND - searchList[k];
  if (cmp > 0) {
    m = k + 1;
  } else if (cmp < 0) {
    n = k - 1;
  } else {
    numberFound = "Number present";
    break;
  }
}

const end = performance.now();
console.log("Time elapsed is " + (end - begin).toString()) + " millisecs";

console.log(numberFound);
