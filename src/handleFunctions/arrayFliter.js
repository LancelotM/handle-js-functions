import 'utils';
/**
 * 数组filter
 */
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//copilot
var copilotArrayFliter = function(array, callback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i],i,array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

Array.prototype.arrayFliter = function(callback,thisArg){
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
            if(callback.call(thisArg, O[i], i, O)){
                res.push(O[i]);
            }
        }
    }
    return res;
}

const copilotNewArray = copilotArrayFliter(testArray, function(item, index, array) {
    // console.log(item, index, array);
    return item >5;
})
console.log(__filename, 'copilotNewArray', copilotNewArray);

const newArray = testArray.arrayFliter(function(item, index, array) {
    // console.log(item, index, array);
    return item >5;
})
console.log(__filename, 'newArray', newArray);