function solution(n) {
  // console.log(n.toString().split('')); // 	[ '1', '1', '8', '3', '7', '2' ]
  // console.log(n.toString().split('').sort((a, b) => b -a)); // [ '8', '7', '3', '2', '1', '1' ]
  // console.log(n.toString().split('').sort((a, b) => b -a).join('')); // 873211
  return parseInt(n.toString().split('').sort((a, b) => b -a).join(''));
}

// // 반복문, 배열 사용
// function solution(n) {
//     n = n.toString();
//     let arr = [];

//     for(let i=0; i<n.length; i++) {
//         arr.push(parseInt(n[i]));
//     }
//     // console.log(arr); // [ 1, 1, 8, 3, 7, 2 ]

//     // 배열의 원소중 마지막을 제외한 항목까지 반복
//     for(let i=0; i<arr.length-1; i++) {
//         // 배열의 원소중 i번째 다음 원소부터 마지막 원소까지 반복
//         for(let j=i+1; j<arr.length; j++) {

//             // 부등호 방향 ">" : 오름차순(순차정렬)
//             // 부등호 방향 "<" : 내림차순(역순정렬)
//             if(arr[i] < arr[j]) {
//                 const tmp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = tmp;
//             }
//         }
//     }
//     // console.log(arr); // [ 8, 7, 3, 2, 1, 1 ]

//     // console.log(arr.join('')); // 873211
//     return parseInt(arr.join(''));
// }

