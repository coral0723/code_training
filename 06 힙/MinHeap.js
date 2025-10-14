class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    while(index > 0) {
      const parentIndex = (index - 1) >> 1; // 부모 노드 인덱스: (k - 1) / 2
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  remove() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown(0);
    }
    return min;
  }

  heapifyDown(index) {
    while (index < this.heap.length) {
      const left = (index << 1) + 1; // 왼쪽 자식 노드: 2k + 1
      const right = (index << 1) + 2; // 오른쪽 자식 노드: 2k + 2
      let smallest = index;
      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) // left 인덱스가 heap 범위 내이고, smallest보다 작다면
        smallest = left;
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) // right 인덱스가 heap 범위 내이고, smallest보다 작다면
        smallest = right;
      if (smallest === index) break; // 현재 index가 smallest라면
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]; // smallest와 index의 값 교환
      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}