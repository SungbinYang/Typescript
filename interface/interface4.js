"use strict";
var p41 = {
    name: 'Rovert',
    age: 26,
    hello: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + " \uC785\uB2C8\uB2E4.");
    }
};
var p42 = {
    name: 'Rovert',
    age: 26,
    hello: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + " \uC785\uB2C8\uB2E4.");
    }
};
// const p43: Person4 = {
//   name: 'Rovert',
//   age: 26,
//   hello: (): void => {
//     console.log(`안녕하세요! ${this.name} 입니다.`);
//   }
// };
p41.hello();
p42.hello();
