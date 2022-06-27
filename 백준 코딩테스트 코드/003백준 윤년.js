const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let y = parseInt(input[0]);

if(y%4==0 && y%100!=0){
    console.log("1");
}else if(y%400==0){
    console.log("1");
}else{
    console.log("0");
}