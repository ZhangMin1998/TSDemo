// 数组和元组

const a1:number[] = [1,2,3]
const a2: (number | string)[] = [1, '2', 3]
const a3: undefined[] = [undefined]

type user = {name: string, age: number} // 类型别名
const a4: {name: string}[] = [{name: 'zm'}]
const a5: user[] = [{name: 'zm', age: 23}]




// 元组 数组长度固定，类型也固定
// const zmInfo = ['zm', 23, 172]
const zmInfo: [string, number, number] = ['zm', 23, 172] 
// 处理csv文件有较大用处
