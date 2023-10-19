class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    } else {
      return "Stack is empty";
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    } else {
      return "Stack is empty";
    }
  }

  size() {
    return this.items.length;
  }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack:", stack.items); // Output: Stack: [1, 2, 3]
console.log("Peek:", stack.peek());   // Output: Peek: 3
console.log("Pop:", stack.pop());     // Output: Pop: 3
console.log("Stack size:", stack.size()); // Output: Stack size: 2
