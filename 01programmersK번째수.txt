function solution(array, commands) {
    const answer = []; // var 보다 되도록 const쓰는 게 좋대요
    // let 은 변수에 재할당이 가능, const는 변수 재선언, 변수 재할당 모두 불가능, const, let : 중복 선언 불가능
    for(let i=0; i<commands.length; i++){   
        const temp = array.slice(commands[i][0]-1, commands[i][1]);
        temp.sort((a, b) => a - b); // .sort()는 문자열 정렬하기 때문에 숫자로 정렬해 주려면 .sort((a, b) => a - b); 해야한다
        answer.push(temp[commands[i][2]-1]);
    }
        
    return answer;
}