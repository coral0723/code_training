function solution(brown, yellow) {
  const total = brown + yellow;

  for (let h = 1; h * h <= total; h++) {
    if (total % h !== 0) continue;
    const w = total / h;
    // w는 가로, h는 세로라고 생각 (w >= h 를 보장하기 위해 아래에서 정렬)
    if ((w - 2) * (h - 2) === yellow) {
      // 반환은 [가로, 세로] (가로 >= 세로)
      return w >= h ? [w, h] : [h, w];
    }
  }
}

console.log(solution(10, 2)); // [4, 3]
console.log(solution(8, 1));  // [3, 3]
console.log(solution(24, 24));// [8, 6]
