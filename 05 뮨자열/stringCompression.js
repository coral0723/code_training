function solution(s) {
  let minLength = s.length;

  for(let unit = 1; unit <= s.length / 2; unit++) {
    let compressed = '';
    let prev = s.slice(0, unit);
    let count = 1;

    for(let j = unit; j < s.length; j += unit) {
      const current = s.slice(j, j + unit);
      if(prev === current) {
        count++;
      } else {
        compressed += (count > 1 ? count : "") + prev;
        prev = current;
        count = 1;
      }
    }

    compressed += (count > 1 ? count : "") + prev;
    minLength = Math.min(minLength, compressed.length);
  }

  return minLength;
}