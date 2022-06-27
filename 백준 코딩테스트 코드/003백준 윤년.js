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



/*
코드 간소화 &&, || 한 줄에 사용

if(y%4==0 && y%100!=0 || y%400==0){
    console.log("1");
}else{
    console.log("0");
}

*/