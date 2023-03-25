// // 첫 풀이
// function solution(n) {
//     let answer = 0;
//     let num = 0;
    
//     for(let i = 1; i <= n; i++) {
//         if(n%i==0) {
//             num = n/i;
//             // console.log(num);
//             answer += num;
//             // console.log(answer);
            
//         }
//     }    
//     return answer;
// }

// // 배열로 풀기
// function solution(n) {
//     let answer = 0;
//     let num = [];
    
//     for(let i = 1; i <= n; i++) {
//         if(n%i == 0) {
//             num.push(i);
//         }
//     }    
    
//     console.log(num);
//     answer = num.reduce((prev, curr) => prev + curr, 0);
    
//     console.log(answer);
//     return answer;
// }

// 실행 횟수 줄이기
function solution(n) {
  let answer = 0;
  for(let i = 1; i <= n/2; i++) {
      if(n%i==0) {
          answer += i;
      }
  }    
  return answer + n;
}