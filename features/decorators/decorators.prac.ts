@classDecorators
class ABC {
  @print
  printSomething () {
    console.log('Something')
  }
  printSomething1 () {
    console.log('Something')
  }
  printSomething2 () {
    console.log('Something')
  }
  printSomething3 () {
    console.log('Something')
  }
}

function print (target: any, key: string, desc: PropertyDescriptor) {
  console.log("Target: ", target, "Key: ", key,"Desc: ", desc)
  console.log("Value: ",desc.value)
  console.log("Property: ",Object.getOwnPropertyNames(target))
  // for(let key of Object.getOwnPropertyNames(target.prototype)){
  //   console.log(target.prototype[key])
  // }
}

function classDecorators (target: Function) {
  // console.log('Iterating')
  // console.log(target)
  for (let key of Object.getOwnPropertyNames(target.prototype)) {
    console.log(target.prototype[key])
  }
}
