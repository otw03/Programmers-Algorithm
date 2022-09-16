const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n'); 

// 홀수번째 분자 1 / 1, 2, 3, / 1, 2, 3, 4, 5,
// 짝수번째 분모 1, 2 / 4, 3, 2, 1
// 대각선 기준으로 증가하는 형식
// 분자먼저 구하기
// 분모 = i+1에서 분자를 뺀 값
// i번째 대각선줄에는 i개의 원소가 있음
// N이 몇번째 줄에 있는지 확인하기 위해 i를 순차적으로 증가시키고 뺌
// N < i 면 i번째줄에 N번째 원소 존재

let N = input[0];

let i = 1;

while (N > i) {
    N -= i;
    i++;
}

if (i % 2 == 1)
    console.log(`${i + 1 - N}/${N}`);
else
    console.log(`${N}/${i + 1 - N}`);