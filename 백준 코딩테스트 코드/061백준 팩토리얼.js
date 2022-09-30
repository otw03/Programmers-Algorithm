const fs = require("fs");
const input = require('fs').readFileSync('/dev/stdin').toString();

// 0팩토리얼은 1이다

// function f(n) {
//     if(n <= 1) {
//         return 1;
//     } else {
//         return n * f(n - 1);
//     }
// }

function f(n) {
    return (n <= 1) ? 1 : n * f(n - 1);
}

console.log(f(input));