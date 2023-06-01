function solution(strings, n) {
  strings.sort((a, b) => {
      const charA = a[n];
      const charB = b[n];
      // console.log(`a: ${a}, b: ${b}`);
      // console.log(`charA: ${charA}, charB: ${charB}`);

      if(charA === charB) {
          // console.log(`a < b ? -1 : 1 => ${a < b ? -1 : 1}`);
          return a < b ? -1 : 1;
      }
      // console.log(`charA < charB ? -1 : 1 => ${charA < charB ? -1 : 1}`);
      return charA < charB ? -1 : 1;
  });

  return strings;
}