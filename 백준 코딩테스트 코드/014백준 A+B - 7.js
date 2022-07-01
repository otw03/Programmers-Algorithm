const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let T = parseInt(input[0]);
let temp = "";

for(let i=1; i<=T; i++){
    let N = input[i].split(' ');
    temp = temp + `Case #${i}: ${parseInt(N[0]) + parseInt(N[1])}\n`;
    // 기존 빠른 A+B에서 문자열만 추가 됐다
    /* 
    처음에는 
    temp = temp +  "Case #" + i + ": " + (parseInt(N[0]) + parseInt(N[1])) + "\n"; 
    이렇게 작성함
    
    백틱``을 사용해 더 간단하게 작성
    표현식을 ${…}로 감싸고 이를 백틱으로 감싼 문자열 중간에 넣어주면 해당 표현식을 문자열 중간에 쉽게 삽입 가능
    */
}
console.log(temp);