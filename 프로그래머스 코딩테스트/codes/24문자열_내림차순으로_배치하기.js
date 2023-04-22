// function solution(s) {
//     return s.split('').sort((a, b) => b.charCodeAt() - a.charCodeAt()).join('');
// }

// reverse() 사용
function solution(s) {
  return s.split('').sort().reverse().join('');
}