const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n'); 

// 에라토스테네스의 체 사용

// 0~10000까지 빈 배열 만들어서 true채우기. 0~10000 까지 숫자를 맞춰야 하므로 10000+1해줘야 한다
const prime = new Array(10000+1).fill(true);

// 1이하의 수는 소수가 아님
prime[0] = false;
prime[1] = false;
// console.log(prime);

// 자기자신을 제외한 i 의 배수를 모두 지운다
for(let i=0; i*i<=10000; i++) {
  if(prime[i]) {
    // i*k (k < i) 까지는 이미 검사되었으므로 j시작 값은 i*2에서 i*i로 개선할 수 있다.
    // 자기자신을 제외한 i 의 배수를 모두 지운다 i=2 일때 j=i*i는 4, j+=i는 6, 8, 10, ...
    for(let j=i*i; j<=10000; j+=i) {
      prime[j] = false;
    }
  }
}

let T = input[0];

for(let i=1; i<=T; i++) {
  let n = input[i];
  let low = n/2;
  let high = n/2;
  while(!prime[low] || !prime[high]) {
      low -= 1;
      high += 1;
  }
  console.log(`${low} ${high}`);
}
