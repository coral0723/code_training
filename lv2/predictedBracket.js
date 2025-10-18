function solution(n, a, b) {
  let round = 0; 

  while (a !== b) { // n 대신 a,b 비교
    a = a % 2 === 0 ? a / 2 : (a + 1) / 2;
    b = b % 2 === 0 ? b / 2 : (b + 1) / 2;
    round++; // 한 라운드 끝날 때 증가
  }

  return round;
}


let n = 8, a = 4, b = 7;

console.log(solution(n, a, b));