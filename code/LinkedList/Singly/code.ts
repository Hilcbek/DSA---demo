import { NodeClass } from './types';

export class SinglyLinkedList<T> {
  private head: NodeClass<T> | null;
  private tail: NodeClass<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value: T): void {
    const newNode = new NodeClass(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }
  appendFirst(value: T): void {
    const newNode = new NodeClass(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.head && this.head.next) {
      this.head = newNode;
      newNode.next = this.tail;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }
  appendLast(value: T): void {
    let newNode = new NodeClass(value);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  appendArrayOfItems(values: T[]): void {
    let i = 0;
    while (i < values.length) {
      const newNode = new NodeClass(values[i]);
      if (!this.length) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail!.next = newNode;
        this.tail = newNode;
      }
      this.length += 1;
      i += 1;
    }
  }

  appendAnArrayItemAfterSomeElement(values: T[], element: T): string | void {
    if (!this.length) {
      console.log('Currently this list null!');
    }
    let i = 0;

    let current = this.head;
    while (current) {
      if (current.value === element) {
        let nnext = current.next;
        while (i < values.length) {
          let newNode = new NodeClass(values[i]);
          current.next = newNode;
          current = newNode;

          i += 1;
        }
        current.next = nnext;
        return;
      }
      current = current.next;
    }
  }

  print(): string | null {
    let current = this.head;
    let output = '';
    while (current) {
      output += current.value;
      if (current.next) {
        output += ' -> ';
      }
      current = current.next;
    }
    return output;
  }
}
