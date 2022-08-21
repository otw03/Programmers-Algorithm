const fs = require("fs");
const input = fs.readFileSync("/dev/stdin");

let N = input.toString().trim().split(" ");
// 바꾼 방법
let arr = [];
for(let i=0; i<N.length; i++) {
    let A = N[i];
    let B = "";
    for(let j=A.length-1; j>=0; j--) {    
        B += A[j];       
    }
    arr.push(parseInt(B));
}
console.log(arr);
if(arr[0]>arr[1]) {
    console.log(arr[0]);
} else {
    console.log(arr[1]);
}



// 처음 만든 것
// let A = N[0]; 

// let A1 = A[2]; // A[A.length-1]
// let A10 = A[1]; 
// let A100 = A[0];

// let B = N[1];

// let B1 = B[2]; // A[A.length-1]
// let B10 = B[1]; 
// let B100 = B[0];

// let C = parseInt(A1 + A10 + A100) ;
// let D = parseInt(B1 + B10 + B100);

// if(C>D) {
//     console.log(C);
// } else {
//     console.log(D);
// }




// 갑자기 문자형 변환에 어떤 게 나은지 궁금해졌다
// String() - 어떤 형태이든 문자로 형변환
// .toString() - null(존재하지 않는 값, 비어있는 값, 알 수 없는 값), undefined(값이 할당되지 않은 상태) 형 변환 시 오류


/* 다른 방법 */
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split('').reverse().join('');

// let N = input.split(" ");

// let A = parseInt(N[0]);
// let B = parseInt(N[1]);

// if(A>B) {
//     console.log(A);
// } else {
//     console.log(B);
// }

// reverse() 함수는 배열의 순서를 거꾸로 만들어 줍니다.
// array.reverse()
// 이 함수는 이 함수를 호출한 배열을 거꾸로 뒤집고, 그 배열을 가리키는 참조값을 반환합니다.
// 따라서, 이 함수를 실행시키면 원본 배열이 변형됩니다.

// join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
// arr.join([separator])
// 배열의 각 요소를 구분할 문자열을 지정합니다. 
// 이 구분자는 필요한 경우 문자열로 변환됩니다. 
// 생략하면 배열의 요소들이 쉼표로 구분됩니다. 
// separator가 빈 문자열이면 모든 요소들이 사이에 아무 문자도 없이 연결됩니다.
// 배열의 모든 요소들을 연결한 하나의 문자열을 반환합니다. 
// 만약 arr.length 가 0이라면, 빈 문자열을 반환합니다.
// 모든 배열 요소가 문자열로 변환된 다음 하나의 문자열로 연결됩니다.
// 요소가 undefined 또는 null이면 빈 문자열로 변환합니다.