function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  // 방문 + 거리 저장용 배열
  const dist = Array.from({ length: n }, () => Array(m).fill(0));

  // 상하좌우
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  // BFS 큐 (포인터로 pop 비용 줄이기)
  const q = [];
  let head = 0;

  // 시작점
  q.push([0, 0]);
  dist[0][0] = 1;          // 시작 칸 포함해 1로 시작

  while (head < q.length) {
    const [x, y] = q[head++];

    // 도착 지점
    if (x === n - 1 && y === m - 1) return dist[x][y];

    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      // 범위 내 + 길(1) + 아직 방문 X
      if (
        nx >= 0 && nx < n &&
        ny >= 0 && ny < m &&
        maps[nx][ny] === 1 &&
        dist[nx][ny] === 0
      ) {
        dist[nx][ny] = dist[x][y] + 1;
        q.push([nx, ny]);
      }
    }
  }

  // 도달 불가
  return -1;
}


const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]];

console.log(solution(maps));