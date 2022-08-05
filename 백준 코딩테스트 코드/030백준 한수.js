const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let N = input[0];

let R1 = [];
// 한수인지 판단하는 함수
// 한수(등차수열)인지 어떻게 판단하는가?
// => 각 자리의 수의 차이가 같은 값을 지닐때
// => 자기자신만 가질때 (길이가 1일때)
// => 차이가 한자리일 때 (길이가 2일때)
function A(i) {
    // 입력받은 값을 toString()으로 문자열 변환후 split()메서드로 쪼갬
    let a = i.toString().split(""); 
    if(a[0]-a[1] == a[1]-a[2]){
        R1.push(i);
    } else if (a.length == 1){
        R1.push(i);
    } else if (a.length == 2){
        R1.push(i);
    }
}
// 1~N 횟수만큼 함수 돌려서 한수이다? => 배열에 푸쉬
for(let i=1; i<=N; i++){
    A(i);
}
// 한수 모음 배열의 길이 구해서 출력
console.log(R1.length);