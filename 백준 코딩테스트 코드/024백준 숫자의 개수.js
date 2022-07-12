const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);

let temp = (A*B*C).toString().split('');

for(i=0; i<10; i++){
    let count = 0;
    for(let j=0; j<=temp.length-1; j++){
        if(parseInt(temp[j])==i){
            count = count + 1;
        }
    }
    console.log(count);
}
// 반대로 생각해야 했다

// 처음 생각했던 내용
/* for(let i=0; i<=temp.length-1; i++){
    // temp[0]~temp[temp.length-1]하고 0~9까지 숫자 한번씩 확인하고 출력 몇번씩 쓰였는가?
    // == 0~9 인가? 맞으면 count = count+1
    for(let j=0; j<10; j++){
        if(temp[i] == j){
            count = count + 1;
        }
    }
    // 0~9 몇번씩 출력됐는지 적어야함
}
*/