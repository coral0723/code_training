function solution(prices) {
  const result = Array(prices.length).fill(0);

  for(let i = 0; i < prices.length; i++) {
    for(let j = i + 1; j < prices.length; j++) {
      result[i]++;
      if(prices[i] > prices[j]) break;
    }
  }

  return result;
}

const prices = [1, 2, 3, 2, 3];

console.log(solution(prices));