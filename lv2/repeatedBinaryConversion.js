function solution(s) {
  let count = 0;
  let delZero = 0;
  
  while(s.length > 1) {
    let binaryNum = s.split("").filter((num) => { //filter의 return은 해당 값을 포함시킬지 여부인 boolean
      if (num === "0") {
        delZero++;
        return false;
      }
      return true;
    }).join("");

    s = binaryNum.length.toString(2); //10진수를 2진수로 변환, 2진수를 10진수로 변환시키려면 parseInt(num, 2)
    count++;
  }

  return [count, delZero];
}

const s = "110010101001";

console.log(solution(s));