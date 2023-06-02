function solution(food) {
  // 최초 물(0)을 넣기
  var answer = [0];
  
  // console.log(`food.length: ${food.length}`);
  // 물을 제외한 횟수 만큼 반복
  for(let i=food.length-1; i>0; i--) {
      // console.log(`i: ${i}`);
      // console.log(`food[i]: ${food[i]}`);
      
    // 양 끝에 넣어야 하기 때문에 음식/2 만큼 반복. 양 끝에 넣지 못할 경우 버림.
      let cnt = Math.floor(food[i] / 2);
      // console.log(`cnt: ${cnt}`);
      
      for(let j=0; j<cnt; j++) {
          // console.log(`answer: ${answer}`);
          
          // 우측 끝에 넣기
          answer.push(i);
          // console.log(`answer: ${answer}`);
          
          // 좌측 끝에 넣기
          answer.unshift(i);
          // console.log(`answer: ${answer}`);
      }
  };
  // 문자열로 변환하여 return
  return answer.join('');
}
