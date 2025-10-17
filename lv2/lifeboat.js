function solution(people, limit) {
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let count = 0;

  while (left <= right) {
    // 가장 가벼운(left) + 가장 무거운(right)
    if (people[left] + people[right] <= limit) {
      left++; // 가벼운 사람도 같이 태움
    }
    right--; // 무거운 사람은 보트에 태웠으므로 제외
    count++; // 보트 한 척 사용
  }

  return count;
}


const people = [50, 50, 50];
const limit = 100;

console.log(solution(people, limit));