function solution(answers) {
  const a = [1, 2, 3, 4, 5]; // 수포자1 패턴
  const b = [2, 1, 2, 3, 2, 4, 2, 5]; // 수포자2 패턴
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 수포자3 패턴
  
  const scores = [0, 0, 0]; // 수포자들의 점수 배열 [수포자1, 수포자2, 수포자3]
  
  // 수포자들의 정답 패턴과 주어진 정답 배열을 비교하여 점수 계산
  // 학생의 답은 i % 배열의 길이
  for(let i = 0; i < answers.length; i++) {
      if (answers[i] === a[i % a.length]) {
          scores[0]++;
      }
      if(answers[i] === b[i % b.length]) {
          scores[1]++;
      }
      if(answers[i] === c[i % c.length]) {
          scores[2]++;
      }
  }
  
  // 가장 높은 점수를 받은 수포자들을 찾아서 결과 배열에 추가
  const maxScore = Math.max(...scores);
  const answer = [];
  
  for(let j = 0; j < scores.length; j++) {
      if(scores[j] === maxScore) {
          answer.push(j + 1);
      }
  }
  
  return answer;
}
