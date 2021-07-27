import 'utils';
/**
 * 数组map
 */
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.arrayForEach = function(callback,thisArg) {
    if(this == undefined){
        throw new TypeError('this is null or not undefined');
    }
    if(typeof callback !== 'function'){
        throw new TypeError('callback is not function');
    }
    const O = Object(this);
    const len = O.length >>> 0;
    for(let i = 0; i < len; i++){
        if(i in O){
            callback.call(thisArg, O[i], i, O);
        }
    }
}

let testRes = testArray.arrayForEach((item,index,arr)=>{
    console.log(__filename,item,index,arr);
});

console.log(__filename, 'testRes', testRes);