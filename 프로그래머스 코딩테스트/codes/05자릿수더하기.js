// // 첫풀이
// function solution(n)
// {
//     var answer = 0;
    
//     let str = n.toString();
//     // console.log(str);
//     for(let i =0; i<str.length; i++) {
//         answer += parseInt(str[i]);
//     }
//     return answer;
// }

// // 문자열 `+` 하면 자동형변환 되는 것 이용, `split()`사용
// function solution(n)
// {
//     var answer = 0;
    
//     let str = (n+"").split("");
//     // console.log(str);
//     for(let i =0; i<str.length; i++) {
//         answer += parseInt(str[i]);
//     }

//     return answer;
// }

// reduce 추가로 사용
function solution(n)
{
   
    let answer = (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
    console.log(answer);

    return answer;
}
