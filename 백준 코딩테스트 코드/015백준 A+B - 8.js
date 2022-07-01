const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let T = parseInt(input[0]);
let temp = "";

for(let i=1; i<=T; i++){
    let N = input[i].split(' ');

    temp = temp + `Case #${i}: ${parseInt(N[0])} + ${parseInt(N[1])} = ${parseInt(N[0]) + parseInt(N[1])}\n`;   
    /* 
    백틱``을 사용해 간단하게 작성
    표현식을 ${…}로 감싸고 이를 백틱으로 감싼 문자열 중간에 넣어주면 해당 표현식을 문자열 중간에 쉽게 삽입 가능
    */
}
console.log(temp);