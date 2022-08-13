const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split('\n');


let S = input[0].toUpperCase();

let arr = new Array(26);
arr.fill(0);
console.log(arr);
let max = 0;

for(let i = 0; i < S.length; i++) {
    let num = S.charCodeAt(i)-65;
    arr[num]++;
        if(arr[num] > max) {
            max = arr[num];
        }
}

console.log(arr);
console.log(max);

let result = "";


for(let i = 0; i < arr.length; i++) {
    if(arr[i] == max) {
        if(result == "") {
            result = String.fromCodePoint(i+65);
        } else {
            result = "?";
            break;
        }
    }
}
console.log(result);