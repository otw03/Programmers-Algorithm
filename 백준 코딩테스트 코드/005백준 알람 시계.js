const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let H = parseInt(input[0]);
let M = parseInt(input[1]);

if(M-45<0){
    M = M-45+60;
    H = H-1;
    
    if(H<0){
        H = 23;
    }
}else{
    M=M-45;
}
console.log(H+' '+M);