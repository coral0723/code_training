function solution(s) {
  const stack = new Array(s.length);
  let top = -1; // 스택 포인터 (-1이면 스택 비어 있음)

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (top >= 0 && stack[top] === char) {
      top--; // pop
    } else {
      top++; 
      stack[top] = char; // push
    }
  }

  // 스택이 비어 있으면 모두 제거 가능
  return top === -1 ? 1 : 0;
}

const s = "baabaa";

console.log(solution(s));