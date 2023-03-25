const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number); 

// console.log(input);

let N = input.shift();
// console.log(N);
// console.log(input);

// 산술평균 : N개의 수들의 합을 N으로 나눈 값. 소수점 이하 첫째 자리에서 반올림한 값을 출력한다.
let A = Math.round((input.reduce((a,b) => a + b, 0) / N));
// console.log(A);

// 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
// input을 정렬한 배열B
let B = input.sort((a,b) => a - b);
console.log(B);
// console.log(B[Math.floor(N / 2)]);


// 최빈값 : N개의 수들 중 가장 많이 나타나는 값. 여러 개 있을 때에는 최빈값 중 두 번째로 작은 값을 출력한다.
let arr = new Array(8001).fill(0);
console.log(arr);

// 0:0 | 1:-1, 4000:-4000 | 4001:1, 8000:4000
for(let i in B) {
    console.log(B[i]);
    // 음수일 때
    if(B[i] < 0) {
        arr[Math.abs(B[i])]++;
    } else if(B[i] >= 0) { // 0이상일 때
        
        arr[B[i]+4000]++;
    }
}
console.log(arr);
let max = 0;

console.log(Math.max(...arr));

// 범위 : N개의 수들 중 최댓값과 최솟값의 차이
let D = B[B.length-1] - B[0];
// console.log(D);