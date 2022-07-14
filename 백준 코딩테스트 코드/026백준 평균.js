const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let N = Number(input[0]);

let Score = input[1].split(' ');
console.log(typeof Score[0]);

let M = Number(Math.max(...Score));
console.log(M);
console.log(typeof M);

let NS = [];

let sum = 0;

for(let i=0; i<Score.length; i++){
    let newScore = (Number(Score[i])/M)*100;
    NS.push(newScore);
    
}
console.log(NS[0]);
console.log(NS);
console.log(typeof NS);

for(let j=0; j<NS.length; j++){
    sum = Number(sum) + Number(NS[j]);
}
console.log((sum/N).toFixed(20));
/* 
let N = parseInt(input[0]);

let Score = input[1].split(' ');
console.log(typeof Score[0]);

let M = Math.max(...Score);
console.log(M);
console.log(typeof M);

let NS = [];

let sum = 0;

for(let i=0; i<Score.length; i++){
    let newScore = (parseInt(Score[i])/M)*100;
    NS.push(newScore);
    
}
console.log(NS);
console.log(typeof NS);

for(let j=0; j<NS.length; j++){
    sum = sum + NS[j];
}
console.log(sum/N);
 */