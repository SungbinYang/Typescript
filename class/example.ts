class Person {

  public constructor(private _name: string, private age: number) { // constructor에서는 async를 할수 없다.
    
  }

  get name() { // getter는 없애면 에러는 안나지만 컴파일 후 undefined 출력
    return this._name + " Yang";
  }

  set name(n: string) { // setter는 없애면 컴파일 단에서 에러
    this._name = n;
  }
}

const p1: Person = new Person("Rovert", 26);

console.log(p1);
console.log(p1.name); // get을 하는 함수 :: Getter
p1.name = 'Sungbin'; // set을 히는 함수 :: Setter
console.log(p1);
// p1.age = 26;
// console.log(p1.age); // 직접 할당을 했으므로 값은 잘 나오지만 런타임상 클래스는 모른다.