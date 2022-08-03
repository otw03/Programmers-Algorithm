const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

// 셀프 넘버가 아닌 수 만드는 함수d()
function d(N){
    let A = 0;
    if(N<10){
        A = '0'+N;         // N이 10보다 작을 때 각 자리수를 더해주기 위해 0을 붙임. 문자로 자동 형변환
    } else {
        A = N.toString();  // N을 문자로 바꿈
    }
    let B = A.split('');   // 문자열을 배열로 쪼갬
    
    let result = 0;

    // 각 자리수를 더해주는 반복문
    for(let i=0; i<B.length; i++){
        result = result + parseInt(B[i]);
    }

    let C = N + parseInt(result);
    return C;
}

let E = [];
// 1부터 10000까지 반복
for(let N=1; N<=10000; N++){
    // d(N)<=10000 인 배열E를 만듦
    if(d(N)<=10000){
        E.push(d(N));
    }
    // 배열E 에서 N의 값이 없을 때 N을 출력
    if(E.indexOf(N) === -1){
        console.log(N);
    }
}