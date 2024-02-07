const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

const carsByMake : string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// Help with inference when extracting values

const Carolla = carMakers[0];

const myCar = carMakers.pop();


// Prevent incompatible values

// carMakers.push(100)


// Help with 'map'
carMakers.map((car:string):string =>{
    return car.toUpperCase();
})

// Flexible types
// const importantDates: (Date | string)[] = [new Date(), '2030-10-10']
const importantDates: (Date | string)[] = []

importantDates.push(new Date())


