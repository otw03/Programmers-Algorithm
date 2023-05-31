function solution(s) {
  const numberMap = {
      zero: '0',
      one: '1',
      two: '2',
      three: '3',
      four: '4',
      five: '5',
      six: '6',
      seven: '7',
      eight: '8',
      nine: '9'
  };

  let answer = '';
  let word = '';

  for(let i = 0; i < s.length; i++) {
      // console.log(`1: ${s[i]}`);
      // 문자열을 숫자로 변환
      if(isNaN(s[i])) {
          word += s[i];
          // console.log(`2: ${word}`);
          // console.log(`3: ${numberMap[word]}`);
          if(numberMap[word]) {
              answer += numberMap[word];
              word = '';
              // console.log(`4: ${answer}`);
          }
      } else {
          answer += s[i];
          // console.log(`4: ${answer}`);
      }
  }

  return Number(answer);
}
