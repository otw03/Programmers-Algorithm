const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let T = parseInt(input[0]);
let temp = "";

for(let i=1; i<=T; i++){
    let N = input[i].split(' ');
    temp = temp + (parseInt(N[0]) + parseInt(N[1])) + "\n";
}
console.log(temp);

// for문을 실행할 때마다 console.log()를 돌리는 것은 비효율적

// console.log는 디버깅용으로 쓰는 함수라서 사용할 때 속도가 저하될 수 있다

/*
한줄씩 console.log를 호출하는 게 아니라
빈 문자열 선언후 정답들을 1개의 문자열에 모아서 출력해야 한다
*/