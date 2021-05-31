declare const maybe: unknown;

if (typeof maybe === 'number') { // 타입가드
  const aNumber: number = maybe;
}

if (maybe === true) { // 타입가드
  const aBoolean: boolean = maybe;
  
  // const aString: string = maybe;
}

if (typeof maybe === 'string') { // 타입가드 
  const aString: string = maybe;
}