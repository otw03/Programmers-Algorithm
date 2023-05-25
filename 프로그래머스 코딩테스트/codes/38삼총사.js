function solution(number) {
  const len = number.length;
  let count = 0;

  // 3명의 학생번호를 선택하는 모든 조합 확인
  for(let i = 0; i < len - 2; i++) {
      for(let j = i + 1; j < len - 1; j++) {
          for(let k = j + 1; k < len; k++) {
              // 3명의 학생 번호를 더한 결과가 0인 경우 => 삼총사
              if(number[i] + number[j] + number[k] === 0) {
                  count++;
              }
          }
      }
  }

  return count;
}