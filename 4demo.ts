// 函数相关类型

function hello() {}

const hello1 = function() {}

const hello2 = () => {}


function add(a: number, b: number) {
  return a + b
}

const total4 = add(1, 2)


function sayHello(): void { // 没有返回值
  console.log('hello')
  // return 1
}

function errorEmitter(): never {
  while(true) {}
}

// 函数参数解构
function addd(
  {a, b}: {a: number, b: number}
  ): number {
  return a + b
}
const all = addd({a:1, b:2})