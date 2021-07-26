import 'utils';
/**
 * 类数组是具有lenght属性，但不具有数组原型上的方法
 * 常见的类数组有 arguments、DOM操作方法返回的结果
 */
const domArr = document.querySelectorAll('div');

console.log(__filename,'domArr',domArr)
const res1 = Array.from(domArr)
console.log(__filename,'res1',res1)

const res2 = [...domArr]
console.log(__filename,'res2',res2)

const res3 = Array.prototype.slice.call(domArr)
console.log(__filename,'res3',res3)

const res4 = Array.prototype.concat.apply([],domArr)
console.log(__filename,'res4',res4)