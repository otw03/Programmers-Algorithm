const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n'); 
/*
입력값 
5
ab
aa
aca
ba
bb
*/
let count = 0;

for(let i=1; i<input.length; i++) {
    let arr = [];
    let temp = input[i].split("");
    // console.log(temp);
    /* 
    [ 'a', 'b', '\r' ]
    [ 'a', 'a', '\r' ]
    [ 'a', 'c', 'a', '\r' ]
    [ 'b', 'a', '\r' ]
    [ 'b', 'b' ]
    */
    for(let j=0; j<temp.length; j++) {
        // temp[j]가 arr에 포함되어 있지 않다면 넣기
        if(!arr.includes(temp[j])){
            arr.push(temp[j]);
        } 
        // temp[j]가 arr에 포함되어 있고, temp[j-1] == temp[j] 이면 넣기
        else if(temp[j-1] == temp[j]){
            arr.push(temp[j]);
        }
    }
    // console.log(arr);
    /* 
    [ 'a', 'b', '\r' ]
    [ 'a', 'a', '\r' ]
    [ 'a', 'c', '\r' ]
    [ 'b', 'a', '\r' ]
    [ 'b', 'b' ]
    */
    // console.log(arr.join(""));
    /* 
    ab
    aa
    ac
    ba
    bb
    */
    // 완성된 글자와 입력값 비교해서 같으면 count++
    if(arr.join("") == input[i]) {
        count++;
    }
}

console.log(count);