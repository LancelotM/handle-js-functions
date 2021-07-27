import 'utils';
/**
 * 数组map
 */
const testArray = [1, 2, 3, 4, 5];

Array.prototype.arrayReduce = function (callback, initialValue) {
    if(this == undefined){
        throw new TypeError('this is null or not undefined');
    }
    if(typeof callback !== 'function'){
        throw new TypeError('callback is not function');
    }
    const O = Object(this);
    const len = O.length >>> 0;
    let accumulator = initialValue;
    let k = 0;
    if(accumulator === undefined){
        while (k < len && !(k in O)) {
            k++;
        }
        if(k >= len){
            throw new TypeError('Reduce of empty array with no initial value');
        }
        accumulator = O[k++];
    }
    while (k < len) {
        if(k in O){
            accumulator = callback.call(undefined, accumulator, O[k], k, O);
        }
        k++
    }
    return accumulator;
}

const normal = testArray.reduce((a,b,c,d)=>{
    console.log(__filename,a,b,c,d);
    return a+b;
})

console.log(__filename,'normal',normal);

const handle = testArray.arrayReduce((a,b,c,d)=>{
    console.log(__filename,a,b,c,d);
    return a+b;
})

console.log(__filename,'handle',handle);