function solution(n) {
  for(let x = 0; x<n; x++) {
      if(n%x == 1) {
          // console.log(x);
          return x;
      }
  }
}

// // while 문으로 풀기
// function solution(n) {    
//     let x = 2;
//     while (x++) {
//         if (n % x == 1) {
//             // console.log(x);
//             return x;
//         }
//     }    
// }