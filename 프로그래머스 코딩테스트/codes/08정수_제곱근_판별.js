function solution(n) {
  // 제곱근 구하기
  let x = parseInt(Math.sqrt(n));
  // console.log(n);
  // console.log(x);
  // console.log(x*x);
  return n !== (x*x) ? -1 : (x + 1)*(x + 1);
  
  // // 정수 판별 가능한 다른 방법
  // let x = Math.sqrt(n);
  // return x%1 !== 0 ? -1 : (x + 1)*(x + 1);
  // // return x%1 == 0 ? (x + 1)*(x + 1) : -1;
  
  // // Math.sqrt() 사용하지 않고 구하기
  // for(let x=1; x*x<=n; x++) {
  //     // console.log(n);
  //     // console.log(x);
  //     // console.log(x*x);
  //     if(n/x === x) {
  //         return (x + 1) * (x + 1);
  //     } else {
  //         answer = -1;
  //     }
  // }
  // return answer;
}
