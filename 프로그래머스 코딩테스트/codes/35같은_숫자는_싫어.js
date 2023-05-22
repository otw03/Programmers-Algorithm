// function solution(arr)
// {
//     let answer = [];
    
//     for(let i = 0; i <arr.length; i++) {
//         if(arr[i] != arr[i+1]) {
//             answer.push(arr[i]);
//             // console.log(answer);
//         }
//     }
//     // console.log(answer);
//     return answer;
// }

// filter() 이용
function solution(arr)
{
    let answer = arr.filter((v, i) => v != arr[i+1]);
    
    // console.log(answer);
    return answer;
}