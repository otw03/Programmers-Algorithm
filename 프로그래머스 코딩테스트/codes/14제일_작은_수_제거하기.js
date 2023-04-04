// function solution(arr) {
//   if (arr.length === 1) {
//     return [-1];
//   } else {
//     const minNum = Math.min(...arr);
//       // console.log(minNum);
//     return arr.filter(v => v !== minNum);
//   }
// }

function solution(arr) {
  const minNum = Math.min(...arr);
  return arr.length === 1 ? [-1] : arr.filter(v => v !== minNum);
}

// function solution(arr) {
//   if (arr.length === 1) {
//     return [-1];
//   } else {
//     const minNum = Math.min(...arr);
//     const minIndex = arr.indexOf(minNum);
//     arr.splice(minIndex, 1);
//     return arr;
//   }
// }