function solution(n, m) {
  let a = 0; // 최대공약수
  let b = 0; // 최소공배수

  // 최대공약수 구하기
  for (let i = 1; i <= n; i++) {
      if (n % i === 0 && m % i === 0) {
          a = i;
      }
  }
  // 최소공배수 구하기
  for (let i = n; i <= n * m; i++) {
      if (i % n === 0 && i % m === 0) {
          b = i;
          break;
      }
  }

  return [a, b];
}