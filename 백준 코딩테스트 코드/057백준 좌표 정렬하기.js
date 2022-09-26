const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

// console.log(input);
const N = input.shift();
// console.log(input);

input.sort(
  (a, b) =>
    parseInt(a.split(' ')[0]) - parseInt(b.split(' ')[0]) || parseInt(a.split(' ')[1]) - parseInt(b.split(' ')[1])
);
// console.log(input);
console.log(input.join('\n'));

/* 
sort() 동작 방식
compareFunction(a, b)이 0보다 작은 경우 a를 b보다 낮은 인덱스으로 정렬합니다. 즉, a가 먼저옵니다.
compareFunction(a, b)이 0을 반환하면 a와 b를 서로에 대해 변경하지 않고 모든 다른 요소에 대해 정렬합니다.
compareFunction(a, b)이 0보다 큰 경우, b를 a보다 낮은 인덱스로 정렬합니다.

논리합 연산자 ||는 두개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다. 대부분의 연산자가 그렇듯이 논리합 연산자도 오른쪽에서 왼쪽으로 평가가 진행된다.
논리곱 연산자 &&와 논리합 연산자 ||는 이와 같이 논리 평가를 결정한 피연산자의 평가 결과를 그대로 반환한다. 이를 단축 평가(Short-Circuit evaluation)라 부른다.

단축 평가 표현식   |  평가 결과
true || anything	|  true
false || anything	|  anything
true && anything	|  anything
false && anything	|  false
*/
