// function logger(target: any, key: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;

//   descriptor.value = function (...args: any[]) {
//     console.logger(`Method ${key} called with arguments: ${JSON.stringify(args)}`);
//     const result = originalMethod.apply(this, args);
//     console.logger(`Method ${key} returned: ${JSON.stringify(result)}`);
//     return result;
//   };

//   return descriptor;
// }
// class Test {
//   @logger
//   myMethod(arg1: string, arg2: number): string {
//     return `Hello, ${arg1}! You passed in ${arg2}.`;
//   }
// }
