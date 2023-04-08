// function solution(seoul) {
//   let answer = 0;
//   for (let i = 0; i < seoul.length; i++) {
//     if (seoul[i] === "Kim") {
//       answer = i;
//       break;
//     }
//   }
//   return `김서방은 ${answer}에 있다`;
// }

// indexOf 사용
function solution(seoul) {
  const answer = seoul.indexOf("Kim");
  return `김서방은 ${answer}에 있다`;
}