function solution(A,B){
  let result = 0;
  A = A.sort((a, b) => a - b); // sort()만 하면 문자열 기준으로 정렬함
  B = B.sort((a, b) => b - a);

  while(A.length > 0 && B.length > 0) {
    result += A.shift() * B.shift();
  }

  return result;
}

const A = [1, 2]; 
const B = [3, 4];

console.log(solution(A, B));