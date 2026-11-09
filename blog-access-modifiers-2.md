# Access Modifiers

Access modifiers control who can see or change a class property. There are three types of access modifier inside typescript OOP concept.

### 1. public

It's a default modifier it's accessible from everywhere like class, child class and outside.

### 2. private

It's only accessible from the same class where its defined not form child class though.

### 3. protected

It's accessible from the class and its child class which inherit the parent class.

### 4. readonly

The value can be set only declaration or in the constructor after that its readonly can't be changed

```ts
class Vehicle {
  constructor(
    public brand: string,
    private engineNo: string,
    protected fuel: string,
    readonly id: number,
  ) {}

  public showEngine(): string {
    return this.engineNo;
  }
}

class Bus extends Vehicle {
  showFuel(): string {
    return this.fuel; //this fuel is the parent class property and protected thats why its accessible from child
    // return this.engineNo; 
    // it's not possible because it's a private property which is only accessible on it's own class
  }
}

const bus = new Bus("Toyota", "E123", "Gasoline", 1);

console.log(bus.brand); //public
// console.log(bus.engineNo); //private only accessible from class
// console.log(bus.fuel);     //protected only accessible from class and it's child
// bus.id = 2;                //readonly only can assign during declare latter can't modify or change
```
