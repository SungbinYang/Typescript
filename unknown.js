"use strict";
if (typeof maybe === 'number') { // 타입가드
    var aNumber = maybe;
}
if (maybe === true) { // 타입가드
    var aBoolean = maybe;
    // const aString: string = maybe;
}
if (typeof maybe === 'string') { // 타입가드 
    var aString = maybe;
}
