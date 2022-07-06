const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let temp = "";

// for문 사용 case1
for(let i=0; ; i++){    // 조건식에 아무것도 안 적으면 증감식i++에 의해 i가 무한히 증가함
    let N = input[i].split(' ');
    let A = parseInt(N[0]);
    let B = parseInt(N[1]);

    if(A+B==0) { break; }   // i가 무한히 증가하는 도중에 A+B==0 일 경우 반복문을 빠져나오게 함
                            // temp 이전에 있어야 0이 출력 안 됨
    temp = temp + `${A + B}\n`;
}
console.log(temp);


/* 
// for문 사용 case2
let i = 0;
for(;;){    // 무한 반복문

    let N = input[i].split(' ');
    let A = parseInt(N[0]);
    let B = parseInt(N[1]);

    if(A+B==0) { break; }   // A+B==0 일 경우 반복문을 빠져나오게 함
                            // temp 이전에 있어야 0이 출력 안 됨
    temp = temp + `${A + B}\n`;

    i++;
}
console.log(temp);
 */

/* 
// while문 사용
let i = 0;
while(1){   // 무한 반복문
    let N = input[i].split(' ');
    let A = parseInt(N[0]);
    let B = parseInt(N[1]);

    if(A+B==0) { break; }

    temp = temp + `${A + B}\n`;
    
    i++;
}
console.log(temp);
 */

