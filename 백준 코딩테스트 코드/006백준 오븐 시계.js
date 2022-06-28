var fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let A = parseInt(input[0].split(' ')[0]);    // 현재 시
let B = parseInt(input[0].split(' ')[1]);    // 현재 분
let C = parseInt(input[1]);                  // 예상시간

let D = B+C;    // 현재 분+예상시간

if(D>=60){
    B = D%60;
    A = A+Math.floor(D/60);    // 소수점 버림 함수 Math.floor()
    if(A>=24){
        A = A-24;
    }
}else{
    B = D;
}
console.log(A+' '+B);