interface User {
  name: string;
  age: number;
  isAdmin?: boolean;
}

function createUser({ name: string, age: number }): User {
  return {
    name,
    age,
    isAdmin: false,
  };
}

createUser({ name: "Alice", age: 30 });
