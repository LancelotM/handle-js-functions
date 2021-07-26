/**
 * 数组map
 */
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.arrayMap = function(callback,thisArg) {
    if(this == undefined){
        throw new TypeError('this is null or not undefined');
    }
    if(typeof callback !== 'function'){
        throw new TypeError('callback is not function');
    }
    const res = [];
    const O = Object(this);
    const len = O.length >>> 0;
    for(let i = 0; i < len; i++){
        if(i in O){
            res[i] = callback.call(thisArg, O[i], i, O);
        }
    }
    return res;
}

let testRes = testArray.arrayMap((item,index,arr)=>{
    console.log(item,index,arr);
    return item;
});

console.log(testRes);