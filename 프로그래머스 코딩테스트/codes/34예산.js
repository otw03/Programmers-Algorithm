function solution(d, budget) {
  // 예산 오름차순으로 정렬
  d.sort((a, b) => a - b);
  
  let count = 0;
  
  for(let i = 0; i < d.length; i++) {
      // console.log(`예산: ${d[i]}`);
      // 부서별 신청 금액이 예산보다 작거나 같으면 해당 부서 지원 count++
      if (d[i] <= budget) {
          // console.log(`budget: ${budget}`);
          count++;
          // 예산에서 신청한 금액 빼기
          budget -= d[i];
          // console.log(`남은 budget: ${budget}`);
          // console.log(`count: ${count}`);
          // console.log(`---------------`);
      } else {
          // 예산 초과 시 반복문 종료
          break;
      }
  }
  return count;
}