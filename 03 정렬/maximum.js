function solution(numbers) {
    let strNumbers = [];

    for (let number of numbers) {
      strNumbers.push(number.toString());
    };

    strNumbers.sort((a, b) => (b + a) - (a + b));

    if(strNumbers[0] === '0')
      return '0';

    return strNumbers.join('');
}

let numbers = [3, 30, 34, 5, 9];

console.log(solution(numbers));