class MyClass1 {
  myMethod() {
    console.log("Hello from myMethod!");
  }

  myOtherMethod() {
    console.log("Hello from myOtherMethod!");
  }
}

for (const prop in MyClass1.prototype) {
  console.log(prop);
}

class MyClass2 {
  myMethod() {
    console.log("Hello from myMethod!");
  }

  myOtherMethod() {
    console.log("Hello from myOtherMethod!");
  }
}

const props = Object.getOwnPropertyNames(MyClass2.prototype);

console.log(props);
