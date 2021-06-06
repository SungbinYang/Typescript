// 타입은 항상 가장 작은 범위로 정해두는게 훨씬 좋다.
class PersonExtends<T extends string | number> { // T는 string 혹은 number만 사용이 가능하다.
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends('Rovert');
new PersonExtends(26);
// new PersonExtends(true);