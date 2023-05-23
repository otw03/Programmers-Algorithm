function solution(s, n) {
  let answer = '';

  for(let i = 0; i < s.length; i++) {
      let charCode = s[i].charCodeAt();
      // 알파벳인 경우만 처리
      if(s[i] !== ' ') {
          // 대문자인 경우
          if(charCode >= 65 && charCode <= 90) {
              // console.log(`초기값: ${charCode}`);
              charCode = (charCode - 65 + n) % 26 + 65;
              // console.log(`계산된 값: ${charCode}`);
          }
          // 소문자인 경우
          else if(charCode >= 97 && charCode <= 122) {
              // console.log(`초기값: ${charCode}`);
              charCode = (charCode - 97 + n) % 26 + 97;
              // console.log(`계산된 값: ${charCode}`);
          }
      }

      answer += String.fromCharCode(charCode);
      // console.log(answer);
  }

  return answer;
}
