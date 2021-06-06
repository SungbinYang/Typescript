interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'Rovert',
  gender: "male"
}

// p81.gender = 'female'; // readonly는 값 변경이 불가능하다.