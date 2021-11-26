/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
let c = a+b;
return a+" + "+ b + " = "+ c;
}



/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
let i = 0;
let x = endNumber - startNumber;
let array = [];
array.length = x+1;
while (i<=x){
    array[i] = startNumber+i;
    i++;
}
return array;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
let len = numbers.length;
let min = numbers[0];
let max = numbers[0];
let i = 1;
while (i<=len) {
    if (numbers[i] > max) {max = numbers[i]}
    if (numbers[i] < min) {min = numbers[i]}
    i++;
}
return "{ max: " + max + ", min: " + min + " }";
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
let counter = {};
array.forEach(item => {
    if (counter[item]) {
        counter[item]++;
    } else {
        counter[item] = 1;
    }
});
return counter;
}
