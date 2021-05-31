"use strict";
var _a;
console.log(Symbol('foo') === Symbol('foo')); // false
var sym = Symbol(); // Symbol은 수정이 불가능하고 고유한 값
var obj = (_a = {},
    _a[sym] = "value",
    _a);
console.log(obj[sym]);
