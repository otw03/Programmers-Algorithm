const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let T = parseInt(input[0]);
for(let i=1; i<=T; i++) {
    let temp = input[i].trim().split('');
    let R = temp[0];
    let P = ""
    for(let j=2; j<=temp.length-1; j++) {
        let S = temp[j];
        for(let k=0; k<R; k++) {
            P += S;
        }
    }
    console.log(P);
}    

// 테스트 케이스 T입력
// 입력값 temp = input[1~T].trim().split('');
// 테스트케이스 반복 횟수 R = temp[0]
// 문자열 S의 요소 = temp[2~temp.length-1]
// S가 R번 반복된 문자열 P