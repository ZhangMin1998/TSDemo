// 抽象类
abstract class Geom {
  width: number = 1;
  getType() {
    return 'zm'
  }
  abstract getArea(): number;
}

// new Geom() // 报错  抽象类只能被继承 不能被new

class Circle extends Geom {
  getArea() {
    return 123
  }
}

// 接口与类 相似
interface Person11 {
  name: string
}
interface Teacher11 extends Person11 {
  teachingAge: number
}
interface Student11 extends Person11 {
  age: number
}
interface Driver11 extends Person11 {
  age: number
}
const teacher11 = {
  name: 'liu',
  teachingAge: 23
}
const student11 = {
  name: 'zm',
  age: 23
}
const getUserInfo = (user: Person11) => {
  console.log(user.name)
}
getUserInfo(teacher11)
getUserInfo(student11)
