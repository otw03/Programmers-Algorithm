const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

// 공백만 들어가는 경우를 생각하지 못해서 틀렸었음

// .trim() 으로 양 끝의 공백 제거
// 공백 한 개로 구분되는 단어로 이루어진 문자열을 split(" ")로 나눔
let str = input.trim().split(" ");

// 문자열 str의 길이를 구함
// 공백만 들어가는 경우를 처리해 줘야 한다.
// 공백만 들어갔을 때 str이 [ '' ] 이기 때문에
// if(str[0] == " ") 로 예외처리 할 경우 1이 나온다.
// 그래서 if(str[0] == "") 로 처리

// 삼항 연산자로 수정
str[0] == "" ? console.log(0) : console.log(str.length);

/* if(str[0] == "") {
    console.log(0);
} else {
    console.log(str.length);
} */