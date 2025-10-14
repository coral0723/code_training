function solution(s) {
  let result = "";
  let capitalizeNext = true; // 첫 글자는 대문자 처리

  for (let ch of s) {
    if (ch === " ") {
      result += ch;
      capitalizeNext = true; // 다음 글자는 대문자로
    } else {
      if (capitalizeNext) {
        result += ch.toUpperCase();
      } else {
        result += ch.toLowerCase();
      }
      capitalizeNext = false; // 다음 글자는 소문자
    }
  }

  return result;
}

const s = " 3people unFollowed me ";
console.log(solution(s));