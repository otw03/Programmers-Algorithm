function solution(s) {
  const answer = [];
  const arr = [];

  for (let i = 0; i < s.length; i++) {
      // arr 배열에 현재 글자 s[i]가 포함되어 있는 경우(이전에 이미 나타난 글자인 경우)
      if(arr.includes(s[i])) {
          // console.log("차이", arr.length - arr.lastIndexOf(s[i]));
          // arr 배열길이에서 현재 글자 s[i]의 마지막 인덱스를 찾아서 전체 길이에서 빼서 현재 위치와 가장 가까운 같은 글자와의 거리를 구함
          answer.push(arr.length - arr.lastIndexOf(s[i]));
          arr.push(s[i]);
          // console.log("포함o:", answer, arr);
      } else { // arr 배열에 현재 글자 s[i]가 포함되어 있지 않은 경우(이전에 나타나지 않은 글자인 경우)
          answer.push(-1);
          arr.push(s[i]);
          // console.log("포함x:", answer, arr);
      }
  }
  
  return answer;
}

// function solution(s) {
//     const answer = [];
//     [...s].map((char, i) => {
//         const count = s.slice(0, i).lastIndexOf(char);
//         // console.log(count);
//         answer.push(count === -1 ? -1 : i - count)
//         // console.log(answer);
//     });
  
//     return answer;
// }
