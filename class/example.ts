class Person {

  public constructor(public name: string, private age: number) { // constructor에서는 async를 할수 없다.
    
  }
}

const p1: Person = new Person("Rovert", 26);

console.log(p1);
// p1.age = 26;
// console.log(p1.age); // 직접 할당을 했으므로 값은 잘 나오지만 런타임상 클래스는 모른다.