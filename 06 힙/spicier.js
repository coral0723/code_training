class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  remove() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if(this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown(0);
    }
    return min;
  }

  heapifyDown(index) {
    while (index < this.heap.length) {
      const left = (index << 1) + 1;
      const right = (index << 1) + 2;
      let smallest = index;
      if (left < this.heap.length && this.heap[left] < this.heap[smallest])
        smallest = left;
      if (right < this.heap.length && this.heap[right] < this.heap[smallest])
        smallest = right;
      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }

  mixScoville() {
    const first = this.remove();
    const second = this.remove();
    this.insert(first + (second * 2));
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();
  let count = 0;

  for(let s of scoville) 
    heap.insert(s);

  if (heap.heap[0] >= K)
    return count;

  while(heap.heap.length > 1) {
    count++;
    heap.mixScoville();
    if(heap.heap[0] >= K)
      return count;
  }

  return -1;
}

let scoville = [1, 2, 3, 9, 10, 12];
let K = 7;

console.log(solution(scoville, K));