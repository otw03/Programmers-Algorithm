const { count } = require("console");
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split('\n');

let T = input[0];
let N = [];

for(let i = 0; i<T; i++){
    N[i] = input[i+1].trim().split('');
}
/* console.log(N);
console.log(N[1]);
console.log(N[1][9]); */

for(let i = 0; i<T; i++){
    let count = 0;
    let temp = [];
    
    for(let j = 0; j<N[i].length; j++){
        if(N[i][j]=='O'){
            count = count+1;
            temp.push(count);
        } else {
            count = 0;
            temp.push(count);
        }
    }
    console.log(temp);
    let R1 = 0;
    console.log(R1);
    for(let k = 0; k<temp.length; k++){
        R1 += temp[k];
    }
    console.log(R1);
}