const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let C = input[0];

for(let i=1; i<=C; i++){
    let A = input[i].trim().split(' ');
    let N = A[0];
    let sum = 0;

    for(let j=1; j<=N; j++){
        sum += parseInt(A[j]); 
    }
    let avg = sum / N;
    let count = 0;

    for(let k=1; k<=N; k++){
        if(A[k]>avg){
            count++;
        }
    }
    let R1 = (count / N)*100;
    let R2 = R1.toFixed(3);
    console.log(`${R2}%`);
}