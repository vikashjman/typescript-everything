class ArrayOfNumbers {
    constructor(public collection:number[]){}

    get(index:number): number{
        return this.collection[index]
    }
}


class ArrayOfString {
    constructor(public collection: string[]){}

    get(index:number):string {
        return this.collection[index]
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]){}

    get(index:number):T{
        return this.collection[index]
    }
}

const nums = new ArrayOfAnything<number>([1, 3, 5, 3])
const chars = new ArrayOfAnything(['Hello', "Your mama"])
console.log(nums.get(1))
console.log(chars.get(1))


// Examples of generics with functions

function printStrings(arr: string[]):void{
    for(let str of arr){
        console.log(str)
    }
}

function printNumbers(arr: number[]):void{
    for(let num of arr)
        console.log(num)
}

function printAnything<T>(arr: T[]):void{
    for(let a of arr){
        console.log(a)
    }
}

printAnything<number>([1, 3, 4, 5])



// Generic Constraints

class Bus{
    print(){
        console.log("I am a Bus");
    }
}

class House{
    print(){
        console.log("I am a House")
    }
}

interface Printable{
    print():void;
}
function printHouseOrCars<T extends Printable>(arr: T[]){
    for(let a of arr){
        a.print();
    }
}

printHouseOrCars<Bus>([new Bus(), new Bus()])