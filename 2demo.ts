// 基础类型和对象类型

let count:number = 123
const myname: string = 'zm'
// null,undefined,symbol,boolean,void

const teacher: {
  name: string,
  age: number
} = {
  name: 'sb',
  age: 99
}

const numbers: number[] = [1, 2, 3]

class Person {}
const zm: Person = new Person()

const getTotal2: () => number = () => {
  return 123
}