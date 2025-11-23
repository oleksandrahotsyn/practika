interface Container<T> {
  items: T[];
  addItem(item: T): void;
  getItem(index: number): T;
}

const numberContainer: Container<number> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};
const stringContainer: Container<string> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

numberContainer.addItem(10);
stringContainer.addItem("hello");

function getLastElement<T>(items: T[]): T {
  return items[items.length - 1];
}

console.log(getLastElement(stringContainer.items));

console.log(getLastElement(numberContainer.items));
