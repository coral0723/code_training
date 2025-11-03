function solution(topping) {
  const rightMap = new Map();
  const leftSet = new Set();
  let result = 0;

  for (let t of topping) {
    if (!rightMap.has(t)) 
      rightMap.set(t, 1);
    else
      rightMap.set(t, rightMap.get(t) + 1);
  }


  for (let t of topping) {
    leftSet.add(t);
    rightMap.set(t, rightMap.get(t) - 1);

    if(rightMap.get(t) === 0)
      rightMap.delete(t);

    if (leftSet.size === rightMap.size) {
      result++;
    }
  }

  return result;
}

const topping = [1, 2, 1, 3, 1, 4, 1, 2];

console.log(solution(topping));