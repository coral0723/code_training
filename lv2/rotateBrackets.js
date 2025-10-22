function solution(s) {
  let result = 0;
  const stack = [];
  const map = new Map();
  map.set("[", "]");
  map.set("{", "}");
  map.set("(", ")");

  for(let x = 0; x < s.length; x++) {
    if (["]", ")", "}"].includes(s[0])) { // s의 첫 번째 괄호가 닫는 괄호라면
      s = s.slice(1).concat(s[0]); // 왼쪽으로 한 바퀴 돌린 후
      continue; // 다음으로 이동
    }

    for (let bracket of s) { // s는 여는 괄호로 시작하니 하나씩 확인
      if (["[", "{", "("].includes(bracket)) { //여는 괄호라면
        stack.push(bracket);
      } else { //닫는 괄호라면
        if (map.get(stack[stack.length - 1]) === bracket) //스택의 마지막 원소와 짝이 맞다면
          stack.pop(); // 스택에서 제거
      }
    }

    if (stack.length === 0) { //스택에 괄호가 없다면
      console.log(`${x}번째: ${s}`);
      result++;
    } else { //스택에 괄호가 남아있다면
      stack.length = 0;
    }

    s = s.slice(1).concat(s[0]);
  }

  return result;
}

const s = "}]()[{";

console.log(solution(s));