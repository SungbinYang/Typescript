"use strict";
// 각 객체들의 공통적인 데이터를 사용할 때 static 키워드를 사용한다.
class Person1 {
    hello() {
        console.log('안녕하세여!', Person1.CITY);
    }
    change() {
        Person1.CITY = "LA";
    }
}
Person1.CITY = "Seoul";
const person1 = new Person1();
person1.hello();
const person2 = new Person1();
person2.hello();
person1.change();
person2.hello();
