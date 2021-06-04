interface Person1 { // 컴파일 되었을 때 사라짐. 컴파일 타임때만 필요
  name: string;
  age: number;
}

function hello1(person: Person1): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: Person1 = {
  name: 'Rovert',
  age: 26
};

hello1(p1);