const fs = require("fs");
const input = fs.readFileSync("input.txt").toString();


let sum = 0;
for(let i=0; i<input.length; i++ ){
    let num = input[i].charCodeAt();
    let result = 0

    if(num >= 65 && num <= 67) {        // ABC
        result += 3;
    } else if(num >= 68 && num <= 70) { // DEF
        result += 4;
    } else if(num >= 71 && num <= 73) { // GHI
        result += 5;
    } else if(num >= 74 && num <= 76) { // JKL
        result += 6;
    } else if(num >= 77 && num <= 79) { // MNO
        result += 7;
    } else if(num >= 80 && num <= 83) { // PQRS
        result += 8;
    } else if(num >= 84 && num <= 86) { // TUV
        result += 9;
    } else if(num >= 87 && num <= 90) { // WXYZ
        result += 10;
    } else {
        result += 0;
    }
    sum +=result;
}
console.log(sum);