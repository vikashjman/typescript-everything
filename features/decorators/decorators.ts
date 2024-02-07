function testDecorator(target: any, key: string): any {
  console.log("Target", target);
  console.log("Key", key);

}
class Boat {
  color!: string;

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logMethod
  pilot(): void {
    console.log("Swish");
  }
}


function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(target); // logs the constructor function for the class
  console.log(key); // logs the name of the decorated method
  console.log(descriptor.value); // logs the method descriptor
}

class MyClass {
  @logMethod
  myMethod() {
    // method implementation
  }
}


console.log("Boat Prototype", Boat.prototype)
