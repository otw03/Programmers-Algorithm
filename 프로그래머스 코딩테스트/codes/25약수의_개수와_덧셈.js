// 첫풀이
function solution(left, right) {
  let answer = 0;
  
  for(let i = left; i <= right; i++) {
      let count = 0;
      
      // 1 ~ 해당숫자 i까지 모든 수 나눠서 약수인지 확인
      for(let j = 1; j <= i; j++) {
          if(i % j === 0) { // 약수면 +1
              count++;
          }
      }
      if(count % 2 === 0) { // 약수의 개수가 짝수인 경우
          answer += i;
      } else { // 약수의 개수가 홀수인 경우
          answer -= i;
      }
  }
  return answer;
}

// // 제곱근이 정수면, 약수의 갯수가 홀수임을 이용한 방법
// function solution(left, right) {
//     let answer = 0;
  
//     for(let i = left; i <= right; i++) {
//         if(Number.isInteger(Math.sqrt(i))) {
//             answer -= i;
//         } else {
//             answer += i;
//         }
//     }
//     return answer;
// }