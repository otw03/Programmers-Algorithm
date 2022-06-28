//여러줄 입력시(input1, input2)
function solution(input1, input2) {
    let x = parseInt(input[0]);
    let y = parseInt(input[1]);

    if(x>0 && y>0){
        console.log("1");
    }else if(x<0 && y>0){
        console.log("2");
    }else if(x<0 && y<0){
        console.log("3");
    }else if(x>0 && y<0){
        console.log("4");
    }
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", function(line) {
    input.push(line)
    //rl.close()가 없어서 계속 입력
    //로컬에서 입력을 중지하려면 입력을 한 후 ctrl+d로 입력 종료
}).on("close", function() {
    let list1 = input[0].split(' ').map((el) => parseInt(el));
    let list2 = input[1].split(' ').map((el) => parseInt(el));
    solution(list1, list2);
    process.exit();
});
