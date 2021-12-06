import { getSum } from "../medium/medium_1.js";
import { repeat, repeatDemo } from "./spicy_9.js";

let hello = [];
function sum(array) {
    let sum = array[0] + array[1]
    return sum
}
hello = repeat(sum,3,[3,5]);
console.log(hello);
