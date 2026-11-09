# Type Alias vs Interface in TypeScript

There are three main differences between `type` and `interface`.

### 1. What can they define?

A **type alias** allows us to create custom types. We can use it for objects, unions, tuples, primitives, and many other types.

An **interface** is mainly used to define the structure of objects.

```ts
type Status = "success" | "error";
type User = { name: string; age: number };

interface Product {
  name: string;
  price: number;
}
```

### 2. Extending and merging types

With `interface`, we can use `extends` to combine interfaces.

```ts
interface Vehicle {
  fuel: string;
  mileage: number;
}

interface Bus extends Vehicle {
  horn: string;
}
```

Now `Bus` contains all the properties of `Vehicle`, along with its own `horn` property.

With a type alias, we use the intersection operator (`&`) to combine types.

```ts
type Vehicle = { fuel: string; mileage: number };
type Bus = Vehicle & { horn: string };
```

### 3. Declaration merging

Interfaces with the same name can be merged automatically.

```ts
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}
```

Now `Animal` has both `name` and `age`.

However, declaring two type aliases with the same name causes an error.

### When should we use which?

- Use **interface** to define API response objects, object structures, and extend or augment existing interfaces from libraries.
- Use **type** for unions, tuples, utility types like `Pick`, `Omit`, and `Partial`, and other custom type combinations.

**My rule:** Use `interface` for object shapes and `type` when creating more complex or flexible types. Both are useful, and the choice depends on the situation.