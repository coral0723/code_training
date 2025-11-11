function solution(numbers, target) {
    let count = 0;


    function dfs(index, sum) {
      if(index === numbers.length) {
        if(sum === target) 
          count++;
        return;
      }

      dfs(index + 1, sum + numbers[index]);
      dfs(index + 1, sum - numbers[index]);
    }

    dfs(0, 0);
    return count;
}

const numbers = [4, 1, 2, 1];
const target = 4;

console.log(solution(numbers, target));