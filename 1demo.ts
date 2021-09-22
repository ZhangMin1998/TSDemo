// 静态类型的深度理解
// 1.变量的类型不能修改
// 2.变量上的属性和方法也确定了

// const count: number = 2021
// count = {}  报错

interface Point {
  x: number,
  y: number
}

const point: Point = {
  x: 3,
  y: 4
}

// const counter
// counter.