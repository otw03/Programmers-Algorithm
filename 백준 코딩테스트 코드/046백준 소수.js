const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n'); 

let M = parseInt(input[0]);
// console.log(M);
let N = parseInt(input[1]);
// console.log(N);

let arr = [];
let sum = 0;

// console.log(arr);

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
    // 소수를 배열 arr에 넣기
	arr.push(x)
    // 소수x의 합 sum
	sum += x;
}

for(let i=M; i<=N; i++) {
	prime(i);
}

// console.log(arr);

// 소수 배열 arr이 비어있다면(소수가 없다면)
if(arr.length == 0) {
	console.log('-1');
} else {
	console.log(sum);
	console.log(Math.min(...arr)); // ...arr => 전개연산자 사용 console.log(Math.min(61, 67, 71, 73, 79, 83, 89, 97)); 
}
