const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString(); 

let N = input;
let arr = [];

// 가장 작은 소수인 2부터 나누기
for (let i = 2; i <= N; i++) {
  while (N % i == 0) {
    N /= i;
    arr.push(i);
  }
}

// 소인수들의 배열의 요소마다 출력
for(let v of arr) {
	console.log(v);
}
