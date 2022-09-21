/* js로는 풀 수 없는 문제(메모리 초과) */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n').map(Number); 
// Array.map() 메소드는 콜백 함수를 이용해 각각의 요소에 호출해서 그 값을 변환할 수 있게 해줍니다. 콜백 함수는 배열의 각 요소에 실행됩니다.
// console.log(input);
// let N = parseInt(input[0]);

let N = input.shift();
// console.log(N);
// console.log(input);


// let data = [];
// for(let i=1; i<=N; i++) {
//     data.push(parseInt(input[i]));
// }
// console.log(data);
// console.log(Math.max(...data));

// input 에서 최대값+1 크기(0 ~ 최대값)의 0으로 채워진 배열 만들기
const arr = new Array(Math.max(...input)+1).fill(0);
// console.log(arr);

// input[i]와 같은 arr의 인덱스에 1씩 값 추가해주기
for(let i in input) {
    arr[input[i]]++;
}
// console.log(arr);

// arr에는 각 수의 개수가 있으므로 반복으로 나열해주기
for(let i in arr) {
    for(let j=0; j<arr[i]; j++) {
        console.log(i);
    }
}
