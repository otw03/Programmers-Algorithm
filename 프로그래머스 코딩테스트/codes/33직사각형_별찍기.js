process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    let star = "";
    // b줄 만큼 반복 
    for (let i = 0; i < b; i++) {
        // 별 한줄에 a개 찍을 때까지 반복 
        for (let j = 0; j < a; j++) {
            star += '*';
        }
        // 줄바꿈
        star += '\n'
    }
    console.log(star);
});