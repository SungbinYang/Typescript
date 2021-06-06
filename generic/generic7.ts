interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: 'Rovert',
  age: 26
};

// IPerson[keyof IPerson] => IPerson["name" | "age"] => IPerson["name"] | IPerson["age"]
// => string | number
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] { // K는 유니온 타입이 아니라 name or age가 된다.
  return obj[key];
}

getProp(person, 'age');

function setProp<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

setProp(person, "name", "Albert");