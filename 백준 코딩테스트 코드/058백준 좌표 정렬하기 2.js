const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let N = Number(input.shift());
// console.log(input);

let arr = [];

// 2차원 배열
for(let i =0; i< N; i++) {
  arr.push(input[i].trim().split(' ').map(x=>+x));
//   arr.push(input[i].trim().split(' ').map(x=>Number(x)));
//   console.log(arr);
}
// console.log(arr);

let answer = '';
// 정렬
arr.sort((a,b) => {
  if(a[1] === b[1]) {return a[0] - b[0];}
  else {return a[1] - b[1];}
})
// console.log(arr);

// 정렬 결과 출력
arr.forEach(v => {
  answer += `${v[0]} ${v[1]}\n`;
});
console.log(answer);