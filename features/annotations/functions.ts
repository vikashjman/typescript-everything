const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const mulitply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// const throwError = (message: string): never => {
//   throw new Error(message);
// };

// const throwError = (message: string): void => {
//   if (!message) {
//     throw new Error(message);
//   }

// };


const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};

// distructuring with types
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({date, weather}: {date:Date, weather:string}) :void => {
    console.log(date);
    console.log(weather);
}
// const logWeather = (forecast:{date: Date, weather:string}) :void => {
//     console.log(forecast.date);
//     console.log(forecast.weather);
// }

logWeather(todaysWeather);


// Objects
