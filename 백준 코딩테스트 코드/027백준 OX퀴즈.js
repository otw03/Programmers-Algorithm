const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let T = input[0];
let N = [];

for(let i = 0; i<T; i++){
    N[i] = input[i+1].trim().split('');
    
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

    let result = 0;

    for(let k = 0; k<temp.length; k++){
        result += temp[k];
    }
    console.log(result);
}