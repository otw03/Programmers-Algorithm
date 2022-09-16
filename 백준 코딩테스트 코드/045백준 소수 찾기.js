const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n'); 

// 입력되는 숫자 X
let X = input[1].split(' ');

let count = 0;

// 소수인지 판단
function prime(x) {
	// 1은 소수가 아니다
	if(x == 1) {
		return false;
	}

	// 자기 자신을 제외하고 나누어지면 소수가 아니다
	for(let i=2; i<x; i++) {
		if(x % i == 0) {
			return false;
		}
	}
	count++;
}

for(let i=0; i<input[0]; i++) {
	prime(X[i]);
}

console.log(count);