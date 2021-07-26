import 'utils';
/**
 * 数组去重
 */

const arr = [1,1,'1',17,true,true,false,false,'true','a',{},{}]

const res1 = Array.from(new Set(arr));
console.log(__filename,'res1',res1)

const res2 = [...new Set(arr)]
console.log(__filename,'res2',res2)

const unique1 = arr => {
    const res = []
    for(let val of arr){
        // if(res.indexOf(val) === -1) res.push(val)
        if(!res.includes(val)) res.push(val)
    }
    return res;
}
console.log(__filename,'res3',unique1(arr))

const unique2 = arr => {
    return arr.filter((item,index)=>{
        return arr.indexOf(item) === index
    })
}
console.log(__filename,'res4',unique2(arr))

const unique3 = arr => {
    const map = new Map();
    const res = []
    for(let val of arr){
        if(!map.has(val)){
            map.set(val,true);
            res.push(val);
        }
    }
    return res;
}
console.log(__filename,'res5',unique3(arr))