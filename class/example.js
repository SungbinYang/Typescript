"use strict";
class Person {
    constructor(age) {
        this.name = "Rovert";
        this.age = age;
    }
}
const p1 = new Person(26);
console.log(p1);
// p1.age = 26;
console.log(p1.age); // 직접 할당을 했으므로 값은 잘 나오지만 런타임상 클래스는 모른다.
