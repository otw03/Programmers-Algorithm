const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n');

let str = input[0];

let result = str.length;

for(let i=0; i<str.length; i++) {
    if(str[i] == '=') {
        if(str[i-1] == 'c'){
            result--;
        } else if(str[i-1] == 's') {
            result--;
        } else if(str[i-1] == 'z') {
            result--;
            if(str[i-2] == 'd'){
                result--;
            }
        }
    } else if(str[i] == '-') {
        if(str[i-1] == 'c') {
            result--;
        } else if(str[i-1] == 'd') {
            result--;
        }
    } else if(str[i] == 'j') {
        if(str[i-1] == 'l') {
            result--;
        } else if(str[i-1] == 'n') {
            result--;
        }
    }
}
console.log(result);

/*
----------
  =
 c
 s
 z
dz
----------
  -
 c
 d
----------
  j
 l
 n
 ---------
*/

// 자바스크립트는 일반적으로 음수 인덱스에 접근이 불가능하다
// str에 jddz=z=n 이 입력됐고,
// i=0일 때 str[i-1] => str[-1]인데 음수 인덱스가 적용된다면 result가 4여야 하지만 5가 나온다.
// 실제로 str[-1]에 접근하면 undefined을 반환한다.
// 자바스크립트에서 [-1]인덱스에 접근하기 위해서는
// 2022년부터 표준 메소드로 채택된 Array.prototype.at() 메소드를 사용해야 한다.
// console.log(str.at(-1)); => n