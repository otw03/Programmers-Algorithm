const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

// console.log(input);
input.shift();
// console.log(input);

// 중복제거
let arr = input.filter((v, i) => input.indexOf(v) === i);
// console.log(arr);

arr.sort((a, b) => {
  // 길이가 짧은 순서로 정렬
  if(a.length > b.length) {
    return 1;
  } else if(a.length < b.length) {
    return -1;
  } else {
    // 알파벳 순서에 맞게 추가 정렬
    if(a > b) {
      return 1;
    } else {
      return -1;
    }
  }
})
// console.log(arr);

console.log(arr.join('\n'));