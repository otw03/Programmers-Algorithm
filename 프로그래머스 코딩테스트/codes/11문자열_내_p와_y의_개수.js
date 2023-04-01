// function solution(s){
//     let arr = s.toUpperCase().split('');
//     // console.log(arr);
//     let pArr = [];
//     let yArr = [];
    
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] == "P") {
//             pArr.push(arr[i]);
//         } else if(arr[i] == "Y") {
//             yArr.push(arr[i]);
//         }
//     }
//     // console.log(pArr);
//     // console.log(yArr);
    
//     return (pArr.length === yArr.length) ? true : false;
// }

// 간단한 풀이
function solution(s){
  // console.log(s.toUpperCase().split('P'));
  // console.log(s.toUpperCase().split('Y'));
  
  return s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length;
}