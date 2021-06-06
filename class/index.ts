// class => object
// {rovert: 'male', jacob: 'male'}
// {chloe: 'female', alex: 'male', anna: 'female'}

// 인덱스 시그니쳐는 초기화를 설정할수가 없다.
// 인덱스 시그니쳐는 동적으로 값이 들어올 때 유용하다.
class Students {
  [index: string]: 'male' | 'female'; // rovert, jacob..등 이런것들이 다 string 타입이며 어떤 것이 외도 string으로 바뀐다 또한 실제 값이 string이다.

  mark: 'male' = 'male'; // 항상 mark는 male이라는 값을 가지고 있으며 나머지는 optional이다.
} 

const a = new Students();
a.rovert = "male";
a.jacob = "male";

console.log(a);

const b = new Students();
b.chloe = 'female';
b.alex = 'male';
b.anna = 'female';

console.log(b);