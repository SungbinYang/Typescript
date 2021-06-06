"use strict";
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        // console.log('get');
        return this._name + " Yang";
    }
    set name(n) {
        console.log('set');
        this._name = n;
    }
}
const p1 = new Person("Rovert", 26);
console.log(p1);
console.log(p1.name); // get을 하는 함수 :: Getter
p1.name = 'Sungbin'; // set을 히는 함수 :: Setter
console.log(p1);
// p1.age = 26;
// console.log(p1.age); // 직접 할당을 했으므로 값은 잘 나오지만 런타임상 클래스는 모른다.
