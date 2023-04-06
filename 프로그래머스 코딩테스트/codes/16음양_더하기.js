// function solution(absolutes, signs) {
//   let answer = 0;
//   for (let i = 0; i < absolutes.length; i++) {
//     if (signs[i]) {
//       answer += absolutes[i];
//     } else {
//       answer -= absolutes[i];
//     }
//   }
//   return answer;
// }

// // 삼항연산자 이용
// function solution(absolutes, signs) {
//     let answer = 0;
//     for (let i = 0; i < absolutes.length; i++) {
//         signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
//     }
//     return answer;
// }

// reduce 이용
function solution(absolutes, signs) {
    
  return absolutes.reduce((acc, cur, i) => acc + (cur * (signs[i] ? 1 : -1)), 0);
}