const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let temp = "";

for(let i=0; i<input.length; i++){
    let N = input[i].split(' ');
    let A = parseInt(N[0]);
    let B = parseInt(N[1]);

    temp = temp + `${A + B}\n`;
}
console.log(temp);
/* 
trim()은 문자열 좌우에서 공백을 제거하는 함수
일부 입력값의 마지막에 개행문자가 포함된 경우가 종종 있다.
이런 경우 split("\n")할 경우 공백문자 하나를 더 갖는 배열을 반환한다. 
이를 방지하기 위해서 trim()을 사용한다.

trim() 사용 전에는
2
5
7
17
7
NaN
이 나왔다
 */