console.log(Symbol('foo') === Symbol('foo')); // false

const sym = Symbol(); // Symbol은 수정이 불가능하고 고유한 값

const obj = { // 접근제어일 경우 symbol을 사용
  [sym]: "value"
};

console.log(obj[sym]);