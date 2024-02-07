// 1. Write a function that takes in an array of numbers and returns the sum of all the numbers.
function arrLength(arr: Number[]): Number {
  return arr.length;
}

console.log(arrLength([1, 3, 4, 5, 4, 5, 5]));

// 2. Write a function that takes in a string and returns the length of the string.
function strLength(str: string): Number {
  return str.length;
}

console.log(strLength("Hello World "));

// 3. Create an interface for a Person object that has the properties: name (string), age (number), and address (string).
interface Person {
  name: string;
  age: Number;
  address: string;
}

// 4. Write a function that takes in an array of Person objects and returns an array of all the names of the people in the array.

const persons: Person[] = [
  {
    name: "Jhon",
    age: 23,
    address: "Anand Nagar",
  },
  {
    name: "Joe",
    age: 45,
    address: "Brookly",
  },
  {
    name: "Rachel",
    age: 13,
    address: "Queens",
  },
  {
    name: "Chandler",
    age: 55,
    address: "arkansas , minesota",
  },
];
function printPersons(persons: Person[]): string[] {
  return persons.map((a: Person): string => a.name);
}
console.log(printPersons(persons));

// 5. Create a class called Rectangle that has a constructor that takes in two arguments: width and height. The class should also have a method called getArea() that returns the area of the rectangle (width * height).
class Rectangle {
  constructor(public width: number, public height: number) {}
  getArea(): number {
    return this.height * this.width;
  }
}
// 6. Create an abstract class called Shape that has an abstract method called getArea(). Create two classes that extend Shape: Circle and Rectangle. Implement the getArea() method for each subclass.
abstract class Shape {
  abstract getArea(): number;
}

class Chaturbhuj extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  getArea(): number {
    return this.width * this.height;
  }
}

class Gola extends Shape {
  constructor(public radius: number) {
    super();
  }
  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

// 7. Write a function that takes in two parameters: a number and an array of numbers. The function should return true if the number is in the array and false otherwise.
function include(n: Number, arr: Number[]): Boolean {
  return arr.includes(n);
}


