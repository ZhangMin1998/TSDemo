// 类中的访问类型和构造器
// private  protected public 访问类型
// public 允许我在类的内外被调用
// private 允许在类内被调用
// protected 允许在类内及继承的子类中使用
class Person9  {
  // protected name: string;
  public name: string = 'a';
  public sayHi() {
    this.name; // 内调用
    console.log('hi')
  }
  private sayAbc() {
    this.name
  }
}
class Teacher9 extends Person9 {
  public sayBye() {
    this.name
    this.sayHi()
  }
}
const person9 = new Person9()
person9.name = 'zm'// 外调用
console.log(person9.name)
person9.sayHi()



// constructor
// class People9 {//传统写法
//   public name: string = 'zm'
//   constructor(name: string) { // new一个实例的瞬间 constructor就会执行
//     this.name = name
//   }
// }
// 等同于
class People9 {//简化写法
  // public name: string = 'zm'
  constructor(public name: string) { // new一个实例的瞬间 constructor就会执行
    // this.name = name
  }
}
const people9 = new People9('zm666')
console.log(people9.name)

class man extends People9 {
  constructor(public age:number) {// 父子继承时，子类里面写了constructor 那么必须调用super才不报错
    super('zm')
  }
}
const liu = new man(28)
console.log(liu.age)
console.log(liu.name)