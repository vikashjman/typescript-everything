// function myClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
//     return class extends constructor {
//       newProperty = "new property";
//       hello = "override";
//     };
//   }

//   @myClassDecorator
//   class TestClass {
//     property = "property";
//     hello: string;

//     constructor(m: string) {
//       this.hello = m;
//     }
//   }

//   console.log(new TestClass("world").newProperty);
//   console.log(new TestClass("world").hello);
//   console.log(new TestClass("world").property);

function addFuelToRocket<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    fuel = 100;
  };
}

@addFuelToRocket
class Rocket {
  fuel: number = 1;
}

const myRocket = new Rocket();
console.log(myRocket.fuel); // Output: 100




function log(target:Function){
    console.log(Object.getOwnPropertyNames(target.prototype))
    console.log(target.prototype)
}
@log
class Nasa{
    constructor(public rocket:string){}
}


