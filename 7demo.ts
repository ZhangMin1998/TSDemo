// interface接口 就是在开发过程中做语法提示的工具 不会被编译成js

// const getPersonName = (person) => {
//   console.log(person.name)
// }

// const setPersonName = (person, name) => { // person如果是undifined就会报错
//   person.name = name
// }

// 所以就这么写
const getPersonName1 = (person: {name: string}) => {
  console.log(person.name)
}

const setPersonName1 = (person: {name: string}, name: string) => {
  person.name = name
}

// 最后可以用这种 不用重复写

interface Person { // 接口 能用接口就用接口
  // readonly name: string, // readonly 只能读，不可编辑
  name: string,
  age?: number, // ?表示可有可无
  [propName: string]: any, // 预留
  say(): string
}
interface Teacher extends Person { // 接口可以继承
  teach(): string
}
interface SayHi {
  (word: string): string
}
const say: SayHi = (word: string) => {
  return 'hi'
}

type Person1 = { // 类型别名 与 interface 相似但不完全一样
  name: string
}

const getPersonName2 = (person: Person) => {
  console.log(person.name)
}

const setPersonName2 = (person: Teacher, name: string) => {
  person.name = name
}

const person = {
  name: 'zm',
  sex: 'male',
  say() {
    return 'hello'
  },
  teach() {
    return 'teach'
  }
}
getPersonName2(person)
// getPersonName2({ // 加了 26行就不报错
//   name: 'zm',
//   sex: 'male'
// })
setPersonName2(person, 'zm')
