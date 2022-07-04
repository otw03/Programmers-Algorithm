const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = parseInt(input[0]);
let result = "";
let star = "*";

for(let i=1; i<=N; i++){
    let temp = "";
    for(let a=1; a<=N-i; a++){
        temp = temp + " ";
    }
    for(let j=1; j<=i; j++){
        temp = temp + star;
    }
    result = `${result+temp}\n`;
}
console.log(result);
