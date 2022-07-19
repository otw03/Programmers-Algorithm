const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let N = parseInt(input[0]);
let Score = input[1].split(' ');
let M = Math.max(...Score);
let NS = [];
let sum = 0;

for(let i=0; i<Score.length; i++){
    let newScore = (parseInt(Score[i])/M)*100;
    NS.push(newScore);   
}

for(let j=0; j<NS.length; j++){
    sum = sum + NS[j];
}
console.log(sum/N);

// 정답이 맞았다. 문제 확인하는 과정에서 콘솔적어둔 걸 백준에도 그대로 써서 틀렸던 것 