const fs = require("fs");
const { tmpdir } = require("os");
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
/* 
// 2번째 풀이
let A = 0;
let temp = [];
let count = 0;

for(let i=0; i<10; i++)
{
    let A = input[i]%42;
    temp.push(A);
}
for(let i=0; i<temp.length; i++){
    for(let j=0; j<=i; j++){
        if(i!=j && temp[i]==temp[j]){
            count--;
            console.log('count1');
            break;
        }
    }
    count++;
    console.log('count2');
}
console.log(count);
 */
/* 
// 2
let A = 0;
let temp = [];
let result = 0;

for(let i=0; i<10; i++)
{
    let A = input[i]%42;
    temp.push(A);
}
for(let i=0; i<temp.length; i++){
    let count = 0;
    for(let j=0; j<i; j++){
        if(temp[i]==temp[j]) { count++; }
    }
    if(count==0) { result++ }
}
console.log(result);
 */

/*
// 3 
let A = 0;
let temp = [];
let result = 0;

for(let i=0; i<10; i++)
{
    let A = input[i]%42;
    temp.push(A);
}
for(let i=0; i<temp.length; i++){
    let count = 0;
    for(let j=i+1; j<temp.length; j++){
        if(temp[i]==temp[j]) { count++; }
    }
    if(count==0) { result++ }
}
console.log(result);
 */