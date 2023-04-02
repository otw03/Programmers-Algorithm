// // 첫 풀이
// function solution(a, b) {
//     var answer = 0;
    
//     if(a <= b) {
//         for(let i=a; i<=b; i++) {
//             answer += i;
//             // console.log(answer);
//         }
//     } else if(a > b) {
//         for(let i=b; i<=a; i++) {
//             answer += i;
//             // console.log(answer);
//         }        
//     }
//     return answer;
// }

// // 최대값 최소값 구한 후 계산
// function solution(a, b) {
//     var answer = 0;
//     let min = a <= b ? a : b;
//     let max = a > b ? a : b;
    
//     console.log(`min: ${min}, max: ${max}`);
    
//     for(let i=min; i<=max; i++) {
//         answer += i;
//         console.log(answer);
//     }
//     return answer;
// }

// Math의 최대값 최소값 함수 사용
function solution(a, b) {
  var answer = 0;
  let min = Math.min(a,b);
  let max = Math.max(a,b);
  
  // console.log(`min: ${min}, max: ${max}`);
  
  for(let i=min; i<=max; i++) {
      answer += i;
      // console.log(answer);
  }
  return answer;
}