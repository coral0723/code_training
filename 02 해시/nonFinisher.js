function solution(participant, completion) {
    let p = new Map();

    for (let name of participant) {
      if(!p.has(name))
        p.set(name, 1);
      else
        p.set(name, p.get(name) + 1);
    };

    for (let name of completion) {
      if(p.get(name) === 1)
        p.delete(name);
      else
        p.set(name, p.get(name) - 1);
    }

    return p.keys().next().value;
}

let participant = ["leo", "kiki", "eden"];
let completion = ["eden", "kiki"];

solution(participant, completion);