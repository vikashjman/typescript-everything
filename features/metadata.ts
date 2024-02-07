import "reflect-metadata";

@printMetadata
class Plane {
  color: string = "red";

  @markFunction("Hi there")
  fly(): void {
    console.log("vrrrrrrrrrr");
  }
}

function markFunction(secret: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("secret", secret, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  console.log(Object.getOwnPropertyNames(target.prototype));
  for (let key of Object.getOwnPropertyNames(target.prototype)) {
    if (key !== "constructor") {
      const secret = Reflect.getMetadata("secret", target.prototype, key);
      console.log(secret);
    }
  }
}

// function printMetadata(target: typeof Plane) {
//   console.log(target, target.prototype)
//   for (let key in target.prototype) {
//     const secret = Reflect.getMetadata("secret", target.prototype, key);
//     console.log(secret);
//   }
// }
// const plane = {
//     color: 'red'
// }

// Reflect.defineMetadata('note', 'hi there', plane);

// console.log(plane)
// const note = Reflect.getMetadata('note', plane)
// console.log(note)

// Reflect.defineMetadata('note', 'hi there', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color')
// console.log(note)
// function markFunction(target:Plane, key:string){
//     Reflect.defineMetadata('secret', 123, target, key);

// }

// const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
// console.log(secret);
