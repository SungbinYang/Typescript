function error(message: string): never { // 어떠한 형태도 리턴 되지 않는다.
  throw new Error(message);
}

function fail() {
  return error('failed');
}

function infiniteLoop(): never {
  while (true) {
    
  }
}

declare const a: string | number;

if (typeof a !== 'string') {
  a;
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

type ObjectIndexable = Indexable<{}>;