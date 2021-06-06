function helloBasic<T, U>(message: T, comment: U): T {
  return message;
}

helloBasic<string, number>('Rovert', 26);
helloBasic(36, 16); // 추론규정에 따라서 T는 36