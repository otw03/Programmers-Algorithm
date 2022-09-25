const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('');

// 내림차순 정렬
input.sort((a, b) => b - a);
// 문자열로 합치기
console.log(input.join(''));