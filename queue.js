/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    // edge case, no items
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
      // next defaults to null
    }

    // edge case, only 1 item
    else if (this.size === 1) {
      this.first.next = newNode;
      this.last = newNode;
      // next defaults to null;
    }

    // else standard
    else {
      this.last.next = newNode;
      this.last = newNode;
      // next defaults to null;
    }
    this.size++;
    return;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // edge case no items
    if (this.size === 0) {
      throw new Error("Queue is empty")
    }

    // edge case one item
    else if (this.size === 1) {
      const foundNode = this.first;
      this.first = null;
      this.last = null;
      this.size--;
      return foundNode.val;
    }

    // else standard
    else {
      const foundNode = this.first;
      this.first = this.first.next;
      this.size--;
      return foundNode.val;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first?.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return (this.size === 0);
  }
}

module.exports = Queue;
