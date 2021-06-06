"use strict";
class ClassName {
    constructor() {
    }
    static getInstance() {
        // ClassName으로부터 만든 object가 없으면, 만든다.
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        // ClassName으로 부터 만든 object가 있으면 그걸 return
        return ClassName.instance;
    }
}
ClassName.instance = null;
const a1 = ClassName.getInstance();
const b1 = ClassName.getInstance();
console.log(a1 === b1);
