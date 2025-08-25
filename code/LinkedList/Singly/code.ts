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
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
  }
  appendBefore(value: T, before: T): void {
    if (!this.length) {
      console.log('currently the list is empty');
      return;
    }

    let newNode = new NodeClass(value);
    let current = this.head;
    let prev: NodeClass<T> | null = null;

    if (this.head && !this.head.next && this.head.value === before) {
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
      return;
    }
    while (current) {
      if (current.value === before) {
        if (prev) {
          prev.next = newNode;
          newNode.next = current;
          this.length++;
        }
        return;
      }
      prev = current;
      current = current.next;
    }
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

  appendAfter(value: T, after: T): void {
    if (!this.length) console.log('This linked list is empty');

    let newNode = new NodeClass(value);
    if (this.head && !this.head.next && this.head.value === after) {
      this.head.next = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    let current = this.head;

    while (current) {
      if (current.value === after) {
        if (current.next) {
          newNode.next = current.next;
          current.next = newNode;
        } else {
          current.next = newNode;
          this.tail = newNode;
        }
      }
      this.length++;
      current = current.next;
    }
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
          this.length += 1;
          i += 1;
        }

        current.next = nnext;
        return;
      }
      current = current.next;
    }
  }

  removeElemenet(element: T): void {
    if (!this.length) {
      console.log('Currently the list empty!');
      return;
    }
    if (this.head?.value === element) {
      this.head = this.head.next;
      this.length -= 1;

      if (!this.head) {
        this.tail = null;
      }
      return;
    }
    let current = this.head;
    while (current?.next) {
      if (current.next.value === element) {
        current.next = current.next.next;
        this.length -= 1;

        if (!current.next) {
          this.tail = current;
        }
        return;
      }
      current = current?.next;
    }
  }
  removeFromLast(): void {
    if (!this.length) {
      console.log('Currently the list empty! nothing to remove');
      return;
    }
    let current = this.head;
    while (current?.next?.next) {
      current = current.next;
    }
    if (current?.next) {
      current.next = null;
    }
    this.tail = current;
    this.length -= 1;
  }

  removeSomeNumberOfElements(index: number, amount: number): void {
    if (
      !this.length ||
      index >= this.length ||
      isNaN(index) ||
      isNaN(amount) ||
      index < 0 ||
      amount <= 0
    ) {
      console.log("Removing elements can't be done!");
      return;
    }

    if (index === 0) {
      while (this.head && amount > 0) {
        this.head = this.head.next;
        this.length--;
        amount--;
      }
      if (!this.head) this.tail = null;
      return;
    }

    let i = 0;
    let current = this.head;
    while (i < index - 1 && current) {
      current = current.next;
      i++;
    }

    while (current?.next && amount > 0) {
      current.next = current.next.next;
      this.length--;
      amount--;
    }

    if (!current?.next) {
      this.tail = current;
    }
  }

  print(): void {
    let current = this.head;
    let output = '';
    while (current) {
      output += current.value;
      if (current.next) {
        output += ' -> ';
      }
      current = current.next;
    }
    console.log(output);
  }
}
