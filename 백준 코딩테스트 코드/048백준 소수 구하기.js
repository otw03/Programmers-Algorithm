const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(' '); 

// 에라토스테네스의 체 사용

// console.log(input);
let M = parseInt(input[0]);
// console.log(M);
let N = parseInt(input[1]);
// console.log(N);

// 0~N까지 빈 배열 만들어서 true채우기. 0~N 까지 숫자를 맞춰야 하므로 N+1해줘야 한다
const prime = new Array(N+1).fill(true);

// 1이하의 수는 소수가 아님
prime[0] = false;
prime[1] = false;
// console.log(prime);

// 자기자신을 제외한 i 의 배수를 모두 지운다
for(let i=0; i*i<=N; i++) {
  if(prime[i]) {
    // i*k (k < i) 까지는 이미 검사되었으므로 j시작 값은 i*2에서 i*i로 개선할 수 있다.
    // 자기자신을 제외한 i 의 배수를 모두 지운다 i=2 일때 j=i*i는 4, j+=i는 6, 8, 10, ...
    for(let j=i*i; j<=N; j+=i) {
      prime[j] = false;
    }
  }
}
// console.log(prime);

// M~N 사이의 수가 소수면 출력
for(let i=M; i<=N; i++) {
	if(prime[i] == true) {
    console.log(i);
  }
}
