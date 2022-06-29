const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

if(a==b && b==c){   // a,b,c 전부 같은 경우
    console.log(10000+a*1000);
}else if(a==b){     // a,b만 같은 경우
    console.log(1000+a*100);
}else if(b==c){     // b,c만 같은 경우
    console.log(1000+b*100);
}else if(a==c){     // a,c만 같은 경우
    console.log(1000+c*100);
}else{              // 모두 다른 경우
    console.log(Math.max(a,b,c)*100);    // Math.max()함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환한다
}