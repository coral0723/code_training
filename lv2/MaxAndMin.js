function solution(s) {
  const arr = s.split(" ").map(Number);

  return Math.min(...arr).toString() + " " + Math.max(...arr).toString();
}

const s = "-1 -2 -3 -4";
console.log(solution(s));