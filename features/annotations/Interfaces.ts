// This code too works crazy , more generic
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};


const liquid = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary():string{
        return `Drink is of color ${this.color}, carbonated ${this.carbonated}, sugar ${this.sugar}`
    }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
};

printSummary(oldCivic);
printSummary(liquid);


/*
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summar(): string;
}
const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summar(): string {
    return `Name ${this.name}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
*/
