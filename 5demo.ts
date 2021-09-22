// 基础类型 boolean, number,string,void,undifine,symbol,null
// const a = 123; // 类型推断
let a: number
a = 123


// 对象类型 object,class,function, array
const func = (a: string): number => { // 接受一个参数，返回一个number  number可以去掉
  return parseInt(a, 10)
}

const func2: (str: string) => number = (str) => { // 冒号后面就是类型 =后面就是函数的具体实现
  return parseInt(str, 10)
}

const date1 = new Date()

let temp:number | string = 123
temp = 'aaa'

