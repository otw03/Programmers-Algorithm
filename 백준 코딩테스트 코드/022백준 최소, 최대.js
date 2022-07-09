const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let N = parseInt(input[0]);
let A = input[1].split(' ');

let min = parseInt(A[0]);
let max = parseInt(A[0]);

for(let i=1; i<N; i++){
    let B = parseInt(A[i]);
    if(min>B){
        min = B;
    }
    if(max<B){
        max = B;
    }
}
let result = `${min} ${max}`;
console.log(result);

//console.log(min+ " " + max);

// console.log(Math.min(...A), Math.max(...A));
// ...A 는 배열A를 나타냄