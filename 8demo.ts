// 类的定义与继承

class Person8 {
  name = 'zm'
  getName() {
    return this.name
  }
}
const person1 = new Person8()
console.log(person1.getName())

class Teacher8 extends Person8 {
  getTeacherName() {
    return 'zm666'
  }
  getName() { // 会覆盖父类
    // return 'zm9999999'
    return super.getName() + '99999999' // super 如果子类重写了父类，如果还想调用，就用super
  }
}
const teacher8 = new Teacher8()
console.log(teacher8.getTeacherName())
console.log(teacher8.getName())


