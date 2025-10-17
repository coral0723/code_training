function solution(k, tangerine) {
    const countMap = new Map();

    //각 크기별로 개수 세기
    for (let size of tangerine) {
      countMap.set(size, (countMap.get(size) || 0) + 1);
    }

    //개수 기준으로 내림차순 정렬
    const counts = Array.from(countMap.values()).sort((a, b) => b - a);

    console.log(countMap, counts);

    //많이 있는 크기부터 차례로 골라 k개 채우기
    let total = 0;
    let kinds = 0;

    for (const c of counts) {
      total += c;
      kinds++;
      if (total >= k) break;
    }

    return kinds;
}

const k = 6;
const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];

solution(k, tangerine);