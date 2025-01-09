function solution(a, b) {
  const ab = parseInt(String(a) + String(b));
  const ba = parseInt(String(b) + String(a));
  
  return Math.max(ab, ba);
}