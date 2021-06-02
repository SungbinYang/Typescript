// const a: number = undefined; // strict mode 상속

import React from "react"; //외부 라이브러리는 타이핑이 안되어 있기때문에 type 옵션을 지정해줘야 한다.

const hello = () => {
  console.log("hello"); // target에 따라 default로 lib가 잡힘
};
