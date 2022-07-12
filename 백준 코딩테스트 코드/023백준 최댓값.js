const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let N;
let i = 0;
let max = parseInt(input[0]);
let count = 0;

for(i=0; i<9; i++){
    N = parseInt(input[i]);
    if(max<N){
        max = N;
        count = i;
    }
}
console.log(max);
console.log(count+1);
