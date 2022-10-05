export class LinkedList {
  first?: Node | null;
  last?: Node | null;

  addLast = (value: number) => {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      if (this.last) {
        this.last.next = node;
        this.last = node;
      }
    }
  };

  addFirst = (value: number) => {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
  };

  private isEmpty = (): boolean => {
    return this.first == null;
  };

  indexOf = (item: number): number => {
    let index = 0;
    let current = this.first;
    while (current != null) {
      if (current.value === item) return index;
      current = current.next;
      index++;
    }

    return -1;
  };

  contains = (item: number): boolean => {
    return this.indexOf(item) !== -1;
  };

  removeFirst = () => {
    if (this.isEmpty()) throw new Error("NoSuchElementException");

    if (this.first === this.last) {
      this.first = this.last = null;
      return;
    }

    let second = this.first?.next;
    this.first!.next = null;
    this.first = second;
  };

  removeLast = () => {
    if (this.isEmpty()) {
      throw new Error("NoSuchElementException");
    }

    if (this.first === this.last) {
      this.first = this.last = null;
      return;
    }
    let previous = this.getPrevious(this.last!);
    this.last = previous;
    this.last!.next = null;
  };

  private getPrevious = (node: Node) => {
    let current = this.first;
    while (current != null) {
      if (current.next === node) return current;
      current = current.next;
    }

    return null;
  };

  reverse = () => {
    this.last = this.first;
    let prev = null;
    let current = this.first;
    while (current != null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.first = prev;
  };
}
export class Node {
  value: number;
  next?: Node | null;
  constructor(val: number) {
    this.value = val;
    this.next = null;
  }
}
