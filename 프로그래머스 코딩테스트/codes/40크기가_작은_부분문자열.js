function solution(t, p) {
  let count = 0;

  for(let i = 0; i <= t.length - p.length; i++) {
      // const str = t.substr(i, p.length);
      // const str = t.substring(i, i + p.length);
      const str = t.slice(i, i + p.length);
      // console.log(str);
      if(str <= p) {
          count++;
      }
  }

  return count;
}