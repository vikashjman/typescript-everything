export class Stack<T> {
  public arr: T[];
  constructor(){
    this.arr = [];
  }
  push(x: T) {
    this.arr.push(x);
  }
  pop(): T | undefined {
    return this.arr.pop();
  }

  isEmpty(): Boolean {
    return this.arr.length ? true : false;
  }

  print(): void {
    this.arr.forEach((a: T) => console.log(a));
  }
}
