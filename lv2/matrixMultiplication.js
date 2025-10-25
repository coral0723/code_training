function solution(arr1, arr2) {
  const answer = Array.from({ length: arr1.length }, () => Array(arr1[0].length).fill(0));

  for (let i = 0; i < arr1.length; i++) { // arr1의 행을 순회
    for (let j = 0; j < arr2[0].length; j++) { // arr1의 col만큼 반복
      for (let k = 0; k < arr2.length; k++) {      // arr1의 열 = arr2의 행
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return answer;
}



const arr1 = [[2, 3, 2], [4, 2, 4], [3, 1, 4]];
const arr2 = 	[[5, 4, 3], [2, 4, 1], [3, 1, 1]];

solution(arr1, arr2);