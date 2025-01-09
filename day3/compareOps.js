function solution(a, b) {
  var answer = 0;
  
  const ab = parseInt(String(a) + String(b));
  
  return Math.max(ab, 2*a*b);
}