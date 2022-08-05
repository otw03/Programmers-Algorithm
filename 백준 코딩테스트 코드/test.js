const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split('\n');

let N = input[0];

let R1 = [];

function A(i) {
    let a = i.toString().split("");
    if(a[0]-a[1] == a[1]-a[2]){
        R1.push(i);
    } else if (a.length == 1){
        R1.push(i);
    } else if (a.length == 2){
        R1.push(i);
    }
}
for(let i=1; i<=N; i++){
    A(i);
}
console.log(R1.length);