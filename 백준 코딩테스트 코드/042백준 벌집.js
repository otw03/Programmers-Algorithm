const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' '); 

/* 
1 = 1
2~7(1+6*1) = 2
8~19(7+6*2) = 3
20~37(19+6*3) = 4
38~61(37+6*4) = 5
*/

let honeycomb = 1;
let count = 1;

while(honeycomb < input) {
    honeycomb += 6 * count;
    count++;
}

console.log(count);
