function solution(s) {
  const arr = s.slice(2, -2).split("},{").map((numbers) => numbers.split(",").map(Number));

  arr.sort((a, b) => a.length - b.length);

  const answer = [];
  const set = new Set;

  for(let numbers of arr) {
    for (let num of numbers) {
      if (!set.has(num)) {
        answer.push(num);
        set.add(num);
      }
    }
  }
  
  return answer;
}

const s = "{{4,2,3},{3},{2,3,4,1},{2,3}}";

console.log(solution(s));