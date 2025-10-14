function solution(s) {
  const arr = s.split(" ").map(Number);

  //Math.max(), min()에는 숫자 목록을 인자로 줘야 함
  return Math.min(...arr).toString() + " " + Math.max(...arr).toString();
}

const s = "-1 -2 -3 -4";
console.log(solution(s));