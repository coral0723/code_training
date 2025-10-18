function solution(n, words) {
    const set = new Set();
    set.add(words[0]); // 첫 번째 단어 미리 넣기
    let person = 2; // 현재 사람 번호(첫 단어는 넣었으니깐 두 번째 사람부터 시작)
    let turn = 1; // 현재 턴

    for (let i = 1; i < words.length; i++) {
      // 끝말잇기가 틀렸을 경우
      if(words[i - 1].slice(-1) !== words[i].charAt(0)) 
        return [person, turn];

      //단어가 있는 경우
      if(set.has(words[i])) 
        return [person, turn];
      
      //문제가 없어서 다음 사람 턴으로 넘어가야 하는 경우
      set.add(words[i]); // 새로운 단어 추가
      if(n === person) { //마지막 사람이었다면
        turn++; // 턴 증가
        person = 1; // 첫 번째 사람부터 다시 시작
      } else { // 마지막 사람이 아니었다면
        person++; // 다음 사람부터 시작
      }
    }

    return [0, 0]; //탈락자가 없다면
}

const n = 3;
const words = 	["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"];

console.log(solution(n, words));