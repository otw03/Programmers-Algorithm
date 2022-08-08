const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let N = input[0].split("");

let str = "abcdefghijklmnopqrstuvwxyz";

let result = "";

for(let i=0; i<str.length; i++){
    let temp = 0;
    temp = N.indexOf(str[i]);
    result += temp + " ";
}
console.log(result);