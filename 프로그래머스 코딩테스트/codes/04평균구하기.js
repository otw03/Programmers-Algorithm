function solution(arr) {
  let answer = 0;
  
  answer = arr.reduce((prev, curr) => {
      // console.log(prev, curr);
      return prev + curr;
  })
  // console.log(answer);
  
  return answer/arr.length;
}

// // reduce 없이 구하기
// function solution(arr) {
//     let answer = 0;
  
//     for(let i = 0; i<arr.length; i++) {
//         answer += arr[i];
//     }
//     // console.log(answer);
  
//     return answer/arr.length;
// }

// // forEach 로 구하기
// function solution(arr) {
//     let answer = 0;
  
//     arr.forEach(v => {
//         answer += v;
//     })
//     // console.log(answer);
  
//     return answer/arr.length;
// }
