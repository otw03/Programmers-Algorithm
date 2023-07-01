function solution(numbers) {
  const answer = [];
  
  for(let i = 0; i < numbers.length - 1; i++) {
      for(let j = i + 1; j < numbers.length; j++) {
          const sum = numbers[i] + numbers[j];
          // console.log(sum);
          if(!answer.includes(sum)) {
              answer.push(sum);
              // console.log(answer);
          }
      }
  }
  
  return answer.sort((a, b) => a - b);
}