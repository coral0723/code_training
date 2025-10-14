function solution(w, h) {
  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  return w * h - (w + h - gcd(w, h));
}
