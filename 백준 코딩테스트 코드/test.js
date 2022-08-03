const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split('\n');

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

// let C = input[0];

// for(let i=1; i<=C; i++){
//     let A = input[i].trim().split(' ');
//     let N = A[0];
//     let sum = 0;

//     for(let j=1; j<=N; j++){
//         sum += parseInt(A[j]); 
//     }
//     let avg = sum / N;
//     let count = 0;

//     for(let k=1; k<=N; k++){
//         if(A[k]>avg){
//             count++;
//         }
//     }
//     let R1 = (count / N)*100;
//     let R2 = R1.toFixed(3);
//     console.log(`${R2}%`);
// }