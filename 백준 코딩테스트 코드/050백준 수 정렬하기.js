const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n'); 

// console.log(input);
let N = parseInt(input[0]);

let data = [];

for(let i=1; i<=N; i++) {
    data.push(parseInt(input[i]));
}
// console.log(data);

// i는 배열의 원소중 마지막을 제외한 항목을 스캔한다.
for(let i=0; i<data.length-1; i++) {
    // j는 배열의 원소중 i번째 다음 원소부터 마지막 원소까지 스캔
    for(let j=i+1; j<data.length; j++) {

        // 부등호 방향 ">" : 오름차순(순차정렬)
        // 부등호 방향 "<" : 내림차순(역순정렬)
        if(data[i] > data[j]) {
            const tmp = data[i];
            data[i] = data[j];
            data[j] = tmp;
        }
    }
}
// console.log(data);

console.log(data.join('\n'));
// data.forEach( v => console.log(v) );
