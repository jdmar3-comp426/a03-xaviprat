import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
let x = array.length;
let i = 0;
let sum = 0;
while (i<x) {
sum = sum + array[i];
i++;
}
return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
array.sort(function(a,b){return a - b});
const middle = Math.floor(array.length/2)


if (array.length % 2 === 0) {
    return (array[middle - 1] + array[middle]) / 2;
}

return array[middle];

}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
let len = array.length;
let median = getMedian(array);
let min = array[0];
let max = array[len-1];
let mean = getSum(array)/len;
let varia = variance(array, mean);
let sum = getSum(array);
let standDev = Math.sqrt(varia);

let myObj = {
    length: len,
    sum: sum,
    mean: mean,
    median: median,
    min: min,
    max: max,
    variance: varia,
    standard_deviation: standDev,

}
return myObj;




}

