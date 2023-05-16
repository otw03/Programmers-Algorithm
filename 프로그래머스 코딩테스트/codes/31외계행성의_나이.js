// function solution(age) {
//     let answer = '';
//     let str = 'abcdefghij';
//     // console.log((typeof(age)));
//     age = age.toString();
//     // console.log(age);
//     // console.log((typeof(age)));
    
//     for(let i = 0; i < age.length; i++) {
//         // console.log(`age[i]: ${age[i]}, str[age[i]]: ${str[age[i]]}`);
//         answer += str[age[i]];
//         // console.log(answer);
//     }
    
//     return answer;
// }

// map() 으로 풀기
function solution(age) {
  let str = 'abcdefghij';
  
  // return [...(age.toString())].map(i => str[i]).join('');
  return age.toString().split('').map(i => str[i]).join('');
}