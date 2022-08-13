const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

// 대문자로 통일
let S = input[0].toUpperCase();
// 빈 배열 만들고 0채워넣기
let arr = new Array(26);
arr.fill(0);

let max = 0;

// A~Z : 아스키코드 숫자 65~90
// 입력받은 문자를 숫자로 변환하고 -65 해서 배열의 index값에 맞춤
// 각 문자가 몇번 사용됐는지, 제일 많이 사용된 횟수 구하기
for(let i = 0; i < S.length; i++) {
    let num = S.charCodeAt(i)-65;
    arr[num]++;
        if(arr[num] > max) {
            max = arr[num];
        }
}

let result = "";

// 가장 많이 사용된 문자 찾기, 여러개일 경우 ? 출력
for(let i = 0; i < arr.length; i++) {
    if(arr[i] == max) {
        if(result == "") {
            result = String.fromCodePoint(i+65);
        } else {
            result = "?";
            break; // ? 나오면 더이상 실행할 필요 없으므로 끝내기
        }
    }
}
console.log(result);