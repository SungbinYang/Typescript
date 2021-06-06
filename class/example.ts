class Person {
  name: string = "Rovert";
  age!: number; // 개발자가 어디선가 값을 할당할것이라고 의도적으로 명시하기 위해 !붙여놓음 생성자에 할당할 경우 !생략 가능

  constructor(age?: number) { // constructor에서는 async를 할수 없다.
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }

  async init() {

  }
}

const p1: Person = new Person(26);
// await p1.init();
const p2: Person = new Person();

console.log(p1);
// p1.age = 26;
console.log(p1.age); // 직접 할당을 했으므로 값은 잘 나오지만 런타임상 클래스는 모른다.