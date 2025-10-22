function solution(n) {
  const arr = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
  let num = 1;
  let x = -1, y = 0; // 시작 위치
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i % 3 === 0) x++;         // 아래로 이동
      else if (i % 3 === 1) y++;    // 오른쪽으로 이동
      else { x--; y--; }            // 왼쪽 위로 이동
      arr[x][y] = num++;
    }
  }
  return arr.flat(); // 2차원 배열을 1차원 배열로 변환
}


const n = 4;
console.log(solution(n));