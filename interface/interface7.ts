interface HelloPerson {
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string, age: number | undefined) {
  console.log(`안녕하세요! ${name} 입니다.`);
}

helloPerson('Rovert', 26);