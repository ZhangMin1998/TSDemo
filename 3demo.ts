// 类型注解和类型推断
// type annotation 类型注解，我们来告诉TS变量是什么类型
// type inference 类型推断，TS 会自动尝试分析变量的类型
// 如果 TS 能够自动分析出变量类型，我们就什么也不需要做了
// 如果 TS 无法分析变量类型的话，我们就需要使用类型注解

// let count3: number
// count3 = 123

// let countInference = 123

// const firstNumber = 1
// const secondNumber = 2
// const total = firstNumber + secondNumber

function getTotal(first: number, second: number) {
  return first + second
}
const total = getTotal(1, 2)

const date = new Date()
