const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let N = parseInt(input[0]);
let temp = "";

// 1부터 N까지 한 줄에 하나씩 출력
for(let i=1; i<=N; i++){
    temp = temp+i+"\n";
}
console.log(temp);