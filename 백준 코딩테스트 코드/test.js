const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split('\n');

let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);

let temp = [];
let count = 0;

temp = (A*B*C).toString().split('');
console.log(temp);
console.log(temp.length);

for(let i=0; i<=temp.length-1; i++){
    // temp[0]~temp[temp.length-1]하고 0~9까지 숫자 한번씩 확인하고 출력 몇번씩 쓰였는가?
    // == 0~9 인가? 맞으면 count = count+1
    for(let j=0; j<10; j++){
        if(temp[i]==j){
            count = count + 1;
        }
    }
    // 0~9 몇번씩 출력됐는지 적어야함
}