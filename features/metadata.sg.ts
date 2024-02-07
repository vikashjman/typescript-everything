import 'reflect-metadata';

const plane = {
    color: 'red'
};

Reflect.defineMetadata('test','This is a plane', plane, 'color');

Reflect.defineMetadata('note','hiThere', plane);
Reflect.defineMetadata('height',20, plane);

const note = Reflect.getMetadata('note',plane)
const height = Reflect.getMetadata('height',plane)
const test = Reflect.getMetadata('test', plane, 'color')

console.log(note)
console.log(height)
console.log(test)