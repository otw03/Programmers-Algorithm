const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n'); 

// 첫째 줄에는 응시자의 수 N과 상을 받는 사람의 수 k가 공백을 사이에 두고 주어진다.
let a = input[0].trim().split(' ');
// 둘째 줄에는 각 학생의 점수가 공백을 사이에 두고 주어진다
let score = input[1].trim().split(' ');
// console.log(a);
// console.log(score);

// 응시자의 수 N
let N = parseInt(a[0]);
// 상을 받는 사람의 수 k
let k = parseInt(a[1]);
// console.log(N);
// console.log(k);

// 내림차순 정렬
score.sort((a,b) => b - a);
// console.log(score);

// 상을 받는 사람의 수인 k - 1 인덱스가 커트라인이란 상을 받는 사람들 중 점수가 가장 가장 낮은 사람의 점수
console.log(score[k - 1]);

