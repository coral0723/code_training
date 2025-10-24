function solution(n, left, right) {
  const result = [];

  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const col = i % n;
    result.push(Math.max(row, col) + 1);
  }

  return result;
}

const n = 4;
const left = 7;
const right = 14;

console.log(solution(n, left, right));