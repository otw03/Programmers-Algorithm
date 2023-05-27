// // 명함을 그대로 두는 경우
// function solution(sizes) {
//     let maxWidth = 0;
//     let maxHeight = 0;

//     for (let i = 0; i < sizes.length; i++) {
//         let [w, h] = sizes[i];
//         // console.log(`w: ${w}, h:${h}`);
        
//         // 가로 길이가 세로 길이보다 작은 경우, 두 값을 교환
//         if (w < h) {
//             [w, h] = [h, w];
//         }
//         // console.log(`w: ${w}, h:${h}`);
        
//         maxWidth = Math.max(maxWidth, w);
//         // console.log(`Math.max(maxWidth, w): ${Math.max(maxWidth, w)}`);
//         maxHeight = Math.max(maxHeight, h);
//         // console.log(`Math.max(maxHeight, h): ${Math.max(maxHeight, h)}`);
//         // console.log(`maxWidth: ${maxWidth}, maxHeight: ${maxHeight}`);
//     }

//     return maxWidth * maxHeight;
// }

// 명합을 회전하는 경우
function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  // 가로 길이와 세로 길이 중 가장 큰 값을 찾음
  for(let i = 0; i < sizes.length; i++) {
      const [w, h] = sizes[i];
      // console.log(`w: ${w}, h:${h}`);
      // console.log(`maxWidth: ${maxWidth}, Math.max(w, h): ${Math.max(w, h)}`);
      maxWidth = Math.max(maxWidth, Math.max(w, h));
      // console.log(`maxWidth: ${maxWidth}`);
      // console.log(`maxHeight: ${maxHeight}, Math.min(w, h): ${Math.min(w, h)}`);
      maxHeight = Math.max(maxHeight, Math.min(w, h));
      // console.log(`maxHeight: ${maxHeight}`);
  }

  return maxWidth * maxHeight;
}