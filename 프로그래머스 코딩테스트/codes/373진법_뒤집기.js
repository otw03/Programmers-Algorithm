// function solution(n) {
//     let number = '';
  
//     // 3진법 변환 거꾸로
//     while (n > 0) {
//         // console.log(`시작값 => number: ${number}, n: ${n}`);
//         number += n % 3;
//         n = Math.floor(n / 3);
//         // console.log(`결과값 => n을 3으로 나눈 나머지를 추가한 값number: ${number}, 몫n: ${n}`);
//     }
  
//     let answer = 0;

//     // 10진법 변환
//     // 10진수로 바꾸는 법은 각 자리의 수에 3의 거듭제곱을 곱해주는 것
//     for (let i = 0; i < number.length; i++) {
//         answer += parseInt(number[i]) * Math.pow(3, number.length - 1 - i);
//     }
//     // console.log(answer);
//     return answer;
// }

// js에서 지원하는 진법 변환법을 이용
function solution(n) {
    
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}