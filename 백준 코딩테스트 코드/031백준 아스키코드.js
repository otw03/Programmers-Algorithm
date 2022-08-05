const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let N = input[0];

let str =`0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz`

let result = str.indexOf(N)

let result2 = result + 48;

console.log(result2);

// 문자열str에 아스키코드를 직접 넣고 배열의 번호를 찾은후 48을 더했는데
// 문자열을 아스키코드 번호로 변환해주는 함수가 있었다
// CharCodeAt( ) : 문자열을 아스키코드 번호로 변환해주는 함수