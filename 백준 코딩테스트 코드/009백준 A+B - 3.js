const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let T = parseInt(input[0]);         // 테스트 케이스 개수 입력

for(let i=1; i<=T; i++){            // 테스트 케이스 개수만큼 반복
    let N = input[i].split(' ');    // 테스트 케이스 숫자 입력
    console.log( parseInt(N[0]) + parseInt(N[1]) ); // 각 테스트 케이스마다 A+B출력
}