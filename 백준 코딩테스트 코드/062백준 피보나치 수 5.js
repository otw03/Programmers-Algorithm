const fs = require("fs");
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

// function f(n) {
//     if(n < 2) {
//         return n;
//     } else {
//         return f(n-1) + f(n-2);
//     }
// }

function f(n) {
    return (n < 2) ? n : f(n-1) + f(n-2);
}

console.log(f(input));