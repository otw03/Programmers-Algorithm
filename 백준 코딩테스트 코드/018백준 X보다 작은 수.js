const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let N = parseInt(input[0].split(' ')[0]);
let X = parseInt(input[0].split(' ')[1]);
let A = input[1].split(' ');
let temp = "";

for(i=0; i<N; i++){
    if(X>A[i]){
        //temp = temp + A[i] + " ";
        temp = `${temp + A[i]} `;
    }
}
console.log(temp);

/* 
let arr = input[0].split(' ');
let N = arr[0];
let X = arr[1];
let A = input[1].split(' ');
let temp = "";

for(let i=0; i<N; i++){
    let B = parseInt(A[i]);
    if(X>B){
        temp = `${temp + B} `;
    }
}
console.log(temp);
 */