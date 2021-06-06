class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person('Rovert', 26);
// new Person<string>(398);
new Person<string, number>('Rovert', 22);