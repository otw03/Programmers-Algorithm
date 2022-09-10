const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split('\n'); 

for(let t=0; t<input[0]; t++) {
    const k =+ input[t*2+1];
    const n =+ input[t*2+2];
    const arr = Array(k+1).fill().map(_ => Array(n+1).fill(0));
    
    for(let i=1; i<=n; i++) {
        arr[0][i] = i;
    }
    for(let i=0; i<=k; i++) {
        arr[i][1] = 1;
    }

    for(let i=1; i<=k; i++) {
        for(let j=1; j<=n; j++) {
            arr[i][j] = arr[i-1][j] + arr[i][j-1];
        }
    }
    
    console.log(arr[k][n]);
}