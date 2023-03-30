// // 첫풀이
// function solution(n) {
//     var answer = [];
//     let str = n.toString()
//     console.log(str);
//     console.log(typeof(str));
//     let len = str.length;
    
//     for(let i=0; i<len; i++) {
//         answer.push(parseInt(str[i]));
//     }
//         console.log(answer);
//     return answer.reverse();
// }

// // 전개연산자, map활용
// function solution(n) {
//     let str = n.toString()
//     // console.log(str);
//     // console.log(typeof(str));
//     return [...str].map((v) => parseInt(v)).reverse()
// }

// split 사용
function solution(n) {
  // console.log(n.toString().split('').reverse().map((v) => parseInt(v)));
  return n.toString().split('').map((v) => parseInt(v)).reverse()
}