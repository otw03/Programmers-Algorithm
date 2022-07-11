const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let N;
let temp = [];
let max = parseInt(input[0]);
let i = 0;

for(i=0; i<9; i++){
    N = input[i];
    temp.push(N);
    if(max<N){
        max = N;
    }
}
console.log(max);
console.log(i);
console.log(typeof temp);
console.log(Math.max(...temp));
