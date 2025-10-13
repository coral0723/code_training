class Queue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.storage = new Map();
  }

  size() { return this.rear - this.front; }
  add(value) {
    this.storage.set(this.rear++, value);
  }
  remove() {
    if(this.size() === 0)  return;
    const value = this.storage.get(this.front);
    this.storage.delete(this.front++);
    return value;
  }
}

function solution(s) {
  const queue = new Queue();

  if(!s.includes("(") || s[0] === ")") // ")" 만 있는 경우, ")"로 시작하는 경우
    return false;

  for (let c of s) {
    if(c === "(")
      queue.add(c);
    else if(c === ")")
      queue.remove();
  }

  if (queue.size() === 0)
    return true;
  else
    return false;
}

const s = ")()";

console.log(solution(s));

