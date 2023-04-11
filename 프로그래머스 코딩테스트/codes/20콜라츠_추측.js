function solution(num) {
  let answer = 0;
  
  while(num !== 1 && answer < 500) {
      if(num % 2 === 0) {
          num /= 2;
      } else {
          num = num * 3 + 1;
      }
      answer++;
  }
  
  return answer === 500 ? -1 : answer;
}