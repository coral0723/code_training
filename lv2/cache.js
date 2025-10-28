function solution(cacheSize, cities) {
  const cache = [];
  let time = 0;

  cities.forEach((city) => {
    city = city.toLowerCase();

    if (cache.includes(city)) { // 캐시에 있는 경우
      time += 1; // cache hit
      cache.splice(cache.indexOf(city), 1); // 해당 city를 꺼내서
      cache.push(city); // 가장 최근 자리에 넣기
    } 
    else { // 캐시에 없는 경우
      time += 5; // cache miss
      cache.push(city);

      if (cache.length > cacheSize) // 캐시가 초과되면
        cache.shift(); // 가장 오래된 city 제거
    }
  })

  return time;
}

const cacheSize = 0;
const cities = 	["Jeju", "Pangyo", "Seoul", "NewYork", "LA"];

console.log(solution(cacheSize, cities));