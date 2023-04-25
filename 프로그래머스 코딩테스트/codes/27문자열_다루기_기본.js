function solution(s) {
  // 문자열의 길이가 4, 6이 아니면 false 리턴
  if(s.length !== 4 && s.length !== 6) {
      return false;
  }
  // 문자열의 각 자리수를 하나씩 순회하며 숫자가 아닌 문자가 있으면 false 리턴
  for(let i = 0; i < s.length; i++) {
      if(isNaN(s[i])) {
          return false;
      }
  }
  // 모든 검사를 통과하면 true 리턴
  return true;
}

// // 아스키 코드
// function solution(s) {
//     if (s.length !== 4 && s.length !== 6) {
//         return false;
//     }
//     for (let i = 0; i < s.length; i++) {
//         const charCode = s.charCodeAt(i);
//         if (charCode < 48 || charCode > 57) {
//             return false;
//         }
//     }
//     return true;
// }