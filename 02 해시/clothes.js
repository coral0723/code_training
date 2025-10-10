function solution(clothes) {
    const map = new Map();

    for (let [name, category] of clothes) {
        if (!map.has(category))
            map.set(category, 1);
        else
            map.set(category, map.get(category) + 1);
    }

    let answer = 1;
    for (let value of map.values()) {
        answer *= (value + 1);
    }

    return answer - 1;
}

let clothes = [["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]];

console.log(solution(clothes));