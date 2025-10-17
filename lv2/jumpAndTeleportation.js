function solution(n) {
  let k = 0;

  while(n !== 1) {
    if(n % 2 === 1) { //홀수라면
      k++;
    }
    n = Math.floor(n / 2);
  }

  return k;
}

const n = 5;

console.log(solution(n));