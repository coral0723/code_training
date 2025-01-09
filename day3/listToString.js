function solution(arr) {
  var answer = '';
  arr.map((c) => {
      answer += c;
  })
  return answer;
}

console.log(solution(["a", "b", "c"]));