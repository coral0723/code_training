function solution(n) {
  const MOD = 1234567;
  if (n <= 1) return n;

  let a = 0, b = 1;

  for (let i = 2; i <= n; i++) {
    let temp = (a + b) % MOD;
    a = b;
    b = temp;
  }

  return b;
}

const n = 3;

console.log(solution(n));