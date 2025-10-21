function solution(want, number, discount) {
  let answer = 0;

  //원하는 물품과 수량을 객체로 저장
  const wantMap = {};
  for (let i = 0; i < want.length; i++) {
    wantMap[want[i]] = number[i];
  }

  //10일씩 확인
  for (let i = 0; i <= discount.length - 10; i++) {
    const window = discount.slice(i, i + 10);
    const windowMap = {};

    //현재 10일 구간의 제품 개수 세기
    for (const item of window) {
      windowMap[item] = (windowMap[item] || 0) + 1;
    }

    //두 객체가 같은지 비교
    let isMatch = true;
    for (const item in wantMap) {
      if (wantMap[item] !== windowMap[item]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch) answer++;
  }

  return answer;
}


const want = ["banana", "apple", "rice", "pork", "pot"];
const number = [3, 2, 2, 2, 1];
const discount = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"];