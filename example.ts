class Person {

  public readonly name: string = 'Rovert';

  private readonly country: string;

  public constructor(private _name: string, private age: number) { // constructor에서는 async를 할수 없다.
    this.country = "Korea"; // 값을 초기화는 상관이 없다.
  }

  hello() {
    // this.country = 'England'; // this.country까지는 상관이 없지만 값이 바뀌면서 readonly 성격을 무시하고 있다. 
  }
}

const p1: Person = new Person("Rovert", 26);

console.log(p1);
console.log(p1.name); // get을 하는 함수 :: Getter
// p1.name = 'Sungbin'; // set을 히는 함수 :: Setter, readonly인 경우는 값을 변경할수가 없다.
console.log(p1);
// p1.age = 26;
// console.log(p1.age); // 직접 할당을 했으므로 값은 잘 나오지만 런타임상 클래스는 모른다.