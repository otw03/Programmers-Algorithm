const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' '); 

let A = parseInt(input[0]); // 고정비용
let B = parseInt(input[1]); // 가변비용: 재료비+인건비
let C = parseInt(input[2]); // 노트북 판매가격

let result = 0;

// 손익분기점이 안 오려면  가변비용 >= 노트북 판매가격 
// 고정비용 / (판매가격 - 가변비용) => 손해가 사라지는 지점
// Math.floor() : 소수점 이하를 버림한다.
// parseInt() 가 안 되는 이유 : 정수부분만 가져오는 것이기 때문
// 음수의 경우 버림이 아니라 올림이 될 수도 있다.
/* 
parseInt(0.0000001) = 1, parseInt(0.000001) = 0인 이유

javascript parseInt() 함수 (parseInt(string, radix)) 호출하면,
데이터 선처리로 앞에 string은 toString() 함수로 한번 변환 된 후 정수형으로 계산됨
toString()함수에서 숫자를 변환할때 (10^k) 에서 k의 범위에 따라 처리되는 로직이 다른데

k < -6 일때; toString은 단일자릿수로 구성된 문자열 반환하고 그 다음 소문자 e , 숫자 형태의 지수표현을 반환
지수표현 예시) 0.000001   -> 1e-6       0.0000001 -> 1e-7
결국, 0.000001 (le-6)은 "0.000001" 반환, 0.0000001 (1e-7)은 "1e-7"을 반환
parseInt()로 다시 돌아와서,parseInt(string, radix)에서 string을 "le-7"로 받았을때 parseInt는
0x / 0X가 아닌 문자가 포함된 문자열을 받을 경우 최초 문자만 정수형으로 계산
EX) "22NASD" -> 22      
    "22MNA4DSA" -> 22
    
따라서, 0.0000001 -> toString() -> "1e-7" -> parseInt("1e-7") -> 1
*/
result = B >= C ? -1 : (Math.floor(A / (C - B))) + 1;

console.log(result);