// abstract class Car {
//   public description: string;

//   public getDescription(): string{
//     return this.description;
//   }

//   public abstract price(): number;
// }

// abstract class CustomOrder extends Car {
//   decoratedCar: Car;
  
//   public abstract getDescription(): string

// } 
// class ModelS extends Car {
//   public description= "Model S"
//   public price():number {
//     return 70000
//   }
// }

// class ModelX extends Car {
//   public description = "Model X"
//   public price(): number {
//     return 90000
//   }
// }


// class TurboCharger extends CustomOrder {
//   constructor(car: Car){
//     super()
//     this.decoratedCar = car
//   }
  
//   public getDescription(): string{
//     return this.decoratedCar.getDescription() + ', with Turbo Charger' 
//   }


//   public price():number{
//     return this.decoratedCar.price() + 7000
//   }
// } 

// class BodyKit extends CustomOrder{
//   constructor(car: Car){
//     super()
//     this.decoratedCar = car
//   }

//   public getDescription(): string {
//       return this.decoratedCar.getDescription() + ', Wide Body Kit'
//   }

//   public price(): number {
//       return this.decoratedCar.price() + 5000
//   }
// } 

// let myOrder = new ModelX()
// myOrder = new BodyKit(myOrder)

// console.log(myOrder.price());
// console.log(myOrder.getDescription());



// abstract class Car{
//   public description: string;

//   public getDescription() : string{
//       return this.description;
//   };

//   public abstract cost(): number;
// }

// abstract class CarOptions extends Car{
//   public abstract decoratedCar: Car;
//   public abstract getDescription(): string;
// }

// // ------------------------------ Cars ------------------------------
// class ModelS extends Car{
//   public description = "Model S";

//   public cost(): number {
//       return 73000;
//   }
// }

// class ModelX extends Car {
//   public description = "Model X";

//   public cost(): number {
//       return 77000
//   }
// }

// // ------------------------------ Options ------------------------------
// class EnhancedAutoPilot extends CarOptions {
//   constructor(car: Car) {
//       super();
//       this.decoratedCar = car;
//   }

//   public getDescription(): string {
//       return this.decoratedCar.getDescription() + ', Enhanced Autopilot';
//   }

//   public cost(): number {
//       return this.decoratedCar.cost() + 5000;
//   }
// }

// class SmartAirSuspension extends CarOptions {
//   constructor(car: Car) {
//       super();
//       this.decoratedCar = car;
//   }

//   public getDescription(): string {
//       return this.decoratedCar.getDescription() + ', Smart Air Suspension';
//   }

//   public cost(): number {
//       return this.decoratedCar.cost() + 2500;
//   }
// }

// class RearFacingSeats extends CarOptions {
//   constructor(car: Car) {
//       super();
//       this.decoratedCar = car;
//   }

//   public getDescription(): string {
//       return this.decoratedCar.getDescription() + ', Rear Facing Seats';
//   }

//   public cost(): number {
//       return this.decoratedCar.cost() + 4000;
//   }
// }

// // ------------------------------ Configure our Tesla! ------------------------------
// let myTesla = new ModelS();
// myTesla = new SmartAirSuspension(myTesla);
// myTesla = new RearFacingSeats(myTesla);

// console.log(myTesla.cost());
// console.log(myTesla.getDescription());

abstract class Coffee{
  public description!: string;

  public getDescription() : string{
      return this.description;
  };

  public abstract cost(): number;
}

abstract class CoffeeDecorator extends Coffee{
  public decoratedCoffee!: Coffee;
  public abstract getDescription(): string;
}

// ------------------------------ Beverages ------------------------------
class Espresso extends Coffee{
  public description = "Espresso";

  public cost(): number {
      return 1.99;
  }
}

class HouseBlend extends Coffee {
  public description = "House blend";

  public cost(): number {
      return .99
  }
}

// ------------------------------ Condiments ------------------------------
class Sugar extends CoffeeDecorator {
  constructor(beverage: Coffee) {
      super();
      this.decoratedCoffee = beverage;
  }

  public getDescription(): string {
      return this.decoratedCoffee.getDescription() + ', Sugar';
  }

  public cost(): number {
      return this.decoratedCoffee.cost() + 0.20;
  }
}

class Milk extends CoffeeDecorator {
  constructor(beverage: Coffee) {
      super();
      this.decoratedCoffee = beverage;
  }

  public getDescription(): string {
      return this.decoratedCoffee.getDescription() + ', Milk';
  }

  public cost(): number {
      return this.decoratedCoffee.cost() + 0.20;
  }
}

// ------------------------------ Make our coffee! ------------------------------
let coffee = new Espresso();
coffee = new Sugar(coffee);
coffee = new Milk(coffee);

console.log(coffee.cost());
console.log(coffee.getDescription());