const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n'); 

// 에라토스테네스의 체 사용
// console.log(input);

for(let i=0; i<input.length; i++) {

    let N = parseInt(input[i]);
    if(N == 0) {break;}
    // console.log(N);
    let count = 0;
  
    // 0~2*N까지 빈 배열 만들어서 true채우기. 0~2*N 까지 숫자를 맞춰야 하므로 2*N+1해줘야 한다
    const prime = new Array(2*N+1).fill(true);
  
    // 1이하의 수는 소수가 아님
    prime[0] = false;
    prime[1] = false;
    // console.log(prime);
  
    // 자기자신을 제외한 i 의 배수를 모두 지운다
    for(let i=0; i*i<=2*N; i++) {
      if(prime[i]) {
        // i*k (k < i) 까지는 이미 검사되었으므로 j시작 값은 i*2에서 i*i로 개선할 수 있다.
        // 자기자신을 제외한 i 의 배수를 모두 지운다 i=2 일때 j=i*i는 4, j+=i는 6, 8, 10, ...
        for(let j=i*i; j<=2*N; j+=i) {
          prime[j] = false;
        }
      }
    }
    // console.log(prime);
  
    // N+1 ~ 2*N 사이의 수가 소수면 출력
    for(let i=N+1; i<=2*N; i++) {
      if(prime[i] == true) {
        count++;
      }
    }
    console.log(count);
}
  


  
/** 배열result에 소수i 넣고 result 길이 구하기 */

// // 에라토스테네스의 체 사용

// for(let i=0; i<input.length; i++) {
//   // console.log(input);
//   let N = parseInt(input[i]);
//   // console.log(N);
//   if(N == 0) {break;}

//   let result = [];
//   // 0~2*N까지 빈 배열 만들어서 true채우기. 0~2*N 까지 숫자를 맞춰야 하므로 2*N+1해줘야 한다
//   const prime = new Array(2*N+1).fill(true);

//   // 1이하의 수는 소수가 아님
//   prime[0] = false;
//   prime[1] = false;
//   // console.log(prime);

//   // 자기자신을 제외한 i 의 배수를 모두 지운다
//   for(let i=0; i*i<=2*N; i++) {
//     if(prime[i]) {
//       // i*k (k < i) 까지는 이미 검사되었으므로 j시작 값은 i*2에서 i*i로 개선할 수 있다.
//       // 자기자신을 제외한 i 의 배수를 모두 지운다 i=2 일때 j=i*i는 4, j+=i는 6, 8, 10, ...
//       for(let j=i*i; j<=2*N; j+=i) {
//         prime[j] = false;
//       }
//     }
//   }
//   // console.log(prime);

//   // N+1 ~ 2*N 사이의 수가 소수면 출력
//   for(let i=N+1; i<=2*N; i++) {
//     if(prime[i] == true) {
//       result.push(i);
//     }
//   }
//   console.log(result.length);
// }