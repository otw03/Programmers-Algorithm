// 첫풀이 includes() 함수 사용
function solution(numbers) {
  let answer = 0;
  
  for(let i = 0; i <= 9; i++) {
      if(!numbers.includes(i)) {
          answer += i;
      }
      // console.log(answer);
  }
  return answer;
}

// // 반복문 추가 사용
// function solution(numbers) {
//     let answer = 0;

//     for(let i = 0; i <= 9; i++) {
//         let find = false;

//         for(let j = 0; j < numbers.length; j++) {
//             if(numbers[j] === i) {
//                 find = true;
//                 break;
//             }
//         }
//         if(!find) {
//             answer += i;
//         }
//         // console.log(answer);
//     }
//     return answer;
// }

// // 0부터 9까지의 합에서 배열numbers 의 합 빼기
// function solution(numbers) {
  
//     return 45 - numbers.reduce((acc, cur) => acc + cur, 0);
// }
