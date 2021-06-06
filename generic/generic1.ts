function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 더 많은 반복된 함수들...

function hello(message: any): any {
  return message;
}

console.log(hello('Rovert').length);
console.log(hello(39).length); // undefinded

// any는 모든것을 받아서 모든것을 주는 경우여서 undefinded가 나올 확률도 있지만 제네릭은 들어온 input에 의해서 정확한 타입으 나온다.
function helloGeneric<T>(message: T): T {
  return message;
}

console.log(helloGeneric('Rovert').length);
console.log(helloGeneric(26));
console.log(helloGeneric(true));