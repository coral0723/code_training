function solution(citations) {
    citations.sort((a,b) => b - a);
    let h = 0;

    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            h = i + 1; 
        } else {
            break; 
        }
    }

    return h;
}

let citations = [3, 0, 6, 1, 5];

console.log(solution(citations)); 