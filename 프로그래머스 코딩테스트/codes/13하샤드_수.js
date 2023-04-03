function solution(x) {
  return x % x.toString().split('').reduce((a, b) => a + parseInt(b), 0) === 0;
}

// function solution(x)
// {
//     var answer = 0;
  
//     let str = (x+"").split("");
//     // console.log(str);
//     for(let i =0; i<str.length; i++) {
//         answer += parseInt(str[i]);
//     }

//     return x % answer === 0;
// }