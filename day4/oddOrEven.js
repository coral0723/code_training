function solution(n) {
  var answer = 0;
  
  if(n%2 === 1) { //홀수
      for(let i=0; i<n+1; i++) {
          if(i%2 === 1)
              answer += i;
      }
      return answer;
  }
  else { //짝수
      for(let i=0; i<n+1; i++) {
          if(i%2 === 0)
              answer += i*i;
      }
      return answer;
  }
}
