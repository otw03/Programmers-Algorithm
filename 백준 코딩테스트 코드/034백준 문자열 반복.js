const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

// 2번째 반복문 알아보기 쉽게 코드 수정
// 기존("")로 구분했던 것을 (" ")로 구분함

// 테스트 케이스 T입력
let T = parseInt(input[0]);
for(let i=1; i<=T; i++) {
    // 입력값 temp = input[1~T].trim().split(" ");
    let temp = input[i].trim().split(" ");
    // 테스트케이스 반복 횟수 R = temp[0]
    let R = temp[0];
    // 문자열 str = temp[1]
    let str = temp[1];
    let result = ""
    for(let j=0; j<str.length; j++) {
        // S = str[0 ~ str.length-1]
        let S = str[j];
        for(let k=0; k<R; k++) {
            result += S;
        }
    }
    console.log(result);
}