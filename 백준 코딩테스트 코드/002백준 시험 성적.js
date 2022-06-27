const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let S = parseInt(input[0]);

if(S>=90 && S<=100){
    console.log("A");
}else if(S>=80 && S<=89){
    console.log("B");
}else if(S>=70 && S<=79){
    console.log("C");
}else if(S>=60 && S<=69){
    console.log("D");
}else{
    console.log("F");
}