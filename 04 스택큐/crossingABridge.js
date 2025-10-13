function solution(bridge_length, weight, truck_weights) {
  let second = 0;                  // 경과 시간
  const crossing = [];             // 다리를 건너고 있는 트럭들 [{weight, enteredAt}]
  let totalWeightOnBridge = 0;     // 현재 다리 위 트럭 무게 합

  while (truck_weights.length > 0 || crossing.length > 0) {
    second++; // 1초 경과

    // 1. 다리를 건너고 있는 트럭 중 끝난 트럭 제거
    if (crossing.length > 0) {
      if (second - crossing[0].enteredAt >= bridge_length) {
        totalWeightOnBridge -= crossing[0].weight;
        crossing.shift();
      }
    }

    // 2. 대기 트럭이 다리에 들어갈 수 있으면 추가
    if (truck_weights.length > 0) {
      if (totalWeightOnBridge + truck_weights[0] <= weight) {
        const truck = truck_weights.shift();
        crossing.push({ weight: truck, enteredAt: second });
        totalWeightOnBridge += truck;
      }
    }
  }

  return second;
}
