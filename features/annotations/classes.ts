class Vehicle {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  public drive(): void {
    console.log("chugga chugga");
  }

  public honk(): void {
    console.log("beep");
  }
}

class Ferrari extends Vehicle {
  drive(): void {
    console.log("vroom vroom");
  }

  public startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle: Vehicle = new Vehicle('oragne');

const c: Ferrari = new Ferrari('red');

c.startDrivingProcess();

vehicle.drive();
vehicle.honk();


class Box {
    constructor(public length:number, public width:number){}
}


