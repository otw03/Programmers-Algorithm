// 길이가 4이상인 경우도 가능하게 수정

// 한수인지 판단하는 함수
// 한수(등차수열)인지 어떻게 판단하는가?
// => 각 자리의 수의 차이가 같은 값을 지닐때
// => 자기자신만 가질때 (길이가 1일때)
// => 차이가 한자리일 때 (길이가 2일때)
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let N = input[0];
let reuslt = [];

function A(X) {
    let a = X.toString().split("");
    if(a.length >=3){
        // 입력받은 값을 toString()으로 문자열 변환후 split()메서드로 쪼갬   
        let compDiff = a[0]-a[1];

        for(let j=1; j<a.length-1; j++){    // a.length가 4라면 j : 1~2
            if(compDiff != a[j]-a[j+1]){    // 공차가 같은값이 아니라면(한수가 아니라면) return으로 함수 종료
            // a[0] - a[1] != a[1] - a[2]
            // a[0] - a[1] != a[2] - a[3]
            return; // return : 반복문을 종료시키기도 하지만 함수 자체를 종료
            } 
        } 
        reuslt.push(X);  // 공차가 같은 값이 아닌 경우를 제외하면 한수이므로 한수 배열에 추가
    } else if (a.length == 1){
        reuslt.push(X);
    } else if (a.length == 2){
        reuslt.push(X);
    }
}

for(let i=1; i<=N; i++){
    A(i);
}
// 한수 모음 배열의 길이 구해서 출력
console.log(reuslt.length);


// 수정 전 내용
/* 
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let N = input[0];

let R1 = [];

function A(i) {
    let a = i.toString().split("");
    if(a[0]-a[1] == a[1]-a[2]){
        R1.push(i);
    } else if (a.length == 1){
        R1.push(i);
    } else if (a.length == 2){
        R1.push(i);
    }
}
for(let i=1; i<=N; i++){
    A(i);
}
console.log(R1.length);
*/