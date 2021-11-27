import { sumToString, getIncreasingArray, maxAndMin, countArray } from "./mild_1.js";
import {identifyVariable, identifyArray, removeKey, removeKeyNonDestructive, removeKeys } from "./mild_2.js";
/*
console.log(sumToString(3,4));
console.log(getIncreasingArray(3,6));
console.log(maxAndMin([1,3,5,0]));
console.log(countArray([1,2,3,1,3]));
*/

var person = {
    firstName: "John",
    password: "hey",
}

let myObj = removeKeys(person, "password");
console.log(myObj.password);
console.log(myObj.firstName);



