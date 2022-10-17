const { NotImplementedError  } = require('../extensions/index.js');
//const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    let currNode = this.head;
    return currNode;
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    let currNode;
    if(this.length === 0){
      this.head = new ListNode(value)
    } else {
      currNode = this.head;
      while (currNode.next){
        currNode = currNode.next;
      }
      currNode.next = new ListNode(value)
    }
    this.length++;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    if(this!= null){
      let currNode = this.head;
      this.head = currNode.next;
      this.length--;
      return currNode.value
    }

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
