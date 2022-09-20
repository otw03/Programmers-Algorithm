const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n'); 

let N = parseInt(input[0]);
let data = [];

for(let i=1; i<=N; i++) {
    data.push(parseInt(input[i]));
}
// 퀵정렬 알고리즘을 사용하여 배열 자체를 정렬한다.
// data.sort() 는 안됨 
// --> 배열의 모든 원소를 문자열로 취급하기 때문에 글자 정렬기준이 적용된다.
// ex) 1 10 2 3

// sort 함수도 정렬 조건을 콜백함수로 처리한다.
data.sort(function (a,b) {
    // 정렬을 위해 비교되는 원소값들이 파라미터로 전달된다.
    // 리턴값이 양수인 경우: a가 b보다 크다
    // 리턴값이 음수인 경우: b가 a보다 크다
    if(a > b) {
        return 1;
    } else {
        return -1;
    }
});

console.log(data.join('\n'));