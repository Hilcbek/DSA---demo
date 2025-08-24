export class NodeClass<T> {
  value: T;
  next: NodeClass<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}
