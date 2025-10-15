function solution(n) {
  const countOne = (num) => num.toString(2).split("1").length - 1;

  const ones = countOne(n);
  let next = n + 1;

  while(countOne(next) !== ones) {
    next++;
  }

  return next;
}

const n = 78;

console.log(solution(n));