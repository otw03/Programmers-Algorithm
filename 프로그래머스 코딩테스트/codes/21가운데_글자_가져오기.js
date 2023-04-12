function solution(s) {
  const length = s.length;
  const midIndex  = Math.floor(length / 2);
  // console.log(length);
  // console.log(midIndex);
  
  if(length % 2 === 0) {
      // 짝수인 경우
      // console.log(`${s[midIndex - 1]} + ${s[midIndex]}`);
      return s[midIndex - 1] + s[midIndex];
  } else {
      // 홀수인 경우
      // console.log(`${s[midIndex]}`);
      return s[midIndex];
  }
  
  // // 삼항연산자
  // return length % 2 === 0 ? s[midIndex - 1] + s[midIndex] : s[midIndex];
}