function solution(a, b) {
  let answer = 0;
  
  for(let i = 0; i < a.length; i++) {
      answer += a[i] * b[i];
      // console.log(answer);
  }
  // console.log(answer);
  return answer;
}