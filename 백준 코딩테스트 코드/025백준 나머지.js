const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let A = 0;
let temp = [];

for(let i=0; i<10; i++)
{
    let A = input[i]%42;
    temp.push(A);
}
let result = [...new Set(temp)];

console.log(result.length);

/* set() 사용하여 배열에서 중복 제거가 가능하다 */