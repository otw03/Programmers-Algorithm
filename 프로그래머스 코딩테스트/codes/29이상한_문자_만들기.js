function solution(s) {
  const words = s.split(" ");
  // console.log(words);
  let answer = "";

  for(let i = 0; i < words.length; i++) {
      for(let j = 0; j < words[i].length; j++) {
          // console.log(words[i][j]);
          if(j % 2 === 0) {
              answer += words[i][j].toUpperCase();
              // console.log(answer);
          } else {
              answer += words[i][j].toLowerCase();
              // console.log(answer);
          }
      }
      if(i !== words.length - 1) {
          answer += " ";
          // console.log(answer);
      }
  }
  // console.log(answer);
  return answer;
}