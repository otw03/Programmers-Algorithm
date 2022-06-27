const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// parseInt 란?
// 자바스크립트에 내장되어 있는 함수로, 
// 말 그대로 문자열을 파싱하여 문자열에 포함된 숫자를 찾아서 number로 형변환을 시켜준다.
let A = parseInt(input[0]);
let B = parseInt(input[1]);

if(A>B){
    console.log(">");
}else if(A<B){
    console.log("<");
}else if(A==B){
    console.log("==");
}
