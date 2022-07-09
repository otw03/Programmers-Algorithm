const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let N = parseInt(input[0]);
let A = N;
let i = 0;

while(1){
i++
    let AL = parseInt(A/10);
    let AR = A%10;

    let temp = AL + AR;

    let tR = temp%10;

    let result = parseInt(AR + tR.toString());

    if(N == result) { break; }

    A = result;
}
console.log(i);

/* 
let N = input[0];
let i = 0;
let A = N;  // while문 안에 있으면 실행할 때마다 A=N이 된다

while(1){
    i++;
    let result;
    console.log(typeof result);
    let temp=0;

    if(A<10){
        A = '0' + A;    // js에서 문자+숫자=문자
    } else{
        A = A.toString();   // A = parseInt(result) 때문에 숫자형인 A를 문자형으로 변환
    }

    temp = parseInt(A[0])+parseInt(A[1]);

    if(temp<10){
        temp = '0' + temp;
    }else{
        temp = temp.toString(); // temp = parseInt(A[0])+parseInt(A[1]) 때문에 숫자형인 temp를 문자형으로 변환
    }

    result = A[1]+temp[1];

    A = parseInt(result);   //  A에 result정수형으로 반환, result가 00~09 일 때 방지, 안 하면 000~009로 될 수 있음
    if( parseInt(N) == parseInt(result) ){ break; } // 반복문 종료
}
console.log(i);
 */
