function solution(elements) {
    const set = new Set();
    let n = elements.length;

    const doubled = elements.concat(elements);

    for (let len = 1; len <= n; len++) {
      for (let start = 0; start < n; start++) {
        let sum = doubled.slice(start, start + len).reduce((acc, cur) => acc + cur, 0);
        set.add(sum);
      }
    }

    return set.size;
}

const elements = [7, 9, 1, 1, 4];

console.log(solution(elements));