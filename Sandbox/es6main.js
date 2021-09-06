import HowManyWords from './es6module.js';

let chars = HowManyWords("Torilla Tavataan");

for (const key in chars) {
    console.log(key+": "+chars[key]);
}