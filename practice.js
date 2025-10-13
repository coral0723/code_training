class Deque {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.storage = new Map();
  }

  size() {
    return this.rear - this.front;
  }

  addFront(value) {
    return this.storage.set(--this.front, value);
  }

  addRear(value) {
    return this.storage.set(this.rear++, value)
  }

  removeFront() {
    if (this.size() === 0) return;
    const value = this.storage.get(this.front);
    this.storage.delete(this.front++);
    return value;
  }

  removeRear() {
    if (this.size() === 0) return;
    const value = this.storage.get(--this.rear);
    this.storage.delete(this.rear);
    return value;
  }

  peekFront() {
    return this.storage.get(this.front);
  }

  peekRear() {
    return this.storage.get(this.rear - 1);
  }
}