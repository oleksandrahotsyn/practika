interface User {
  name: string;
  address?: Adress;
}

interface Adress {
  city: string;
}

const user: User = {
  name: "Alice",
  address: {
    city: "Kyiv",
  },
};

console.log(user.address?.city);
