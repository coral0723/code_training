function solution(k, dungeons) {
  let answer = 0;
  const n = dungeons.length;
  const visited = Array(n).fill(false);

  function dfs(fatigue, count) {
    // 현재까지 탐험한 개수 갱신
    if (count > answer)
      answer = count;

    for (let i = 0; i < n; i++) {
      const [need, cost] = dungeons[i];
      if (!visited[i] && fatigue >= need) { // 방문하지 않았고, 피로도가 최소 필요 피로도보다 크거나 같다면
        visited[i] = true;
        dfs(fatigue - cost, count + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);
  return answer;
}

const k = 80;
const dungeons = 	[[80,20],[50,40],[30,10]];

console.log(solution(k, dungeons));