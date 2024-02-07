@classDecorator
class Ship {
  //   @logError
  //   pilot(): void {
  //     throw new Error();
  //   }
  @testDec
  color: string = "red";
  @logError("Oops, ship is sunk!")
  pilot(@parameterDecorator speed:string): void {
    if(speed === 'fast'){
        console.log('swish')
    }else{
        console.log('nothing')
    }
  }


//   @logError("Oops, ship is sunk!")
//   pilot(): void {
//     throw new Error();
//   }
}

function parameterDecorator(target:any, key:string, index:number){
    console.log(key, index)
}



function classDecorator(constructor:typeof Ship){
    console.log(constructor)
}


function testDec(target: any, key: string) {
  console.log(target);
  console.log(key);
}

// Decorator factory
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;
    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

// new Ship().pilot();
