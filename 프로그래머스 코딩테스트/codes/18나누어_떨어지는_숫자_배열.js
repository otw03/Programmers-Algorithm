// function solution(arr, divisor) {
//     const answer = [];
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] % divisor === 0) {
//             answer.push(arr[i]);
//         }
//     }
//     // console.log(answer);
    
//     if(answer.length === 0) {
//         answer.push(-1);
//     } else {
//         answer.sort((a, b) => a - b);
//     }
//     // console.log(answer);
//     return answer;
// }

// filter 사용
function solution(arr, divisor) {
  const answer = arr.filter((num) => num % divisor === 0).sort((a, b) => a - b);
  // console.log(answer);
  return answer.length === 0 ? [-1] : answer;
}