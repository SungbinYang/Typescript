interface Person3 {
  name: string;
  age?: number; // optional property
  [index: string]: any; // indexable type, optional type, index 타입을는 숫자 또는 문자열로 사용이 가능하다
}

function hello3(person : Person3): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p31: Person3 = {
  name: 'Rovert',
  age: 26
};

const p32: Person3 = {
  name: 'Anna',
  sisters: ['Sung', 'Chan'] // indexable type 
};

const p33: Person3 = {
  name: 'Bob',
  father: p31,
  mother: p32
}

hello3(p33);