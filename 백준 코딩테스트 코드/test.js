const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split('\n');

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
/* let A = input[1].split(' ');

let min = parseInt(A[0]);
let max = parseInt(A[0]);
let result = "";

for(let i=1; i<N; i++){
    let B = parseInt(A[i]);
    if(min>B){
        min = B;
    }
    if(max<B){
        max = B;
    }
}
result = `${min} ${max}`;
console.log(result); */