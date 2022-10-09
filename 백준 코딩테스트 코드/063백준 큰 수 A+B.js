const fs = require("fs");
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let A = BigInt(input[0]);
let B = BigInt(input[1]);

// console.log(A);
// console.log(B);
// console.log(typeof A);
// console.log(typeof B);

let result = A+B;
// 끝에n이 붙으므로 toString()으로 변환해줌
console.log(result.toString());

/* 
BigInt는 Number 원시 값이 안정적으로 나타낼 수 있는 최대치인 2^53 - 1보다 큰 정수를 표현할 수 있는 내장 객체이다.  
BigInt의 typeof 판별 결과는 "bigint"이다.  
BigInt는 내장 Math 객체의 메서드와 함께 사용할 수 없고, 연산에서 Number와 혼합해 사용할 수 없다. 따라서 먼저 같은 자료형으로 변환해야 한다.  
BigInt를 Number로 변환하는 과정에서 정확도를 유실할 수 있으므로, 2^53보다 큰 값을 예상할 수 있는 경우 BigInt만 사용하는 것이 좋다.  
*/