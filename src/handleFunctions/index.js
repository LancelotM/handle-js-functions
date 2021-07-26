import './array';
import './arrayFliter';
import './arrayMap';
import './arrFlat';
import './arrUnique';

// const _list  = [1,2,3]
// const pList = new Proxy(_list,{
//   get(target, key,receiver) {
//     console.log('get value reflect:', key)
//     return Reflect.get(target, key, receiver)
//   },
//   set(target,key,value,receiver) {
//     console.log('set value reflect',key,value)
//     return Reflect.set(target,key,value,receiver)
//   }
// })
// pList.push(4)