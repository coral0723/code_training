function solution(priorities, location) {
  const queue = priorities.map((priority, index) => ({priority, index}));
  let count = 0;

  while (queue.length > 0) {
    const current = queue.shift();
    const hasHigher = queue.some(item => item.priority > current.priority);

    if(hasHigher) {
      queue.push(current);
    } else {
      count++
      if(current.index === location) return count;
    }
  }
}


let priorities = [2, 1, 3, 2];
let location = 2;

console.log(solution(priorities, location));