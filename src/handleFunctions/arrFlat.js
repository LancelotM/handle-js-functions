import 'utils';
/** 
 * 数组扁平化
 */

let arr = [1,[2,[3,[4,5]]],6];

const res1 = arr.flat(4)
console.log(__filename,'res1',res1)

const res2 = JSON.stringify(arr).replace(/\[|\]/g,'').split(',');
console.log(__filename,'res2',res2)

const res3 = JSON.parse('['+ JSON.stringify(arr).replace(/\[|\]/g,'') +']');
console.log(__filename,'res3',res3)

const flatten1 = (arr) => {
    return arr.reduce((prev,next,key,map)=>{
        return prev.concat(Array.isArray(next)?flatten1(next):next);
    },[])
}
console.log(__filename,'res4',flatten1(arr))

const flatten2 = (arr,lastRes) => {
    const res = lastRes || [];
    for (const arrItem of arr) {
        if(Array.isArray(arrItem)){
            flatten2(arrItem,res)
        }else{
            res.push(arrItem);
        }
    }
    return res;
}
console.log(__filename,'res5',flatten2(arr))