# Type Alias vs Interface

There are 3 main differences in between type alias and interface

### 1. The first difference on definition?

A _type alias_ give us the permission to create custom types. We can use it for objects, unions, tuples, primitives, and many other types.

An _interface_ is mainly used to define the structure of objects also we can define function structure using it.

```ts
type Status = "Active" | "Inactive";
type Vehicle = { Make: string; Model: string; milage: number };

interface Vehicle {
  Make: string;
  Model: string;
  milage: number;
}
```

### 2. Second difference on extending and merging

with interface we can combine two interface using extends keyword

```ts
interface Vehicle {
  fuel: string;
  mileage: number;
}

interface Bus extends Vehicle {
  horn: string;
}
```

Now bus has all the properties of vehicle along with it's own horn property

With a type alias we use the intersection operator (&) to combine types.
In type alias we can get the same thing using intersection operator to combine two types

```ts
type Vehicle = { fuel: string; mileage: number };
type Bus = Vehicle & { horn: string };
```

### 3. third difference on declaring

Interfaces with the same name can be merged automatically.
In interface if we declare 

```ts
interface User {
  name: string;
}

interface User {
  phone: number;
}
```

Now User has both name and phone.

If we do the same thing using type alias it will give error and it's not permitted

### When should we use which?

Use interface for object shapes and type when creating more complex or flexible types unions, tuples, utility types like Pick, Omit etc. Both are useful, and the choice depends on the situation.
