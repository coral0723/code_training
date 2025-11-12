function solution(str1, str2) {
  const A = new Map();
  const B = new Map();
  const intersection = new Map(); //교집합
  const union = new Map(); //합집합
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for(let i = 0; i < str1.length; i++) {
    const pair = str1[i] + str1[i + 1];

    if(/^[a-z]{2}$/g.test(pair)) {
      if(A.get(pair) === undefined) {
        A.set(pair, 1);
      } 
      else {
        A.set(pair, A.get(pair) + 1);
      }
    }
  }

  for(let i = 0; i < str2.length; i++) {
    const pair = str2[i] + str2[i + 1];

    if(/^[a-z]{2}$/.test(pair)) {
      if(B.get(pair) === undefined) {
        B.set(pair, 1);
      } 
      else {
        B.set(pair, B.get(pair) + 1);
      }
    }
  }

  //교집합 구하기
  for(const key of A.keys()) {
    if(B.get(key) !== undefined) { //겹치는 것이 있다는 뜻
      intersection.set(key, Math.min(A.get(key), B.get(key)));
    }
  }

  //합집합 구하기
  for(const [key, value] of A) {
    union.set(key, value);
  }

  for(const [key, value] of B) {
    if(union.get(key) === undefined) 
      union.set(key, value);
    else 
      union.set(key, Math.max(union.get(key), value));
  }

  const sumValues = (map) => {
    let sum = 0;
    for (const v of map.values())
      sum += v;
    return sum;
  }

  const interSize = sumValues(intersection);
  const unionSize = sumValues(union);


  if (unionSize === 0)
    return 65536;

  return Math.floor((interSize / unionSize) * 65536);
}

const str1 = "FRANCE";
const str2 = "french";

console.log(solution(str1, str2));