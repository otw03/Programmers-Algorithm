// function solution(x, n) {
//     var answer = [];
//     let num = 0;
//     for(let i = 0; i<n; i++) {
//         num += x;
//         answer.push(num);
//     }
//     console.log(answer);
//     return answer;
// }

// // 첫풀이에서 조금 고친 내용
// function solution(x, n) {
//     var answer = [];
//     for(let i = 1; i<=n; i++) {
//         answer.push(x*i);
//     }
//     console.log(answer);
//     return answer;
// }

// fill, map 사용
function solution(x, n) {
  let arr = Array(n).fill(x);
  console.log(arr);
  let answer = arr.map((v, i) => v * (i + 1));
  console.log(answer);
  return answer;
  
  // return Array(n).fill(x).map((v, i) => v * (i + 1));
}